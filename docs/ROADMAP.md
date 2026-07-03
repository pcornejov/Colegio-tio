# Roadmap — Sitio web Escuela José Miguel Carrera Verdugo

Sitio informativo de una sola página (SPA sin router) para la Escuela José
Miguel Carrera Verdugo, San Carlos, Región de Ñuble, Chile. Construido con
React + Vite + Tailwind CSS, desplegado en GitHub Pages vía GitHub Actions.

URL en vivo: https://pcornejov.github.io/Colegio-tio/

## Prerrequisito de infraestructura

- [x] Habilitar GitHub Pages en el repo: **Settings → Pages → Source: GitHub
      Actions**. (Confirmado habilitado por el dueño del repo.)

## Checklist de iteraciones

- [x] **Iteración 1 — Fundación + pipeline**: scaffold Vite + React +
      Tailwind, `vite.config.js` con `base: '/Colegio-tio/'`, workflow de
      despliegue en `.github/workflows/deploy.yml`, datos institucionales en
      `src/data/school.js`, `App.jsx` mínimo con NavBar + Hero (`#inicio`) +
      Footer.
- [x] **Iteración 2 — Historia + identidad visual**: sección `#historia` con
      narrativa real del establecimiento, paleta de colores definitiva en
      `tailwind.config.js`, escudo placeholder en `public/images/`, NavBar
      actualizado con el anchor `#historia`. Se corrigió una referencia
      errónea al dominio `jmcarrera.slepcol.cl` (ver nota abajo) y se
      incorporaron datos de contacto reales encontrados en el sitio oficial
      del SLEP Punilla Cordillera.
- [x] **Iteración 3 — Oferta académica**: sección `#oferta-academica`
      (niveles, JEC, PIE), bloque estático de noticias, NavBar actualizado
      con el anchor `#oferta-academica`.
- [x] **Iteración 4 — Admisión + Contacto**: sección `#admision` (proceso
      SAE genérico, con nota clara de que las fechas exactas se publican
      cada año en sae.mineduc.cl y enlace al sitio oficial del SAE),
      sección `#contacto` (dirección, teléfono, correo, mapa embebido
      OpenStreetMap con coordenadas aproximadas del centro de San Carlos,
      referencia a sleppunillacordillera.gob.cl), Footer final con los
      tres bloques (identidad, contacto, SLEP), NavBar completo con los 5
      anchors (`#inicio`, `#historia`, `#oferta-academica`, `#admision`,
      `#contacto`).
- [ ] **Iteración 5 — Pulido / SEO / accesibilidad**: meta tags + Open
      Graph + favicon, landmarks semánticos, skip-to-content, alt text,
      contraste, `robots.txt` + `sitemap.xml`, cierre de este roadmap.

## Decisiones de diseño

- **Paleta institucional**: no se encontró una identidad visual / manual de
  marca oficial del establecimiento. Se adoptó una paleta sobria inspirada
  en los colores patrios chilenos (azul `#1E3A8A`, rojo `#B91C1C`) sobre un
  fondo crema neutro (`#FAF7F0`), definida en `tailwind.config.js` bajo el
  namespace `institucional`. **Esta paleta es reemplazable** si en el
  futuro aparece una identidad visual oficial del colegio o del SLEP
  Punilla Cordillera.
- **Escudo**: `public/images/escudo-placeholder.svg` es un diseño genérico
  de marcador de posición, no el escudo oficial (no encontrado). Reemplazar
  cuando se disponga de uno verificado.
- **Sin React Router**: el sitio es de una sola página con anclas
  (`#inicio`, `#historia`, `#oferta-academica`, `#admision`, `#contacto`) y
  `scroll-behavior: smooth`, para evitar problemas de `basename` bajo
  GitHub Pages.

## Corrección importante encontrada en Iteración 2 (dominio homónimo)

El brief original sugería `https://jmcarrera.slepcol.cl/` como sitio de
referencia del establecimiento. Al visitarlo (WebFetch), ese dominio
corresponde a **otra escuela homónima** "José Miguel Carrera Verdugo",
administrada por el **SLEP Colchagua**, ubicada en Ruta I-85-J, Camino
Codegua, localidad El Sauce, Chimbarongo (Región de O'Higgins) — NO tiene
relación con el establecimiento de San Carlos, Ñuble. Se corrigió la
referencia al sitio oficial correcto: **https://sleppunillacordillera.gob.cl/**
(sitio del SLEP Punilla Cordillera, que sí administra San Carlos, Ñuble).
En el listado de establecimientos de ese sitio
(`/establecimientos-educacionales-2/`) se encontró y confirmó la ficha real
de la "Escuela Gral. José Miguel Carrera Verdugo" con RBD, dirección,
teléfono, correo y nombre de la dirección vigente, ya incorporados a
`src/data/school.js` (con TODOs internos donde corresponde verificación
adicional).

## Pendientes para el dueño humano (confirmar antes de publicar como datos definitivos)

- [ ] **RBD**: se encontró `3744-3` en el listado de establecimientos de
      sleppunillacordillera.gob.cl (mejor fuente que la búsqueda genérica
      original), pero conviene validar el dígito verificador con Mineduc.
- [ ] **Teléfono de contacto**: `+56 44 335 1923`, tomado del listado de
      establecimientos del SLEP. Confirmar vigencia con la dirección.
- [ ] **Correo de contacto**: `escuelajosemiguelcarrera@sleppunillacordillera.cl`,
      tomado del mismo listado. Confirmar vigencia.
- [ ] **Nombre de la dirección** (`Matilde Jofré Martínez`, según el mismo
      listado): puede cambiar: confirmar vigencia.
- [ ] **Escudo/identidad visual oficial**, si existe, para reemplazar el
      placeholder y la paleta de colores provisional.
- [ ] **Fechas exactas del proceso de Admisión Escolar (SAE)** del año en
      curso (se publican anualmente en sae.mineduc.cl).
- [ ] **Confirmar detalles del Programa de Integración Escolar (PIE)**:
      disponibilidad, cupos y cobertura actual.
- [ ] **Año exacto de fundación** del establecimiento (no verificado; solo
      se documentó su funcionamiento inicial en una casona en San Carlos).
- [ ] **Año exacto del traspaso** del Ministerio de Educación a la
      administración municipal (se documentó "alrededor de 1983").
- [ ] Contrastar todo el contenido histórico e institucional directamente
      con https://sleppunillacordillera.gob.cl/ y con la dirección del
      establecimiento.

## Notas técnicas

- No usar `-uall` en comandos de estado de git en este repo.
- El workflow de despliegue (`.github/workflows/deploy.yml`) se creó una
  sola vez en la Iteración 1 y no debería modificarse salvo fallas.
- Rama de trabajo: `claude/carrera-school-website-plan-4wiguu`.
