import { useState } from 'react'
import { school } from '../../data/school'

const navItems = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#historia', label: 'Historia' },
  { href: '#oferta-academica', label: 'Oferta académica' },
  { href: '#vida-escolar', label: 'Vida escolar' },
  { href: '#galeria', label: 'Galería' },
  { href: '#admision', label: 'Admisión' },
  { href: '#contacto', label: 'Contacto' },
]

export default function NavBar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-institucional-azul/10 bg-institucional-crema/95 backdrop-blur">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3"
        aria-label="Navegación principal"
      >
        <a
          href="#inicio"
          className="rounded-md text-lg font-bold text-institucional-azul focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-institucional-rojo focus-visible:ring-offset-2 focus-visible:ring-offset-institucional-crema"
        >
          {school.nombreOficial}
        </a>

        <button
          type="button"
          className="rounded-md p-2 text-institucional-azul sm:hidden"
          aria-expanded={open}
          aria-controls="menu-principal"
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className="sr-only">Abrir menú</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <ul id="menu-principal" className="hidden gap-6 sm:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="rounded-md font-medium text-institucional-azul hover:text-institucional-rojo focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-institucional-rojo focus-visible:ring-offset-2 focus-visible:ring-offset-institucional-crema"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {open && (
        <ul
          id="menu-principal-movil"
          className="flex flex-col gap-2 border-t border-institucional-azul/10 px-4 py-3 sm:hidden"
        >
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="block rounded-md font-medium text-institucional-azul hover:text-institucional-rojo focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-institucional-rojo focus-visible:ring-offset-2 focus-visible:ring-offset-institucional-crema"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
