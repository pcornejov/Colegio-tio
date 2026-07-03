import { school } from '../../data/school'

export default function Hero() {
  return (
    <section
      id="inicio"
      aria-labelledby="inicio-titulo"
      className="relative overflow-hidden py-20 text-institucional-crema"
    >
      <img
        src={`${import.meta.env.BASE_URL}images/galeria/fachada.jpg`}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-institucional-azul-oscuro/90 via-institucional-azul/85 to-institucional-azul/90" />
      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-4 text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-institucional-crema/80">
          {school.comuna}, {school.region} · Chile
        </p>
        <span className="mb-5 inline-block rounded-full bg-institucional-dorado-claro/90 px-4 py-1.5 text-sm font-bold tracking-wide text-institucional-azul-oscuro shadow">
          {school.pei.eslogan}
        </span>
        <h1
          id="inicio-titulo"
          className="max-w-3xl text-5xl font-bold leading-tight tracking-tight sm:text-6xl"
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
            className="rounded-lg bg-institucional-rojo px-6 py-3 font-semibold text-white shadow transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-institucional-rojo focus-visible:ring-offset-2 focus-visible:ring-offset-white"
          >
            Conoce nuestra historia
          </a>
          <a
            href={school.slep.sitioOficial}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-institucional-crema/60 px-6 py-3 font-semibold text-institucional-crema transition hover:bg-institucional-crema/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-institucional-rojo focus-visible:ring-offset-2 focus-visible:ring-offset-white"
          >
            Sitio del SLEP Punilla Cordillera
          </a>
        </div>

        {school.cifras && (
          <div className="mt-12 grid w-full max-w-2xl grid-cols-3 gap-4">
            <div className="rounded-lg border border-institucional-crema/20 bg-institucional-crema/5 px-4 py-5">
              <p className="text-3xl font-bold">{school.cifras.matricula}</p>
              <p className="mt-1 text-sm text-institucional-crema/80">
                Estudiantes matriculados
              </p>
            </div>
            <div className="rounded-lg border border-institucional-crema/20 bg-institucional-crema/5 px-4 py-5">
              <p className="text-3xl font-bold">{school.cifras.docentes}</p>
              <p className="mt-1 text-sm text-institucional-crema/80">
                Docentes
              </p>
            </div>
            <div className="rounded-lg border border-institucional-crema/20 bg-institucional-crema/5 px-4 py-5">
              <p className="text-3xl font-bold">
                {school.cifras.promedioAlumnosPorCurso}
              </p>
              <p className="mt-1 text-sm text-institucional-crema/80">
                Alumnos/as por curso (promedio)
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
