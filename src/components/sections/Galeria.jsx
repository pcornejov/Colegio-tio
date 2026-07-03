import SectionHeading from '../ui/SectionHeading'
import { school } from '../../data/school'

// Fotografías reales del establecimiento: biblioteca (CRA) y fachada.
// Referenciadas siempre con `import.meta.env.BASE_URL` (nunca rutas
// absolutas `/images/...`), ya que `vite.config.js` define
// `base: '/Colegio-tio/'` para el despliegue en GitHub Pages.
const fotos = [
  {
    id: 'fachada',
    src: `${import.meta.env.BASE_URL}images/galeria/fachada.jpg`,
    alt: "Fachada de la Escuela General José Miguel Carrera Verdugo, con el letrero 'Escuela E-112 General José Miguel Carrera V', la bandera chilena, y el busto del General José Miguel Carrera (1785-1821), obra del escultor Pablo López Díaz.",
    caption: 'Fachada del establecimiento',
    destacada: true,
  },
  {
    id: 'cra-1',
    src: `${import.meta.env.BASE_URL}images/galeria/cra-1.jpg`,
    alt: 'Sala de biblioteca (CRA) del colegio, vacía, con estanterías de libros y un rincón de lectura junto a la ventana.',
    caption: 'Biblioteca (CRA)',
  },
  {
    id: 'cra-4',
    src: `${import.meta.env.BASE_URL}images/galeria/cra-4.jpg`,
    alt: 'Otra vista del Centro de Recursos para el Aprendizaje (CRA), con estanterías de libros y mesas de estudio.',
    caption: 'Centro de Recursos para el Aprendizaje (CRA)',
  },
]

export default function Galeria() {
  return (
    <section
      id="galeria"
      aria-labelledby="galeria-titulo"
      className="bg-white py-20"
    >
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          id="galeria-titulo"
          eyebrow="Nuestro colegio"
          title="Galería"
          subtitle="Un vistazo a nuestros espacios: la biblioteca (CRA) y la fachada del establecimiento."
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {fotos.map((foto) => (
            <figure
              key={foto.id}
              className={`flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md ${
                foto.destacada ? 'sm:row-span-2' : ''
              }`}
            >
              <img
                src={foto.src}
                alt={foto.alt}
                loading="lazy"
                className={`w-full flex-1 object-cover ${
                  foto.destacada ? 'aspect-[4/5] sm:aspect-auto' : 'aspect-[4/3]'
                }`}
              />
              <figcaption className="px-4 py-3 text-sm font-medium text-gray-600">
                {foto.caption}
              </figcaption>
            </figure>
          ))}
        </div>

        {school.infraestructura?.espacios?.length > 0 && (
          <div className="mt-12">
            <h3 className="mb-4 text-center text-2xl font-bold text-institucional-azul">
              Infraestructura
            </h3>
            <ul className="flex flex-wrap justify-center gap-2">
              {school.infraestructura.espacios.map((espacio) => (
                <li
                  key={espacio}
                  className="rounded-full border border-institucional-azul-claro/40 bg-institucional-azul-claro/10 px-3 py-1.5 text-sm font-semibold text-institucional-azul-oscuro"
                >
                  {espacio}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  )
}
