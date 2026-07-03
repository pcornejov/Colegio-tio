import SectionHeading from '../ui/SectionHeading'
import Card from '../ui/Card'
import { school } from '../../data/school'

// Noticias reales, tomadas de publicaciones del Facebook oficial del colegio
// ("Escuela Jose M Carrera V", San Carlos) del 19 de junio.
const noticias = [
  {
    titulo: 'Amistoso de fútbol ante Cocosan Carlos',
    resumen:
      'Nuestro equipo disputó un partido amistoso de fútbol contra el colegio Cocosan Carlos en la cancha del estadio propio del establecimiento.',
  },
  {
    titulo: 'Torneo Interno de Ajedrez',
    resumen:
      'Se realizó el Torneo Interno de Ajedrez, con entrega de certificados a los participantes. Además, se dicta un Taller de Ajedrez para 5°, 7° y 8° básico todos los jueves en la biblioteca.',
  },
  {
    titulo: 'Consejo de Evaluación y Reflexión Docente',
    resumen:
      'El equipo docente participó en un Consejo de Evaluación y Reflexión, instancia de trabajo colaborativo para fortalecer las prácticas pedagógicas del establecimiento.',
  },
]

// Colores decorativos (fondos claros + texto oscuro, ambos con contraste
// AA verificado) para las tarjetas/chips de talleres extraescolares, por
// ciclo.
const cicloStyles = {
  parvularia: {
    card: 'border-institucional-azul-claro/30 bg-institucional-azul-claro/5',
    heading: 'text-institucional-azul-oscuro',
    chip: 'border border-institucional-azul-claro/40 bg-institucional-azul-claro/10 text-institucional-azul-oscuro',
  },
  'primer-ciclo': {
    card: 'border-institucional-mostaza-claro/40 bg-institucional-mostaza-claro/5',
    heading: 'text-institucional-mostaza',
    chip: 'border border-institucional-mostaza-claro/60 bg-institucional-mostaza-claro/20 text-institucional-mostaza',
  },
  'segundo-ciclo': {
    card: 'border-institucional-dorado-claro/40 bg-institucional-dorado-claro/5',
    heading: 'text-institucional-dorado',
    chip: 'border border-institucional-dorado-claro/60 bg-institucional-dorado-claro/20 text-institucional-dorado',
  },
}

export default function OfertaAcademica() {
  return (
    <section
      id="oferta-academica"
      aria-labelledby="oferta-academica-titulo"
      className="bg-institucional-crema py-20"
    >
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          id="oferta-academica-titulo"
          eyebrow="Formación integral"
          title="Oferta académica"
          subtitle="Educación Parvularia, Básica y Curso Especial, con Jornada Escolar Completa, apoyo a la inclusión y una amplia oferta de talleres extraescolares."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {school.ofertaAcademica.niveles.map((nivel) => (
            <Card key={nivel.nombre} title={nivel.nombre}>
              <p>{nivel.descripcion}</p>
            </Card>
          ))}

          {school.ofertaAcademica.jec && (
            <Card title="Jornada Escolar Completa (JEC)">
              <p>
                El establecimiento funciona en modalidad de Jornada Escolar
                Completa, extendiendo la permanencia de los estudiantes en el
                colegio para fortalecer los aprendizajes y actividades
                complementarias.
              </p>
            </Card>
          )}

          {school.ofertaAcademica.pie?.disponible && (
            <Card title="Programa de Integración Escolar (PIE)">
              <p>{school.ofertaAcademica.pie.descripcion}</p>
            </Card>
          )}
        </div>

        {school.ofertaAcademica.talleresExtraescolares?.length > 0 && (
          <div className="mt-16">
            <h3 className="mb-2 text-center text-2xl font-bold text-institucional-azul">
              Talleres extraescolares
            </h3>
            <p className="mx-auto mb-8 max-w-2xl text-center text-gray-600">
              Además de las asignaturas regulares, los estudiantes pueden participar
              en estos talleres y actividades extraprogramáticas, organizados por
              ciclo.
            </p>

            <div className="grid gap-6 md:grid-cols-3">
              {school.ofertaAcademica.talleresExtraescolares.map((grupo) => {
                const style = cicloStyles[grupo.id]
                return (
                  <div
                    key={grupo.id}
                    className={`rounded-xl border p-5 ${style.card}`}
                  >
                    <h4 className={`text-lg font-bold ${style.heading}`}>
                      {grupo.ciclo}
                    </h4>
                    <p className="mb-4 text-sm text-gray-500">
                      {grupo.cicloDescripcion}
                    </p>
                    <ul className="flex flex-wrap gap-2">
                      {grupo.talleres.map((taller) => (
                        <li
                          key={taller.nombre}
                          className={`rounded-full px-3 py-1.5 text-sm font-semibold ${style.chip}`}
                        >
                          <span>{taller.nombre}</span>
                          {taller.horario && (
                            <span className="ml-2 inline-block rounded-full bg-institucional-rojo/10 px-2 py-0.5 text-xs font-bold uppercase tracking-wide text-institucional-rojo">
                              {taller.horario}
                            </span>
                          )}
                          {taller.nota && (
                            <span className="mt-0.5 block text-xs font-normal">
                              {taller.nota}
                            </span>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              })}
            </div>
          </div>
        )}

        <div className="mt-16">
          <h3 className="mb-6 text-center text-2xl font-bold text-institucional-azul">
            Noticias
          </h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {noticias.map((noticia) => (
              <Card key={noticia.titulo} title={noticia.titulo}>
                <p>{noticia.resumen}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
