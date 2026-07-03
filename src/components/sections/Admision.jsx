import SectionHeading from '../ui/SectionHeading'
import Card from '../ui/Card'
import { school } from '../../data/school'

export default function Admision() {
  return (
    <section id="admision" aria-labelledby="admision-titulo" className="bg-white py-20">
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
      </div>
    </section>
  )
}
