import SectionHeading from '../ui/SectionHeading'
import Card from '../ui/Card'
import { school } from '../../data/school'

export default function Admision() {
  return (
    <section id="admision" aria-labelledby="admision-titulo" className="bg-institucional-crema py-20">
      <div className="mx-auto max-w-4xl px-4">
        <SectionHeading
          id="admision-titulo"
          eyebrow="¿Cómo postular?"
          title="Admisión"
          subtitle={`A través del ${school.admision.sistema}, la plataforma pública y centralizada de matrícula escolar en Chile.`}
        />

        <Card title={school.admision.sistema}>
          <p>{school.admision.descripcion}</p>
        </Card>

        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <Card title="Fechas del proceso">
            <p>{school.admision.fechas}</p>
          </Card>
          <Card title="Más información">
            <p>
              Para conocer el calendario oficial vigente, requisitos y pasos
              para postular, visita el sitio oficial del Sistema de Admisión
              Escolar.
            </p>
            <a
              href={school.admision.sitioSae}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-block font-semibold text-institucional-azul underline hover:text-institucional-rojo"
            >
              Sistema de Admisión Escolar (SAE)
            </a>
          </Card>
        </div>

        <div className="mt-16">
          <h3 className="mb-2 text-center text-2xl font-bold text-institucional-azul">
            Nuestro Proyecto Educativo
          </h3>
          <p className="mx-auto mb-6 max-w-2xl text-center text-gray-600">
            {school.pei.eslogan}
          </p>

          <div className="grid gap-6 sm:grid-cols-2">
            <Card title="Misión">
              <p>{school.pei.mision}</p>
            </Card>
            <Card title="Visión">
              <p>{school.pei.vision}</p>
            </Card>
          </div>

          <h4 className="mb-6 mt-10 text-center text-lg font-semibold text-institucional-azul">
            Nuestros sellos
          </h4>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {school.pei.sellos.map((sello) => (
              <div
                key={sello.nombre}
                className="rounded-xl border border-institucional-dorado-claro/50 bg-white p-4 text-center shadow-sm transition-shadow hover:shadow-md"
              >
                <p className="font-semibold text-institucional-dorado">{sello.nombre}</p>
                <p className="mt-1 text-sm text-gray-600">{sello.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
