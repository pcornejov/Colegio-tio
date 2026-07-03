export default function SectionHeading({ id, eyebrow, title, subtitle }) {
  return (
    <div className="mb-10 text-center">
      {eyebrow && (
        <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-institucional-rojo">
          {eyebrow}
        </p>
      )}
      <h2
        id={id}
        className="text-3xl font-bold text-institucional-azul sm:text-4xl"
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto mt-3 max-w-2xl text-gray-600">{subtitle}</p>
      )}
    </div>
  )
}
