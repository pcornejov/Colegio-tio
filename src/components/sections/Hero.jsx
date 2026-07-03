import { school } from '../../data/school'

export default function Hero() {
  return (
    <section
      id="inicio"
      aria-labelledby="inicio-titulo"
      className="bg-gradient-to-b from-institucional-azul to-institucional-azul/90 py-20 text-institucional-crema"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center px-4 text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-institucional-crema/80">
          {school.comuna}, {school.region} · Chile
        </p>
        <span className="mb-5 inline-block rounded-full bg-institucional-dorado-claro/90 px-4 py-1.5 text-sm font-bold tracking-wide text-institucional-azul-oscuro shadow">
          {school.pei.eslogan}
        </span>
        <h1
          id="inicio-titulo"
          className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl"
        >
          {school.nombreOficial}
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-institucional-crema/90">
          Educación pública de calidad para niñas y niños de San Carlos,
          bajo la administración del {school.slep.nombre}.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="#historia"
            className="rounded-lg bg-institucional-rojo px-6 py-3 font-semibold text-white shadow transition hover:brightness-110"
          >
            Conoce nuestra historia
          </a>
          <a
            href={school.slep.sitioOficial}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-institucional-crema/60 px-6 py-3 font-semibold text-institucional-crema transition hover:bg-institucional-crema/10"
          >
            Sitio del SLEP Punilla Cordillera
          </a>
        </div>
      </div>
    </section>
  )
}
