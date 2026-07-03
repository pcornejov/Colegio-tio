import { school } from '../../data/school'

export default function Footer() {
  return (
    <footer className="bg-institucional-azul py-10 text-institucional-crema">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:grid-cols-3">
        <div>
          <p className="font-semibold">{school.nombreOficial}</p>
          <p className="mt-1 text-sm text-institucional-crema/80">
            {school.direccion}
          </p>
        </div>

        <div className="text-sm text-institucional-crema/80">
          <p>
            <a
              href={`tel:${school.contacto.telefono.replace(/\s+/g, '')}`}
              className="hover:text-white"
            >
              {school.contacto.telefono}
            </a>
          </p>
          <p className="mt-1">
            <a href={`mailto:${school.contacto.email}`} className="hover:text-white">
              {school.contacto.email}
            </a>
          </p>
        </div>

        <div className="text-sm text-institucional-crema/80">
          <p>{school.slep.nombre}</p>
          <a
            href={school.slep.sitioOficial}
            target="_blank"
            rel="noreferrer"
            className="mt-1 inline-block underline hover:text-white"
          >
            Sitio oficial del SLEP
          </a>
        </div>
      </div>

      <p className="mt-8 text-center text-xs text-institucional-crema/60">
        © {new Date().getFullYear()} {school.nombreOficial}. Sitio
        informativo no oficial, en construcción.
      </p>
    </footer>
  )
}
