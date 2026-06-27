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

