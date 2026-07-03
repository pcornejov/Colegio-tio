// Datos institucionales de la Escuela José Miguel Carrera Verdugo.
// IMPORTANTE: existen colegios homónimos "José Miguel Carrera" en otras
// comunas de Chile (Los Andes, La Serena, etc.). Todo lo aquí contenido
// corresponde exclusivamente al establecimiento de San Carlos, Ñuble
// (Ituhue 426), administrado por el SLEP Punilla Cordillera.
// Los campos marcados con TODO(confirm) no han sido verificados con una
// fuente oficial y deben confirmarse antes de tratarse como definitivos.
// Estos comentarios son solo para uso interno del equipo de desarrollo y
// nunca deben mostrarse en la interfaz pública del sitio.

export const school = {
  nombreOficial: 'Escuela José Miguel Carrera Verdugo',
  comuna: 'San Carlos',
  region: 'Región de Ñuble',
  pais: 'Chile',

  direccion: 'Ituhue 426, San Carlos, Región de Ñuble, Chile',

  // TODO(confirm): RBD no verificado oficialmente
  rbd: '3744',

  slep: {
    nombre: 'SLEP Punilla Cordillera',
    cobertura: ['Coihueco', 'Ñiquén', 'Pinto', 'San Carlos', 'San Fabián'],
    sitioOficial: 'https://jmcarrera.slepcol.cl/',
  },

  contacto: {
    // TODO(confirm): teléfono real de contacto no encontrado, confirmar con SLEP/dirección
    telefono: '+56 42 000 0000',
    // TODO(confirm): correo real de contacto no encontrado, confirmar con SLEP/dirección
    email: 'contacto@jmcarrera.slepcol.cl',
    sitioReferencia: 'https://jmcarrera.slepcol.cl/',
  },

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
    niveles: [
      {
        nombre: 'Educación Básica',
        descripcion:
          'Formación desde 1° a 8° básico, en modalidad de Jornada Escolar Completa (JEC).',
      },
    ],
    jec: true,
    // TODO(confirm): confirmar si el establecimiento cuenta con Programa de Integración Escolar (PIE) y sus detalles
    pie: {
      disponible: true,
      descripcion:
        'Programa de Integración Escolar (PIE) orientado a estudiantes con necesidades educativas especiales. Confirmar cobertura y cupos vigentes con la dirección del establecimiento.',
    },
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
