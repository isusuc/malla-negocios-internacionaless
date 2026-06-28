/*
====================================================
MALLA CURRICULAR
Negocios Internacionales
====================================================

Tipos:

normal
nfi
complementaria
enfasis
prueba

*/

const TOTAL_CREDITOS = 164;
const TIPOS = {

    NORMAL: "normal",

    NFI: "nfi",

    COMPLEMENTARIA: "complementaria",

    ENFASIS: "enfasis",

    PRUEBA: "prueba"

};

const materias = [

/* ====================================================
SEMESTRE 1
==================================================== */

{
    id:"induccion",
    nombre:"Inducción",
    semestre:1,
    creditos:0,
    tipo:"normal",
    requisitos:[],
    creditosMinimos:0
},

{
    id:"bienestar",
    nombre:"Bienestar Universitario",
    semestre:1,
    creditos:1,
    tipo:"normal",
    requisitos:[],
    creditosMinimos:0
},

{
    id:"tallerSalud",
    nombre:"Taller de Salud",
    semestre:1,
    creditos:0,
    tipo:"normal",
    requisitos:[],
    creditosMinimos:0
},

{
    id:"mat1",
    nombre:"Matemáticas I",
    semestre:1,
    creditos:3,
    tipo:"normal",
    requisitos:[],
    creditosMinimos:0
},

{
    id:"economia",
    nombre:"Economía",
    semestre:1,
    creditos:3,
    tipo:"normal",
    requisitos:[],
    creditosMinimos:0
},

{
    id:"negocios",
    nombre:"Negocios Internacionales",
    semestre:1,
    creditos:3,
    tipo:"normal",
    requisitos:[],
    creditosMinimos:0
},

{
    id:"proyecto0",
    nombre:"Proyecto 0: Aprendizaje activo",
    semestre:1,
    creditos:1,
    tipo:"normal",
    requisitos:[],
    creditosMinimos:0
},

{
    id:"busqueda",
    nombre:"Búsqueda de información",
    semestre:1,
    creditos:1,
    tipo:"normal",
    requisitos:[],
    creditosMinimos:0
},

{
    id:"administracion",
    nombre:"Administración y Estrategia",
    semestre:1,
    creditos:3,
    tipo:"normal",
    requisitos:[],
    creditosMinimos:0
},

{
    id:"pensamientoComp",
    nombre:"Pensamiento Computacional",
    semestre:1,
    creditos:3,
    tipo:"nfi",
    requisitos:[],
    creditosMinimos:0
},

/* ====================================================
SEMESTRE 2
==================================================== */

{
    id:"mat2",
    nombre:"Matemáticas II",
    semestre:2,
    creditos:3,
    tipo:"normal",
    requisitos:["mat1"],
    creditosMinimos:0,
    requiereBilinguismo:false
},

{
    id:"infoFinanciera",
    nombre:"Información financiera y de costos para la toma de decisiones",
    semestre:2,
    creditos:3,
    tipo:"normal",
    requisitos:[],
    creditosMinimos:0,
    requiereBilinguismo:false
},

{
    id:"mercadeo",
    nombre:"Mercadeo Internacional",
    semestre:2,
    creditos:3,
    tipo:"normal",
    requisitos:["negocios"],
    creditosMinimos:0,
    requiereBilinguismo:false
},

{
    id:"comIntercultural",
    nombre:"Comunicación intercultural",
    semestre:2,
    creditos:2,
    tipo:"normal",
    requisitos:[],
    creditosMinimos:0,
    requiereBilinguismo:false
},

{
    id:"proyecto1",
    nombre:"Proyecto 1: Laboratorio de culturas",
    semestre:2,
    creditos:3,
    tipo:"normal",
    requisitos:["comIntercultural"],
    creditosMinimos:0,
    requiereBilinguismo:false
},

{
    id:"gestionInformacion",
    nombre:"Gestión de la información",
    semestre:2,
    creditos:1,
    tipo:"normal",
    requisitos:["busqueda"],
    creditosMinimos:0,
    requiereBilinguismo:false
},

{
    id:"ciudadania",
    nombre:"Ciudadanía y democracia",
    semestre:2,
    creditos:3,
    tipo:"nfi",
    requisitos:[],
    creditosMinimos:0,
    requiereBilinguismo:false
},

{
    id:"nfi2",
    nombre:"NFI",
    semestre:2,
    creditos:3,
    tipo:"nfi",
    requisitos:[],
    creditosMinimos:0,
    requiereBilinguismo:false
},

{
    id:"lectura1",
    nombre:"Prueba de Lectura I",
    semestre:2,
    creditos:0,
    tipo:"prueba",
    requisitos:[],
    creditosMinimos:0,
    requiereBilinguismo:false
},

{
    id:"escritura1",
    nombre:"Prueba de Escritura I",
    semestre:2,
    creditos:0,
    tipo:"prueba",
    requisitos:[],
    creditosMinimos:0,
    requiereBilinguismo:false
},

/* ====================================================
SEMESTRE 3
==================================================== */

{
    id:"ecoComercio",
    nombre:"Economía del Comercio Internacional",
    semestre:3,
    creditos:3,
    tipo:"normal",
    requisitos:["economia"],
    creditosMinimos:0,
    requiereBilinguismo:false
},

{
    id:"fundamentosFinanzas",
    nombre:"Fundamentos de Finanzas",
    semestre:3,
    creditos:3,
    tipo:"normal",
    requisitos:["infoFinanciera"],
    creditosMinimos:0,
    requiereBilinguismo:false
},

{
    id:"pensamientoHistorico",
    nombre:"Pensamiento Histórico de los Negocios",
    semestre:3,
    creditos:3,
    tipo:"normal",
    requisitos:[
        "negocios",
        "lectura1",
        "escritura1"
    ],
    creditosMinimos:0,
    requiereBilinguismo:false
},

{
    id:"derechoComercio",
    nombre:"Derecho del Comercio Internacional",
    semestre:3,
    creditos:3,
    tipo:"normal",
    requisitos:[],
    creditosMinimos:0,
    requiereBilinguismo:false
},

{
    id:"presentaciones",
    nombre:"Presentaciones Efectivas",
    semestre:3,
    creditos:1,
    tipo:"normal",
    requisitos:[],
    creditosMinimos:0,
    requiereBilinguismo:false
},

{
    id:"proyecto2",
    nombre:"Proyecto 2: Selección de Mercados Internacionales",
    semestre:3,
    creditos:3,
    tipo:"normal",
    requisitos:["mercadeo"],
    creditosMinimos:0,
    requiereBilinguismo:false
},

{
    id:"talento1",
    nombre:"Talento I",
    semestre:3,
    creditos:0,
    tipo:"prueba",
    requisitos:[
        "comIntercultural",
        "proyecto1"
    ],
    creditosMinimos:0,
    requiereBilinguismo:false
},

{
    id:"nfi3",
    nombre:"NFI",
    semestre:3,
    creditos:3,
    tipo:"nfi",
    requisitos:[],
    creditosMinimos:0,
    requiereBilinguismo:false
},

/* ====================================================
SEMESTRE 4
==================================================== */

{
    id:"gestionDistribucion",
    nombre:"Gestión de la Distribución Física Internacional I",
    semestre:4,
    creditos:3,
    tipo:"normal",
    requisitos:["talento1"],
    creditosMinimos:46,
    requiereBilinguismo:false
},

{
    id:"analisisGeopolitico",
    nombre:"Análisis Geopolítico",
    semestre:4,
    creditos:3,
    tipo:"normal",
    requisitos:["pensamientoHistorico"],
    creditosMinimos:36,
    requiereBilinguismo:false
},

{
    id:"comunicacionEscrita",
    nombre:"Comunicación Escrita",
    semestre:4,
    creditos:1,
    tipo:"normal",
    requisitos:[],
    creditosMinimos:0,
    requiereBilinguismo:false
},

{
    id:"proyecto3",
    nombre:"Proyecto 3: Integración Económica y Acceso a Mercados",
    semestre:4,
    creditos:3,
    tipo:"normal",
    requisitos:["derechoComercio"],
    creditosMinimos:0,
    requiereBilinguismo:false
},

{
    id:"estadistica",
    nombre:"Estadística Aplicada a los Negocios",
    semestre:4,
    creditos:3,
    tipo:"normal",
    requisitos:["mat2"],
    creditosMinimos:0,
    requiereBilinguismo:false
},

{
    id:"formulacionProyectos",
    nombre:"Formulación y Evaluación de Proyectos",
    semestre:4,
    creditos:3,
    tipo:"normal",
    requisitos:["infoFinanciera"],
    creditosMinimos:0,
    requiereBilinguismo:false
},

{
    id:"lectura2",
    nombre:"Prueba de Lectura II",
    semestre:4,
    creditos:0,
    tipo:"prueba",
    requisitos:[],
    creditosMinimos:0,
    requiereBilinguismo:false
},

{
    id:"escritura2",
    nombre:"Prueba de Escritura II",
    semestre:4,
    creditos:0,
    tipo:"prueba",
    requisitos:[],
    creditosMinimos:0,
    requiereBilinguismo:false
},

{
    id:"nfi4",
    nombre:"NFI",
    semestre:4,
    creditos:3,
    tipo:"nfi",
    requisitos:[],
    creditosMinimos:0,
    requiereBilinguismo:false
},

/* ====================================================
SEMESTRE 5
==================================================== */

{
    id:"finanzasInternacionales",
    nombre:"Finanzas Internacionales",
    semestre:5,
    creditos:3,
    tipo:"normal",
    requisitos:["fundamentosFinanzas"],
    creditosMinimos:0,
    requiereBilinguismo:false
},

{
    id:"gerenciaComercial",
    nombre:"Gerencia Comercial Internacional",
    semestre:5,
    creditos:3,
    tipo:"normal",
    requisitos:[],
    creditosMinimos:55,
    requiereBilinguismo:false
},

{
    id:"estudiosInternacionales",
    nombre:"Introducción a Estudios Internacionales",
    semestre:5,
    creditos:2,
    tipo:"normal",
    requisitos:[
        "pensamientoHistorico",
        "analisisGeopolitico"
    ],
    creditosMinimos:0,
    requiereBilinguismo:false
},

{
    id:"legislacion1",
    nombre:"Legislación de Comercio Exterior I",
    semestre:5,
    creditos:3,
    tipo:"normal",
    requisitos:[],
    creditosMinimos:73,
    requiereBilinguismo:false
},

{
    id:"programacionNegocios",
    nombre:"Programación para los Negocios",
    semestre:5,
    creditos:1,
    tipo:"normal",
    requisitos:[
        "estadistica",
        "comunicacionEscrita"
    ],
    creditosMinimos:0,
    requiereBilinguismo:false
},

{
    id:"proyecto4",
    nombre:"Proyecto 4: Organizaciones Intergubernamentales",
    semestre:5,
    creditos:3,
    tipo:"normal",
    requisitos:[
        "proyecto3"
    ],
    creditosMinimos:55,
    requiereBilinguismo:false
},

{
    id:"materiaComplementaria1",
    nombre:"Materia Complementaria",
    semestre:5,
    creditos:3,
    tipo:"complementaria",
    requisitos:[],
    creditosMinimos:0,
    requiereBilinguismo:false
},

{
    id:"nfi5",
    nombre:"NFI",
    semestre:5,
    creditos:3,
    tipo:"nfi",
    requisitos:[],
    creditosMinimos:0,
    requiereBilinguismo:false
},

{
    id:"enfasis1",
    nombre:"Línea de Énfasis",
    semestre:5,
    creditos:3,
    tipo:"enfasis",
    requisitos:[],
    creditosMinimos:0,
    requiereBilinguismo:false
},

/* ====================================================
SEMESTRE 6
==================================================== */

{
    id:"estrategiaInternacional",
    nombre:"Estrategia Internacional",
    semestre:6,
    creditos:3,
    tipo:"normal",
    requisitos:[
        "gerenciaComercial",
        "proyecto4"
    ],
    creditosMinimos:0,
    requiereBilinguismo:false
},

{
    id:"gestionCadena1",
    nombre:"Gestión de la Cadena de Suministro Global I",
    semestre:6,
    creditos:3,
    tipo:"normal",
    requisitos:[
        "gestionDistribucion2"
    ],
    creditosMinimos:0,
    requiereBilinguismo:false
},

{
    id:"gestionIntercultural",
    nombre:"Gestión Intercultural",
    semestre:6,
    creditos:2,
    tipo:"normal",
    requisitos:[
        "estudiosInternacionales"
    ],
    creditosMinimos:0,
    requiereBilinguismo:false
},

{
    id:"legislacion2",
    nombre:"Legislación de Comercio Exterior II",
    semestre:6,
    creditos:3,
    tipo:"normal",
    requisitos:[
        "legislacion1"
    ],
    creditosMinimos:0,
    requiereBilinguismo:false
},

{
    id:"negociacionContratos",
    nombre:"Negociación de Contratos Internacionales",
    semestre:6,
    creditos:2,
    tipo:"normal",
    requisitos:[
        "proyecto3"
    ],
    creditosMinimos:0,
    requiereBilinguismo:false
},

{
    id:"laboratorioMultilingue",
    nombre:"Laboratorio Multilingüe",
    semestre:6,
    creditos:1,
    tipo:"normal",
    requisitos:[
        "gestionIntercultural"
    ],
    creditosMinimos:0,
    requiereBilinguismo:false
},

{
    id:"proyecto5",
    nombre:"Proyecto 5: Inteligencia de Mercados",
    semestre:6,
    creditos:3,
    tipo:"normal",
    requisitos:[
        "proyecto4"
    ],
    creditosMinimos:0,
    requiereBilinguismo:false
},

{
    id:"materiaComplementaria2",
    nombre:"Materia Complementaria",
    semestre:6,
    creditos:3,
    tipo:"complementaria",
    requisitos:[],
    creditosMinimos:0,
    requiereBilinguismo:false
},

{
    id:"enfasis2",
    nombre:"Línea de Énfasis",
    semestre:6,
    creditos:3,
    tipo:"enfasis",
    requisitos:[],
    creditosMinimos:0,
    requiereBilinguismo:false
},
/* ====================================================
SEMESTRE 7
==================================================== */

{
    id:"negociacionContratos2",
    nombre:"Negociación de Contratos Internacionales",
    semestre:7,
    creditos:2,
    tipo:"normal",
    requisitos:["proyecto3"],
    creditosMinimos:0,
    requiereBilinguismo:false
},

{
    id:"laboratorioMultilingue",
    nombre:"Laboratorio Multilingüe",
    semestre:7,
    creditos:1,
    tipo:"normal",
    requisitos:["gestionIntercultural"],
    creditosMinimos:0,
    requiereBilinguismo:false
},

{
    id:"proyecto6",
    nombre:"Proyecto 6: Plan de Internacionalización",
    semestre:7,
    creditos:3,
    tipo:"normal",
    requisitos:["estrategiaInternacional"],
    creditosMinimos:0,
    requiereBilinguismo:false
},

{
    id:"competenciasEvaluativas",
    nombre:"Competencias Evaluativas",
    semestre:7,
    creditos:1,
    tipo:"normal",
    requisitos:[],
    creditosMinimos:90,
    requiereBilinguismo:false
},

{
    id:"talento2",
    nombre:"Talento II",
    semestre:7,
    creditos:0,
    tipo:"prueba",
    requisitos:[
        "legislacion1",
        "gestionCadena1",
        "talento1"
    ],
    creditosMinimos:100,
    requiereBilinguismo:false
},

{
    id:"enfasis3",
    nombre:"Línea de Énfasis",
    semestre:7,
    creditos:3,
    tipo:"enfasis",
    requisitos:[],
    creditosMinimos:0,
    requiereBilinguismo:false
},

{
    id:"enfasis4",
    nombre:"Línea de Énfasis",
    semestre:7,
    creditos:3,
    tipo:"enfasis",
    requisitos:[],
    creditosMinimos:0,
    requiereBilinguismo:false
}
];

