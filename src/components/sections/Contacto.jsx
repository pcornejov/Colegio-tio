import SectionHeading from '../ui/SectionHeading'
import { school } from '../../data/school'

// Itihue 426, San Carlos, Ñuble (coordenadas aproximadas del centro de San
// Carlos, Ñuble; el pin exacto puede ajustarse cuando se confirme la
// ubicación precisa del establecimiento).
const OSM_EMBED_SRC =
  'https://www.openstreetmap.org/export/embed.html?bbox=-71.9700%2C-36.4300%2C-71.9500%2C-36.4150&layer=mapnik&marker=-36.4230%2C-71.9600'
const OSM_LINK =
  'https://www.openstreetmap.org/?mlat=-36.4230&mlon=-71.9600#map=16/-36.4230/-71.9600'

export default function Contacto() {
  return (
    <section id="contacto" aria-labelledby="contacto-titulo" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          id="contacto-titulo"
          eyebrow="Escríbenos"
          title="Contacto"
          subtitle="Estamos ubicados en San Carlos, Región de Ñuble."
        />

        <div className="grid gap-10 md:grid-cols-2">
          <div className="space-y-10">
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
                {school.contacto.telefonoMovil && (
                  <p className="mt-1 text-gray-700">
                    <a
                      href={`tel:${school.contacto.telefonoMovil.replace(/\s+/g, '')}`}
                      className="hover:text-institucional-rojo"
                    >
                      {school.contacto.telefonoMovil}
                    </a>{' '}
                    <span className="text-sm text-gray-500">(móvil)</span>
                  </p>
                )}
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

            {school.direccionEscolar && (
              <div className="space-y-4 rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-institucional-azul">
                    Dirección del establecimiento
                  </h3>
                  <p className="mt-1 text-gray-700">{school.direccionEscolar.nombre}</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-institucional-azul">
                    Horario de atención
                  </h3>
                  <p className="mt-1 text-gray-700">{school.direccionEscolar.horarioAtencion}</p>
                </div>
              </div>
            )}
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

        {school.documentos?.length > 0 && (
          <div className="mt-16">
            <h3 className="mb-6 text-center text-2xl font-bold text-institucional-azul">
              Documentos institucionales
            </h3>
            <div className="grid gap-6 sm:grid-cols-2">
              {school.documentos.map((documento) => (
                <a
                  key={documento.url}
                  href={documento.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start gap-3 rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
                >
                  <svg
                    aria-hidden="true"
                    className="mt-0.5 h-5 w-5 flex-shrink-0 text-institucional-azul"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  <div>
                    <p className="font-semibold text-institucional-azul underline-offset-2 hover:underline">
                      {documento.nombre}
                      <span className="mt-0.5 block text-xs font-normal text-gray-500">
                        (PDF, abre en pestaña nueva)
                      </span>
                    </p>
                    {documento.descripcion && (
                      <p className="mt-1 text-sm text-gray-600">{documento.descripcion}</p>
                    )}
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
