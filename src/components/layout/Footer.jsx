import { school } from '../../data/school'

export default function Footer() {
  return (
    <footer className="bg-institucional-azul py-8 text-institucional-crema">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <p className="font-semibold">{school.nombreOficial}</p>
        <p className="mt-1 text-sm text-institucional-crema/80">
          {school.direccion}
        </p>
        <p className="mt-4 text-xs text-institucional-crema/60">
          © {new Date().getFullYear()} {school.nombreOficial}. Sitio
          informativo no oficial, en construcción.
        </p>
      </div>
    </footer>
  )
}
