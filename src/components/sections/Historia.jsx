import SectionHeading from '../ui/SectionHeading'
import { school } from '../../data/school'

export default function Historia() {
  return (
    <section id="historia" aria-labelledby="historia-titulo" className="bg-white py-20">
      <div className="mx-auto max-w-5xl px-4">
        <SectionHeading
          id="historia-titulo"
          eyebrow="Nuestra escuela"
          title="Historia"
          subtitle="Más de cuatro décadas de educación pública en San Carlos, Región de Ñuble."
        />

        <div className="grid gap-10 md:grid-cols-[auto_1fr] md:items-start">
          <img
            src={`${import.meta.env.BASE_URL}images/escudo-placeholder.svg`}
            alt="Escudo institucional provisional de la Escuela José Miguel Carrera Verdugo"
            width={140}
            height={168}
            className="mx-auto md:mx-0"
          />

          <div>
            <p className="text-lg leading-relaxed text-gray-700">
              {school.historia.resumen}
            </p>
          </div>
        </div>

        <ol className="relative mt-14 space-y-8 border-l-2 border-institucional-azul/20 pl-6">
          {school.historia.hitos.map((hito) => (
            <li key={`${hito.anio}-${hito.evento.slice(0, 12)}`} className="relative">
              <span className="absolute -left-[1.95rem] top-1 h-3 w-3 rounded-full bg-institucional-rojo" />
              <p className="text-sm font-semibold uppercase tracking-wide text-institucional-azul">
                {hito.anio}
              </p>
              <p className="mt-1 text-gray-700">{hito.evento}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
