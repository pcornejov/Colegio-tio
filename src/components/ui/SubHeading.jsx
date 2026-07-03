// Encabezado de subsección reutilizable, reemplaza el patrón repetido
// `<h3 className="mb-2 text-center text-2xl font-bold text-institucional-azul">`
// + `<p className="mx-auto mb-6 max-w-2xl text-center text-gray-600">` que
// aparecía copiado en varias secciones. Los márgenes por defecto (mb-2 en el
// título cuando hay subtítulo, mb-6 cuando no lo hay, y mb-6 en el
// subtítulo) reproducen el patrón más común; `titleClassName` y
// `subtitleClassName` permiten ajustar casos puntuales que ya existían con
// un margen distinto, sin cambiar el aspecto visual de ningún bloque.
export default function SubHeading({
  title,
  subtitle,
  titleClassName,
  subtitleClassName,
}) {
  return (
    <>
      <h3
        className={`text-center text-2xl font-bold text-institucional-azul ${
          titleClassName ?? (subtitle ? 'mb-2' : 'mb-6')
        }`}
      >
        {title}
      </h3>
      {subtitle && (
        <p
          className={`mx-auto max-w-2xl text-center text-gray-600 ${
            subtitleClassName ?? 'mb-6'
          }`}
        >
          {subtitle}
        </p>
      )}
    </>
  )
}
