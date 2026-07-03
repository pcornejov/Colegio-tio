import SectionHeading from '../ui/SectionHeading'
import SubHeading from '../ui/SubHeading'
import Card from '../ui/Card'
import { school } from '../../data/school'

// Iconografía decorativa (pictogramas SVG genéricos, sin fotografías ni
// siluetas humanas identificables) para cada actividad de vida escolar.
const iconos = {
  'futbol-escolar': (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className="h-6 w-6"
    >
      <circle cx="24" cy="20" r="12" />
      <path d="M24 12 L19 17 L21 23 L27 23 L29 17 Z" />
      <path d="M24 12 L24 8" />
      <path d="M8 38 H40" />
    </svg>
  ),
  ajedrez: (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className="h-6 w-6"
    >
      <rect x="6" y="26" width="36" height="12" />
      <path d="M6 32 H42" />
      <path d="M12 26 V38 M18 26 V38 M24 26 V38 M30 26 V38 M36 26 V38" />
      <path
        d="M18 22 H30 V16 H26 V12 H22 V16 H18 Z"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  ),
  'juramento-bandera': (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className="h-6 w-6"
    >
      <path d="M14 6 V42" />
      <circle cx="14" cy="6" r="1.5" fill="currentColor" stroke="none" />
      <path d="M14 8 C22 6, 26 12, 34 10 C30 14, 30 18, 34 20 C26 18, 22 22, 14 20 Z" />
      <path d="M8 42 H20" />
    </svg>
  ),
  'semana-del-libro': (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className="h-6 w-6"
    >
      <path d="M24 12 C20 9, 12 9, 8 11 V36 C12 34, 20 34, 24 37 Z" />
      <path d="M24 12 C28 9, 36 9, 40 11 V36 C36 34, 28 34, 24 37 Z" />
      <path d="M12 17 H20 M12 22 H20 M28 17 H36 M28 22 H36" />
    </svg>
  ),
  'dia-internacional-tierra': (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className="h-6 w-6"
    >
      <circle cx="22" cy="26" r="14" />
      <path d="M10 22 C18 26, 26 18, 34 24" />
      <path d="M12 32 C20 28, 28 34, 33 30" />
      <path d="M28 10 C28 14, 24 14, 24 12 C24 8, 30 6, 32 8 C34 12, 30 12, 28 10 Z" />
    </svg>
  ),
}

// Estilos decorativos (badge de ícono) por actividad, usando exclusivamente
// la paleta institucional ya definida en tailwind.config.js.
const estilos = {
  'futbol-escolar': {
    icono: 'text-institucional-azul',
    badge: 'bg-institucional-azul-claro/10',
  },
  ajedrez: {
    icono: 'text-institucional-mostaza',
    badge: 'bg-institucional-mostaza-claro/20',
  },
  'juramento-bandera': {
    icono: 'text-institucional-rojo',
    badge: 'bg-institucional-rojo/10',
  },
  'semana-del-libro': {
    icono: 'text-institucional-dorado',
    badge: 'bg-institucional-dorado-claro/20',
  },
  'dia-internacional-tierra': {
    icono: 'text-institucional-mostaza',
    badge: 'bg-institucional-azul-claro/10',
  },
}

export default function VidaEscolar() {
  return (
    <section
      id="vida-escolar"
      aria-labelledby="vida-escolar-titulo"
      className="bg-white py-20"
    >
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          id="vida-escolar-titulo"
          eyebrow="Comunidad y participación"
          title="Vida escolar"
          subtitle="Actividades deportivas, culturales y cívicas que forman parte del día a día de nuestros estudiantes."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {school.vidaEscolar.actividades.map((actividad) => (
            <Card key={actividad.id}>
              <div
                className={`mb-4 flex h-12 w-12 items-center justify-center rounded-full ${estilos[actividad.id].badge} ${estilos[actividad.id].icono}`}
              >
                {iconos[actividad.id]}
              </div>
              <h3 className="mb-2 text-lg font-semibold text-institucional-azul">
                {actividad.titulo}
              </h3>
              <p className="text-gray-700">{actividad.descripcion}</p>
            </Card>
          ))}
        </div>

        {school.vidaEscolar.programas?.length > 0 && (
          <div className="mt-16">
            <SubHeading title="Programas institucionales" />
            <ul className="flex flex-wrap justify-center gap-2">
              {school.vidaEscolar.programas.map((programa) => (
                <li
                  key={programa}
                  className="rounded-full border border-institucional-azul-claro/40 bg-institucional-azul-claro/10 px-3 py-1.5 text-sm font-semibold text-institucional-azul-oscuro"
                >
                  {programa}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  )
}
