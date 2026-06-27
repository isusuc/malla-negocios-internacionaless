/*
======================================================
MALLA CURRICULAR
Negocios Internacionales
======================================================
*/

const contenedor = document.getElementById("malla");

const barra = document.getElementById("barraProgreso");

const textoProgreso = document.getElementById("porcentaje");

let progreso = JSON.parse(localStorage.getItem("progresoMalla")) || {};

let inglesB2 = JSON.parse(localStorage.getItem("inglesB2")) || false;

let tercerIdioma = JSON.parse(localStorage.getItem("tercerIdioma")) || false;
function guardarDatos(){

    localStorage.setItem(
        "progresoMalla",
        JSON.stringify(progreso)
    );

    localStorage.setItem(
        "inglesB2",
        JSON.stringify(inglesB2)
    );

    localStorage.setItem(
        "tercerIdioma",
        JSON.stringify(tercerIdioma)
    );

}
function obtenerCreditos(){

    let total = 0;

    materias.forEach(materia=>{

        if(progreso[materia.id]){

            total += materia.creditos;

        }

    });

    return total;

}
function actualizarBarra(){

    const aprobados = obtenerCreditos();

    textoProgreso.textContent =
        `${aprobados} / ${TOTAL_CREDITOS} créditos`;

    const porcentaje =
        (aprobados/TOTAL_CREDITOS)*100;

    barra.style.width = porcentaje+"%";

}
function crearSemestres(){

    contenedor.innerHTML="";

    for(let i=1;i<=9;i++){

        const tarjeta=document.createElement("section");

        tarjeta.className="semestre";

        tarjeta.id="semestre"+i;

        tarjeta.innerHTML=`<h2>Semestre ${i}</h2>`;

        contenedor.appendChild(tarjeta);

    }

}

function materiaAprobada(id){

    return progreso[id] === true;

}

function cumpleRequisitos(materia){

    const creditos = obtenerCreditos();

    if(creditos < materia.creditosMinimos){
        return false;
    }

    for(const requisito of materia.requisitos){

        if(!materiaAprobada(requisito)){
            return false;
        }

    }

    if(materia.requiereBilinguismo){

        if(!inglesB2 || !tercerIdioma){
            return false;
        }

    }

    return true;

}
function crearMaterias(){

    materias.forEach(materia=>{

        const semestre = document.getElementById("semestre"+materia.semestre);

        const tarjeta = document.createElement("div");

        tarjeta.classList.add("materia");

        tarjeta.classList.add(materia.tipo);

        tarjeta.dataset.id = materia.id;

        /* Créditos */

        if(materia.creditos>0){

            const creditos=document.createElement("span");

            creditos.className="creditos";

            creditos.textContent=materia.creditos;

            tarjeta.appendChild(creditos);

        }

        /* Nombre */

        const nombre=document.createElement("div");

        nombre.textContent=materia.nombre;

        tarjeta.appendChild(nombre);

        /* ¿Está aprobada? */

        if(materiaAprobada(materia.id)){

            tarjeta.classList.add("aprobada");

        }

        /* ¿Está bloqueada? */

        if(!cumpleRequisitos(materia) && !materiaAprobada(materia.id)){

            tarjeta.classList.add("bloqueada");

            let mensaje="";

            const pendientes=[];

            materia.requisitos.forEach(req=>{

                if(!materiaAprobada(req)){

                    const encontrada=materias.find(m=>m.id===req);

                    if(encontrada){

                        pendientes.push(encontrada.nombre);

                    }

                }

            });

            if(materia.creditosMinimos>0){

                pendientes.push(
                    `Tener ${materia.creditosMinimos} créditos aprobados`
                );

            }

            if(materia.requiereBilinguismo){

                pendientes.push(
                    "Completar Bilingüismo"
                );

            }

            const tooltip=document.createElement("div");

            tooltip.className="tooltip";

            tooltip.innerHTML=pendientes.join("<br>");

            tarjeta.appendChild(tooltip);

        }

        tarjeta.addEventListener("click",()=>{

            if(tarjeta.classList.contains("bloqueada")){
                return;
            }

            progreso[materia.id]=!materiaAprobada(materia.id);

            guardarDatos();

            render();

        });

        semestre.appendChild(tarjeta);

    });

}
function configurarBilinguismo(){

    const checkIngles=document.getElementById("inglesB2");

    const checkIdioma=document.getElementById("idioma3");

    checkIngles.checked=inglesB2;

    checkIdioma.checked=tercerIdioma;

    checkIngles.addEventListener("change",()=>{

        inglesB2=checkIngles.checked;

        guardarDatos();

        render();

    });

    checkIdioma.addEventListener("change",()=>{

        tercerIdioma=checkIdioma.checked;

        guardarDatos();

        render();

    });

}
function render(){

    crearSemestres();

    crearMaterias();

    actualizarBarra();

    configurarBilinguismo();

}

render();
