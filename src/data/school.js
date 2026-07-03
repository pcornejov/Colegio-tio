// Datos institucionales de la Escuela José Miguel Carrera Verdugo.
// IMPORTANTE: existen colegios homónimos "José Miguel Carrera" en otras
// comunas de Chile (Los Andes, La Serena, etc.), e incluso otro
// establecimiento homónimo "José Miguel Carrera Verdugo" administrado por
// el SLEP Colchagua en Chimbarongo, O'Higgins (dominio jmcarrera.slepcol.cl,
// NO relacionado con este colegio). Todo lo aquí contenido corresponde
// exclusivamente al establecimiento de San Carlos, Ñuble (Itihue 426),
// administrado por el SLEP Punilla Cordillera (sleppunillacordillera.gob.cl).
// Los campos marcados con TODO(confirm) no han sido verificados con una
// fuente oficial primaria y deben confirmarse antes de tratarse como
// definitivos. Estos comentarios son solo para uso interno del equipo de
// desarrollo y nunca deben mostrarse en la interfaz pública del sitio.

export const school = {
  nombreOficial: 'Escuela José Miguel Carrera Verdugo',
  comuna: 'San Carlos',
  region: 'Región de Ñuble',
  pais: 'Chile',

  // Dirección confirmada en la ficha de Facebook oficial del colegio
  // ("Itihue #426") y en un gráfico institucional oficial ("Itihue 426 -
  // San Carlos"): el nombre correcto de la calle es "Itihue", no "Ituhue".
  direccion: 'Itihue 426, San Carlos, Región de Ñuble, Chile',

  // Fuente: listado de establecimientos de sleppunillacordillera.gob.cl.
  // TODO(confirm): validar dígito verificador y formato con Mineduc/DEG.
  rbd: '3744-3',

  // Dependencia confirmada: la ficha oficial de Facebook del colegio
  // ("Escuela Jose M Carrera V", San Carlos) indica explícitamente
  // "SLEP Punilla Cordillera" en su campo de dependencia, y coincide con
  // un gráfico institucional oficial. Ya no requiere confirmación adicional.
  slep: {
    nombre: 'SLEP Punilla Cordillera',
    cobertura: ['Coihueco', 'Ñiquén', 'Pinto', 'San Carlos', 'San Fabián'],
    sitioOficial: 'https://sleppunillacordillera.gob.cl/',
  },

  contacto: {
    // Fuente: listado de establecimientos de sleppunillacordillera.gob.cl.
    // TODO(confirm): confirmar formato/vigencia directamente con la dirección del establecimiento.
    telefono: '+56 44 335 1923',
    // Fuente: listado de establecimientos de sleppunillacordillera.gob.cl.
    email: 'escuelajosemiguelcarrera@sleppunillacordillera.cl',
    sitioReferencia: 'https://sleppunillacordillera.gob.cl/establecimientos-educacionales-2/',
  },

  // TODO(confirm): nombre de la dirección vigente al momento de esta consulta
  // (fuente: sleppunillacordillera.gob.cl). Puede cambiar; confirmar con el SLEP.
  direccionEscolar: 'Matilde Jofré Martínez',

  historia: {
    resumen:
      'La Escuela José Miguel Carrera Verdugo tiene sus orígenes en una casona ' +
      'ubicada entre las calles Tomás Yábar y Maipú de San Carlos, donde ' +
      'funcionó originalmente. En 1978 fue clasificada como Escuela E-112. ' +
      'El 12 de septiembre de 1977, bajo la dirección de Omar Benavidez Toledo, ' +
      'fue renombrada oficialmente como "Escuela Básica José Miguel Carrera Verdugo". ' +
      'Alrededor de 1983, en el marco del traspaso de los establecimientos ' +
      'educacionales desde el Ministerio de Educación a la administración municipal, ' +
      'la escuela pasó a depender de la Municipalidad de San Carlos (DAEM). ' +
      'Su infraestructura original era de madera; en 1995 fue reconstruida en ' +
      'hormigón, y en 2004 fue ampliada para implementar la Jornada Escolar ' +
      'Completa (JEC).',
    hitos: [
      {
        anio: 'Origen',
        // TODO(confirm): año exacto de fundación no verificado
        evento:
          'Funcionamiento inicial en una casona entre calles Tomás Yábar y Maipú, San Carlos.',
      },
      {
        anio: '1977',
        evento:
          'Renombramiento oficial como "Escuela Básica José Miguel Carrera Verdugo" el 12 de septiembre, bajo la dirección de Omar Benavidez Toledo.',
      },
      {
        anio: '1978',
        // Designación confirmada: visible en el letrero de la fachada del
        // edificio real ("ESCUELA E 112 GENERAL JOSE MIGUEL CARRERA V"),
        // fotografía de portada del Facebook oficial del colegio.
        evento: 'Clasificación del establecimiento como Escuela E-112.',
      },
      {
        anio: '1983',
        // TODO(confirm): año exacto del traspaso a administración municipal
        evento:
          'Traspaso desde el Ministerio de Educación a la administración de la Municipalidad de San Carlos (DAEM).',
      },
      {
        anio: '1995',
        evento:
          'Reconstrucción del edificio en hormigón, reemplazando la estructura original de madera.',
      },
      {
        anio: '2004',
        evento:
          'Ampliación de la infraestructura para la implementación de la Jornada Escolar Completa (JEC).',
      },
      {
        anio: 'Actualidad',
        evento:
          'Administración bajo el Servicio Local de Educación Pública (SLEP) Punilla Cordillera, en el marco de la Nueva Educación Pública.',
      },
    ],
  },

  ofertaAcademica: {
    // Niveles confirmados en el menú del sitio oficial escuelajosemcarrera.cl
    // (más completo que la sola "Educación Básica" documentada antes).
    niveles: [
      {
        nombre: 'Educación Parvularia',
        descripcion:
          'Niveles de Transición NT1 y NT2 (Pre-Kínder y Kínder), primera etapa de la trayectoria educativa de los estudiantes.',
      },
      {
        nombre: 'Educación Básica',
        descripcion:
          'Formación desde 1° a 8° básico, en modalidad de Jornada Escolar Completa (JEC).',
      },
      {
        nombre: 'Curso Especial',
        descripcion:
          // TODO(confirm): confirmar con la dirección del establecimiento el
          // público objetivo y funcionamiento exacto de este curso (listado
          // en el menú del sitio oficial escuelajosemcarrera.cl).
          'Nivel adicional informado por el sitio oficial del establecimiento. Confirmar con la dirección del colegio su público objetivo y funcionamiento exacto.',
      },
    ],
    jec: true,
    // TODO(confirm): confirmar si el establecimiento cuenta con Programa de Integración Escolar (PIE) y sus detalles
    pie: {
      disponible: true,
      descripcion:
        'Programa de Integración Escolar (PIE) orientado a estudiantes con necesidades educativas especiales. Confirmar cobertura y cupos vigentes con la dirección del establecimiento.',
    },
    // Talleres extraescolares agrupados por ciclo, confirmados en la página
    // "Cursos" del sitio oficial escuelajosemcarrera.cl (HTML descargado
    // localmente para esta investigación). El horario del Taller de Ajedrez
    // (jueves, en la biblioteca) ya estaba confirmado en la noticia real del
    // "Torneo Interno de Ajedrez" (ver vidaEscolar.actividades más abajo).
    talleresExtraescolares: [
      {
        id: 'parvularia',
        ciclo: 'NT1 y NT2',
        cicloDescripcion: 'Pre-Kínder y Kínder',
        talleres: [
          { nombre: 'Huerto', nota: 'Pre-Kínder' },
          { nombre: 'Inglés', nota: 'Pre-Kínder y Kínder' },
          { nombre: 'Yoga', nota: 'Pre-Kínder y Kínder' },
        ],
      },
      {
        id: 'primer-ciclo',
        ciclo: 'Primer ciclo',
        cicloDescripcion: '1° a 4° básico',
        talleres: [
          { nombre: 'Arte y Recreación' },
          { nombre: 'Baile / Danza' },
          { nombre: 'Guitarra' },
          { nombre: 'Huerto' },
          { nombre: 'Manualidades' },
          { nombre: 'Origami' },
          { nombre: 'Pintura' },
          { nombre: 'Polideportivo 1° y 2° básico', horario: 'Lunes' },
          { nombre: 'Polideportivo 3° y 4° básico', horario: 'Martes' },
          { nombre: 'Psicomotricidad' },
          { nombre: 'Técnicas de Artes' },
        ],
      },
      {
        id: 'segundo-ciclo',
        ciclo: 'Segundo ciclo',
        cicloDescripcion: '5° a 8° básico',
        talleres: [
          {
            nombre: 'Ajedrez',
            horario: 'Jueves',
            nota: '5°, 7° y 8° básico, en la biblioteca',
          },
          { nombre: 'Baile' },
          { nombre: 'Computación' },
          { nombre: 'Formación Ciudadana' },
          { nombre: 'Fotografía' },
          { nombre: 'Fútbol Damas' },
          { nombre: 'Fútbol Hombres' },
          { nombre: 'Guitarra' },
          { nombre: 'Hilorama' },
          { nombre: 'Patrimonio' },
          { nombre: 'Pintura' },
          { nombre: 'Selección de Básquetbol' },
          { nombre: 'Taller de Arte y Manualidades' },
          { nombre: 'Tenis de Mesa' },
        ],
      },
    ],
  },

  // Vida escolar: actividades deportivas, culturales y cívicas reales del
  // colegio, confirmadas mediante publicaciones del Facebook oficial del
  // colegio ("Escuela Jose M Carrera V", San Carlos) y datos ya validados
  // en investigación previa del equipo. No requieren TODO(confirm).
  vidaEscolar: {
    actividades: [
      {
        id: 'futbol-escolar',
        titulo: 'Fútbol escolar',
        descripcion:
          'Nuestros estudiantes disputaron un partido amistoso de fútbol contra el colegio Cocosan Carlos, en la cancha del estadio propio del establecimiento. Una instancia de encuentro deportivo y sana competencia entre colegios de la comuna.',
      },
      {
        id: 'ajedrez',
        titulo: 'Ajedrez',
        descripcion:
          'Cada jueves se realiza el Taller de Ajedrez para estudiantes de 5°, 7° y 8° básico en la biblioteca del colegio. La actividad culmina en un Torneo Interno de Ajedrez, con entrega de certificados a los participantes.',
      },
      {
        id: 'juramento-bandera',
        titulo: 'Juramento a la Bandera',
        descripcion:
          "El 11 de mayo, la Brigada Escolar realizó su ceremonia de Juramento a la Bandera en el Parque O'Higgins de Chillán Viejo. Un acto cívico que fortalece el compromiso de nuestros estudiantes con los símbolos patrios.",
      },
      {
        id: 'semana-del-libro',
        titulo: 'Semana del Libro',
        descripcion:
          'Durante la Semana del Libro, cada sala de clases fue decorada como la portada de una obra literaria, transformando los pasillos del colegio en un recorrido de lectura. Una iniciativa que fomenta el gusto por los libros de forma creativa.',
      },
      {
        id: 'dia-internacional-tierra',
        titulo: 'Día Internacional de la Tierra',
        descripcion:
          'El 22 de abril conmemoramos el Día Internacional de la Tierra, generando espacios de reflexión sobre el cuidado del medioambiente. Una fecha que invita a nuestra comunidad escolar a fortalecer hábitos sustentables.',
      },
    ],
  },

  // Proyecto Educativo Institucional (PEI): misión, visión y sellos
  // confirmados textualmente en el sitio oficial escuelajosemcarrera.cl.
  pei: {
    eslogan: 'EDUCAR EN LA DIVERSIDAD',
    mision:
      'Somos una escuela que orienta con principios, valores éticos y morales, ' +
      'proporcionando la formación de los estudiantes con el fin de emprender ' +
      'continuidad de estudios.',
    vision:
      'Fortalecer el potencial de los estudiantes, para generar altas ' +
      'expectativas, cultivando habilidades en función de un desarrollo integral.',
    sellos: [
      {
        nombre: 'Aceptación a la Diversidad',
        descripcion:
          'Una comunidad escolar que acoge y valora las diferencias de cada estudiante.',
      },
      {
        nombre: 'Compromiso Académico',
        descripcion:
          'Dedicación y exigencia compartida con el aprendizaje y los resultados educativos.',
      },
      {
        nombre: 'Espíritu Crítico',
        descripcion:
          'Formación de estudiantes capaces de analizar y cuestionar su entorno con criterio propio.',
      },
      {
        nombre: 'Resiliencia',
        descripcion:
          'Capacidad de sobreponerse a las dificultades y seguir avanzando en el proceso formativo.',
      },
      {
        nombre: 'Espíritu Deportivo',
        descripcion:
          'Fomento de la actividad física, el juego limpio y el trabajo en equipo.',
      },
    ],
  },

  admision: {
    sistema: 'Sistema de Admisión Escolar (SAE)',
    descripcion:
      'Como establecimiento público dependiente del SLEP Punilla Cordillera, el ingreso ' +
      'no se realiza mediante postulación directa al colegio, sino a través del Sistema ' +
      'de Admisión Escolar (SAE), la plataforma centralizada del Ministerio de Educación ' +
      'de Chile. Las familias postulan en línea indicando sus preferencias de ' +
      'establecimientos, y un algoritmo asigna los cupos según prioridades legales ' +
      '(hermanos matriculados, hijos de funcionarios, prioritarios, etc.) y azar en caso ' +
      'de sobredemanda.',
    // TODO(confirm): fechas exactas del proceso de admisión anual (varían cada año, confirmar en sae.mineduc.cl)
    fechas:
      'Las fechas exactas del proceso SAE se publican cada año en sae.mineduc.cl. Confirmar calendario vigente antes de publicar plazos definitivos.',
    sitioSae: 'https://www.sistemadeadmisionescolar.cl/',
  },
}

export default school
