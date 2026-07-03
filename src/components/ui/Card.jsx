export default function Card({ title, children, className = '' }) {
  return (
    <div
      className={`rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md ${className}`}
    >
      {title && (
        <h3 className="mb-2 text-lg font-semibold text-institucional-azul">
          {title}
        </h3>
      )}
      <div className="text-gray-700">{children}</div>
    </div>
  )
}
