import SectionHeading from '../ui/SectionHeading'
import Card from '../ui/Card'
import { school } from '../../data/school'

const noticias = [
  {
    titulo: 'Bienvenida al año escolar',
    resumen:
      'La comunidad escolar da la bienvenida a un nuevo año, reafirmando el compromiso con una educación pública de calidad para todas y todos los estudiantes de San Carlos.',
  },
  {
    titulo: 'Jornada Escolar Completa (JEC)',
    resumen:
      'El establecimiento funciona bajo la modalidad de Jornada Escolar Completa, ampliando las oportunidades de aprendizaje y desarrollo integral de los estudiantes.',
  },
  {
    titulo: 'Administración SLEP Punilla Cordillera',
    resumen:
      'Como parte de la Nueva Educación Pública, la escuela es administrada por el SLEP Punilla Cordillera, que agrupa a los establecimientos públicos de la provincia de Punilla.',
  },
]

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
          subtitle="Educación básica pública, con Jornada Escolar Completa y apoyo a la inclusión."
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
