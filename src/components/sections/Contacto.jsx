import SectionHeading from '../ui/SectionHeading'
import { school } from '../../data/school'

// Ituhue 426, San Carlos, Ñuble (coordenadas aproximadas del centro de San
// Carlos, Ñuble; el pin exacto puede ajustarse cuando se confirme la
// ubicación precisa del establecimiento).
const OSM_EMBED_SRC =
  'https://www.openstreetmap.org/export/embed.html?bbox=-71.9700%2C-36.4300%2C-71.9500%2C-36.4150&layer=mapnik&marker=-36.4230%2C-71.9600'
const OSM_LINK =
  'https://www.openstreetmap.org/?mlat=-36.4230&mlon=-71.9600#map=16/-36.4230/-71.9600'

export default function Contacto() {
  return (
    <section id="contacto" aria-labelledby="contacto-titulo" className="bg-institucional-crema py-20">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          id="contacto-titulo"
          eyebrow="Escríbenos"
          title="Contacto"
          subtitle="Estamos ubicados en San Carlos, Región de Ñuble."
        />

        <div className="grid gap-10 md:grid-cols-2">
          <div className="space-y-4 rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-institucional-azul">
                Dirección
              </h3>
              <p className="mt-1 text-gray-700">{school.direccion}</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-institucional-azul">
                Teléfono
              </h3>
              <p className="mt-1 text-gray-700">
                <a href={`tel:${school.contacto.telefono.replace(/\s+/g, '')}`} className="hover:text-institucional-rojo">
                  {school.contacto.telefono}
                </a>
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-institucional-azul">
                Correo electrónico
              </h3>
              <p className="mt-1 text-gray-700">
                <a href={`mailto:${school.contacto.email}`} className="hover:text-institucional-rojo">
                  {school.contacto.email}
                </a>
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-institucional-azul">
                Administración
              </h3>
              <p className="mt-1 text-gray-700">
                {school.slep.nombre} —{' '}
                <a
                  href={school.slep.sitioOficial}
                  target="_blank"
                  rel="noreferrer"
                  className="underline hover:text-institucional-rojo"
                >
                  sitio oficial
                </a>
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-xl border border-gray-200 shadow-sm">
            <iframe
              title={`Mapa de ubicación de ${school.nombreOficial}`}
              src={OSM_EMBED_SRC}
              className="h-72 w-full sm:h-full sm:min-h-[320px]"
              loading="lazy"
            />
            <div className="bg-white p-3 text-center text-sm">
              <a
                href={OSM_LINK}
                target="_blank"
                rel="noreferrer"
                className="text-institucional-azul underline hover:text-institucional-rojo"
              >
                Ver mapa más grande
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
