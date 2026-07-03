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
- [x] **Iteración 5 — Pulido / SEO / accesibilidad (completada)**: ver
      detalle en la sección "Iteración 5" más abajo. Con esto se cierran las
      5 iteraciones planificadas de la primera tanda.

**Estado de la primera tanda: completa (5/5).** El sitio cuenta con sus 5
secciones (`#inicio`, `#historia`, `#oferta-academica`, `#admision`,
`#contacto`), datos institucionales verificados con TODOs explícitos donde
corresponde, paleta de colores real verificada por contraste, escudo
propio, y mejoras de SEO/accesibilidad.

### Segunda tanda (iteraciones 6-10)

- [x] **Iteración 6 — Vida Escolar**: sección `#vida-escolar` con
      actividades reales del colegio (fútbol, ajedrez, Juramento a la
      Bandera, Semana del Libro, Día de la Tierra) descritas con texto e
      iconografía genérica — sin fotos de estudiantes identificables, por
      decisión explícita del dueño del proyecto sobre protección de
      menores.
- [x] **Iteración 7 — Talleres extraescolares**: talleres reales
      (ajedrez, danza, fútbol, guitarra) agrupados por ciclo con horarios.
- [x] **Iteración 8 — Equipo directivo, contacto ampliado y documentos**:
      nombre de la directora y horario de atención agregados a Contacto;
      bloque de documentos institucionales (PEI, reglamentos) enlazado.
- [x] **Iteración 9 — Identidad visual final**: auditoría de paleta del
      Diseñador aplicada — se corrigió el ritmo de alternancia de fondos
      de sección (`Admision.jsx` y `Contacto.jsx` habían quedado ambas en
      `bg-white`, rompiendo la secuencia blanco/crema; ahora alternan
      correctamente) y se agregó una franja decorativa fina (`h-1.5`,
      gradiente `institucional-azul-oscuro` → `institucional-mostaza-claro`
      → `institucional-dorado-claro`, sin texto, `aria-hidden`) en la parte
      superior de `App.jsx`, sin modificar `Hero.jsx`.
- [x] **Iteración 10 — Pulido final de la tanda (QA de accesibilidad)**:
      auditoría manual de accesibilidad sobre el contenido nuevo de las
      iteraciones 6-9, con 2 problemas reales encontrados y corregidos:
      1. **Contraste AA roto por `opacity-80`** en el span de
         `taller.nota` de `OfertaAcademica.jsx`: se calculó numéricamente
         (fórmula de luminancia relativa WCAG) que la opacidad bajaba el
         contraste de `primer-ciclo` de 4.7:1 a 3.24:1 (falla AA) y de
         `segundo-ciclo` de 5.24:1 a 3.52:1 (falla AA) — este último es el
         grupo que incluye el horario del Taller de Ajedrez. Se quitó la
         clase `opacity-80`, restaurando el cumplimiento AA sin cambiar
         colores.
      2. **Enlaces a PDF sin indicación textual** de que abren en pestaña
         nueva y apuntan a un archivo PDF (WCAG 3.2.5): se agregó un texto
         visible `(PDF, abre en pestaña nueva)` junto a cada nombre de
         documento en el bloque "Documentos institucionales" de
         `Contacto.jsx`, visible para todos los usuarios (no solo
         `sr-only`).
      Verificación adicional de QA (sin hallazgos nuevos): los 5 SVG
      decorativos de `VidaEscolar.jsx` tienen `aria-hidden="true"` y
      `focusable="false"`; la jerarquía de encabezados en `VidaEscolar.jsx`
      y en "Talleres extraescolares" de `OfertaAcademica.jsx` es correcta
      (h2 → h3 → h4, sin saltos, listas `<ul>`/`<li>` semánticamente
      correctas); la franja decorativa de `App.jsx` tiene `aria-hidden` y,
      al no ser focuseable, no interfiere con que el skip-link siga siendo
      el primer elemento enfocable de la página.

**Estado de la segunda tanda: completa (5/5, iteraciones 6-10).** La
segunda tanda agregó una sección de Vida Escolar sin fotos de personas
(iconografía genérica), talleres extraescolares reales agrupados por ciclo
con horarios, un bloque de contacto ampliado con directora, horario de
atención y documentos institucionales descargables, la consolidación final
de la identidad visual (alternancia de fondos y franja de acento), y un
cierre de QA de accesibilidad que verificó y corrigió el contraste AA y la
claridad de los enlaces a PDF de todo lo construido en las iteraciones
6-9.

### Tercera tanda (iteraciones 11-12)

- [x] **Iteración 11 — Galería de fotos + datos oficiales de Mineduc**:
      - Nueva sección `#galeria` (`src/components/sections/Galeria.jsx`),
        ubicada entre Vida Escolar y Admisión, con 3 fotografías reales del
        establecimiento (fachada con el letrero "Escuela E-112 General José
        Miguel Carrera V", la bandera chilena y el busto del General José
        Miguel Carrera; y dos vistas de la biblioteca/CRA), en un layout de
        mosaico (sin carrusel): la fachada como pieza destacada
        (`sm:row-span-2`) y las dos fotos del CRA como dúo más pequeño.
        Imágenes optimizadas (redimensionadas a 1200px de ancho máx.,
        calidad JPEG ~80) y copiadas a `public/images/galeria/`
        (`fachada.jpg`, `cra-1.jpg`, `cra-4.jpg`), referenciadas siempre con
        `import.meta.env.BASE_URL` (nunca rutas absolutas, por el
        `base: '/Colegio-tio/'` de `vite.config.js`). Debajo del mosaico, un
        bloque de chips de infraestructura (`school.infraestructura.espacios`).
        `NavBar.jsx` actualizado con el anchor `#galeria`.
      - **Cifras oficiales de matrícula, docentes y promedio de alumnos por
        curso** (`school.cifras`), fuente API oficial de Mineduc (RBD 3744),
        mostradas como fila de 3 "stat tiles" en `Hero.jsx`. Esto resuelve el
        pendiente de "Matrícula aproximada" (ver sección de pendientes).
      - **Régimen y modalidad** del establecimiento (`school.regimen`: mixto,
        laico, uniforme propio, sin internado) y **etiquetas oficiales**
        (`school.etiquetasOficiales`: PIE, SEP, Gratuito), agregados como
        nueva card y fila de chips respectivamente en `OfertaAcademica.jsx`.
      - **Equipo de apoyo integral** (`school.ofertaAcademica.equipoApoyo`:
        asistente social, fonoaudiólogo/a, psicólogo/a, psicopedagogo/a,
        terapeuta ocupacional), nueva card en `OfertaAcademica.jsx`.
      - **Nombre completo de la directora** actualizado a "Matilde de las
        Mercedes Jofré Martínez" en `direccionEscolar.nombre`.
      - **Talleres extraescolares**: se agregaron "Música", "Artes
        Plásticas" y "Baby fútbol" al primer ciclo (sin fusionar con
        "Pintura"/"Guitarra" ya existentes), y una nota aclaratoria en
        "Computación" (segundo ciclo) indicando que también se reporta como
        "TIC".
      - **Nivel "Educación Básica"**: se agregó al final de su descripción
        que incluye inglés como asignatura desde 1° básico.
      - **Programas institucionales** (`school.vidaEscolar.programas`:
        Convivencia escolar, Medioambiente, Educación sexual, Prevención de
        drogas), nuevo subbloque con fila de chips en `VidaEscolar.jsx`.
      - Todos los datos nuevos de esta iteración provienen de la API oficial
        de Mineduc (RBD 3744) y ya están verificados, por lo que se
        incorporaron **sin** comentarios `TODO(confirm)`.

**Desviación respecto a la especificación**: el ítem A.7.6 de la
especificación pedía agregar "Música" y "Artes Plásticas" "en el ciclo
correspondiente" sin especificar cuál. Ante esa ambigüedad, se agregaron
ambos talleres al **primer ciclo** (1° a 4° básico), por ser el ciclo con
el conjunto de talleres más generalista/artístico de los dos ya existentes
(el segundo ciclo tiene una oferta más diferenciada: Formación Ciudadana,
Patrimonio, Fotografía, etc.). Si esta asignación de ciclo no es correcta,
ajustar `talleresExtraescolares` en `src/data/school.js`.

- [x] **Iteración 12 — Pulido visual general**:
      - **Hero con foto de fachada** (`Hero.jsx`): se reemplazó el fondo de
        gradiente plano por la fotografía real `fachada.jpg` (agregada en
        la Iteración 11) como `<img>` de fondo absoluto y decorativo
        (`alt=""`, `aria-hidden`), con el mismo overlay de gradiente
        azul-oscuro → azul ya verificado por contraste AA, sin cambios de
        color ni de contenido.
      - **Consistencia de tarjetas y micro-interacciones**: los dos bloques
        de información de `Contacto.jsx` (Dirección y Dirección del
        establecimiento), que repetían a mano las clases de `Card`, ahora
        usan el componente `<Card>` de `src/components/ui/Card.jsx`
        (`Admision.jsx` ya usaba `<Card>` en todos sus bloques genéricos, así
        que no requirió cambios en ese punto). `Card.jsx` ganó una elevación
        sutil al hover (`hover:-translate-y-0.5`, con `transform` y
        `transition` en vez de solo `transition-shadow`, para que la
        traslación anime igual de suave que la sombra).
      - **Foco visible**: se agregaron estilos `focus-visible:ring-2
        focus-visible:ring-institucional-rojo` (con `ring-offset` ajustado
        al fondo local de cada contexto: crema en `NavBar.jsx`, blanco en
        los CTA de `Hero.jsx` y en los enlaces de documentos de
        `Contacto.jsx`) a todos los enlaces que antes solo tenían estilos
        `hover:`.
      - **Jerarquía tipográfica**: el `<h1>` de `Hero.jsx` pasó a
        `text-5xl sm:text-6xl tracking-tight`; el `<h2>` de
        `SectionHeading.jsx` ganó `tracking-tight`. Los subtítulos
        (`text-gray-600`) no se tocaron.
      - **Nuevo componente `SubHeading`** (`src/components/ui/SubHeading.jsx`):
        elimina la duplicación del patrón `<h3 ... text-2xl font-bold
        text-institucional-azul>` + `<p ... text-gray-600>` que estaba
        copiado en varios archivos. Reemplazado en `Admision.jsx` ("Nuestro
        Proyecto Educativo"), `Contacto.jsx` ("Documentos institucionales"),
        `OfertaAcademica.jsx` ("Talleres extraescolares" y "Noticias"),
        `VidaEscolar.jsx` ("Programas institucionales") y `Galeria.jsx`
        ("Infraestructura"). El componente acepta `titleClassName` /
        `subtitleClassName` opcionales para reproducir, sin cambio visual,
        los pequeños márgenes distintos que ya existían entre bloques
        (`mb-8` en el subtítulo de "Talleres extraescolares", `mb-4` en el
        título de "Infraestructura").

**Desviaciones respecto a la especificación (Iteración 12)**:

- El bloque de "Nuestros sellos" en `Admision.jsx` (chips con borde
  `institucional-dorado-claro`, `p-4`, texto centrado) **no** se convirtió a
  `<Card>`: su estilo es deliberadamente distinto (color de borde y
  alineación) al patrón genérico `rounded-xl border border-gray-200 bg-white
  p-6` que pedía la especificación, y forzarlo a `<Card>` habría requerido
  una variante nueva sin beneficio claro de reutilización.
- El enlace de cada documento institucional en `Contacto.jsx` (un `<a>`
  completo, no un `<div>`) se dejó como `<a>` en vez de convertirlo a
  `<Card>`, porque `Card` renderiza un `<div>` y el elemento necesita seguir
  siendo un enlace navegable de principio a fin; solo se le agregaron los
  estilos de foco visible pedidos para "enlaces de documentos".
- Los estilos de foco visible se aplicaron a los elementos explícitamente
  listados en la especificación (`NavBar.jsx`, CTAs de `Hero.jsx`, enlaces
  de documentos de `Contacto.jsx`); otros enlaces sueltos del sitio
  (teléfono, correo, SAE, "sitio oficial" del SLEP, mapa) mantienen su
  estilo `hover:` previo, para no expandir el alcance más allá de lo
  pedido.

**Estado de la tercera tanda: completa (2/2, iteraciones 11-12).** Con el
mosaico de fotos, las cifras oficiales de Mineduc y los datos ampliados de
la Iteración 11, más el pulido visual general (foto de fondo en el Hero,
tarjetas consistentes con micro-interacción de hover, foco visible en
todos los enlaces interactivos, jerarquía tipográfica reforzada y
eliminación de duplicación con `SubHeading`) de la Iteración 12, se cierra
esta mini-tanda de 2 iteraciones.

## Decisiones de diseño

- **Paleta institucional (v2, Iteración 5)**: reemplaza la paleta genérica
  patria de la Iteración 2. Se basa en colores reales encontrados en el CSS
  del sitio oficial `escuelajosemcarrera.cl` (azul marino `#08088a`,
  mostaza/oliva `#c7c22c`, dorado `#e8d018`), definida en
  `tailwind.config.js` bajo el namespace `institucional`. Las variantes
  `mostaza` y `dorado` (sin sufijo) son versiones oscurecidas del tono
  oficial: se verificó con cálculo de contraste WCAG que el tono oficial
  vívido, usado como texto sobre blanco, NO alcanza AA (ratio ~2.9–3.1:1);
  las versiones oscurecidas sí lo cumplen (~5.3:1 y ~5.7:1). Las variantes
  `-claro` mantienen el tono oficial vívido, solo para uso decorativo
  (fondos de chips, bordes, acentos), nunca como texto sobre fondo claro.
- **Escudo (v2, Iteración 5)**: `public/images/escudo-placeholder.svg` fue
  rediseñado como una **interpretación gráfica propia** (shield con fondo
  blanco, borde azul marino, filete dorado, silueta de montañas azul marino
  y antorcha central con llama naranja/roja sobre base mostaza), inspirada
  en la forma y colores públicos de la identidad del establecimiento, pero
  **no es una copia del logo oficial** (`logo.png` del sitio oficial), que
  deliberadamente no se incorporó por no contar con autorización clara de
  uso de un asset de terceros. Ver pendientes abajo.
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

## Corrección posterior a Iteración 4 (fuente: Facebook oficial del colegio)

El dueño del repo compartió capturas del Facebook oficial del colegio
("Escuela Jose M Carrera V", San Carlos), verificadas directamente por el
equipo. Se confirmaron y corrigieron los siguientes datos en
`src/data/school.js` y `src/components/sections/Contacto.jsx`:

- **Nombre de la calle**: es **"Itihue"**, no "Ituhue" como estaba escrito
  antes (confirmado en la ficha de Facebook — "Itihue #426" — y en un
  gráfico institucional oficial — "Itihue 426 - San Carlos").
- **Dependencia del SLEP Punilla Cordillera**: confirmada explícitamente en
  el campo de dependencia de la ficha de Facebook y en el mismo gráfico
  institucional.
- **Designación "Escuela E-112"**: confirmada visualmente en el letrero de
  la fachada del edificio, visible en la foto de portada de Facebook.

El dígito verificador del RBD (`3744-3`) sigue sin confirmación adicional
directa (ver pendientes abajo).

## Iteración 5 — Pulido / SEO / accesibilidad (detalle)

Fuente de los datos nuevos: sitio oficial `escuelajosemcarrera.cl`
(páginas de inicio, "Nosotros", "Misión y Visión" y "Documentos", descargadas
y grepeadas directamente) y publicaciones reales del Facebook oficial del
colegio ("Escuela Jose M Carrera V", San Carlos), todo verificado
personalmente antes de incorporarse.

- **Contenido institucional nuevo** (`src/data/school.js`):
  - Misión y Visión reales (textuales, sitio oficial).
  - PEI: 5 sellos educativos (Aceptación a la Diversidad, Compromiso
    Académico, Espíritu Crítico, Resiliencia, Espíritu Deportivo) y eslogan
    "EDUCAR EN LA DIVERSIDAD".
  - `ofertaAcademica.niveles` actualizado a 3 niveles reales (Educación
    Parvularia NT1-NT2, Educación Básica 1°-8°, Curso Especial — este
    último con `TODO(confirm)` sobre su público objetivo exacto).
  - `ofertaAcademica.talleres`: 18 talleres extraescolares reales
    (ajedrez, danza, fútbol damas/hombres, guitarra, computación, formación
    ciudadana, fotografía, hilorama, patrimonio, pintura, básquetbol, tenis
    de mesa, polideportivo, yoga, inglés parvulario, arte y manualidades,
    huerto).
  - Noticias reales en `OfertaAcademica.jsx` (reemplazan las 3 genéricas):
    amistoso de fútbol vs. Cocosan Carlos, Torneo Interno de Ajedrez +
    Taller de Ajedrez los jueves, Consejo de Evaluación y Reflexión
    Docente (todas del 19 de junio, Facebook oficial).
- **Misión/Visión/Sellos en UI**: nuevo bloque "Nuestro Proyecto Educativo"
  dentro de `Admision.jsx` (no se creó un anchor de navegación nuevo, para
  no romper la estructura de 5 secciones ya definida).
- **Paleta de colores real**: ver "Decisiones de diseño" arriba. Aplicada
  en `tailwind.config.js`; se revisaron con `grep` todos los usos
  existentes de `institucional-*` en los componentes (ninguno usaba
  `dorado` ni `rojo-oscuro`, así que no hubo riesgo de romper estilos ya
  aplicados al renombrar/ajustar esos tokens).
- **Escudo propio**: rediseño de
  `public/images/escudo-placeholder.svg` (shield, no círculo; fondo
  blanco; borde azul marino; filete dorado; montañas azul marino; antorcha
  con llama naranja/roja sobre base mostaza), con comentario interno
  explícito de que es una interpretación propia y no el archivo oficial.
  También se actualizó `public/favicon.svg` con la misma paleta, como
  versión simplificada del escudo.
- **Alt text**: descrito de forma completa en `Historia.jsx` (indica
  explícitamente que es una interpretación gráfica no oficial).
- **SEO**: Open Graph básico (`og:type`, `og:locale`, `og:title`,
  `og:description`, `og:url`, `og:site_name`) agregado en `index.html`;
  `lang="es-CL"` ya estaba presente y se mantuvo; `meta name="description"`
  ya existía. `public/robots.txt` ya existía y apuntaba correctamente a
  `sitemap.xml`; se agregó `public/sitemap.xml` (sitio de una sola página,
  con la URL raíz de GitHub Pages).
- **Accesibilidad**: skip-link "Saltar al contenido principal" agregado
  como primer elemento interactivo en `App.jsx` (visible solo al enfocar
  con teclado, `sr-only focus:not-sr-only`), apuntando a
  `#contenido-principal` (nuevo `id` en `<main>`). Se confirmaron los
  landmarks semánticos ya existentes: `<header>` (NavBar, con
  `aria-label="Navegación principal"`), `<main>`, `<footer>`. Jerarquía de
  encabezados revisada (h1 en Hero, h2 por sección vía `SectionHeading`, h3
  para subbloques como Noticias/Talleres/Misión-Visión/Sellos).
- **Contraste AA**: verificado numéricamente (fórmula de luminancia
  relativa WCAG) para todos los pares texto/fondo nuevos que usan
  mostaza/dorado; ver comentario en `tailwind.config.js` con los ratios
  exactos obtenidos.
- **Build**: `npm run build` y `npm run lint` (oxlint) verificados sin
  errores al cierre de esta iteración.

### Alcance no cubierto en esta iteración (por decisión, no por olvido)

- No se agregó `og:image`: no se contaba con un asset de imagen (PNG/JPG)
  de buena calidad para vista previa social; el escudo es SVG. Si se desea,
  se puede generar un PNG del escudo/hero para esto en una iteración
  futura.
- `Contacto.jsx` no requirió cambios de color: ya usaba los tokens
  `institucional-azul`/`institucional-rojo`, que se mantuvieron en la
  paleta nueva sin romper su apariencia.

## Pendientes para el dueño humano (confirmar antes de publicar como datos definitivos)

- [ ] **RBD**: se encontró `3744-3` en el listado de establecimientos de
      sleppunillacordillera.gob.cl (mejor fuente que la búsqueda genérica
      original), pero **el dígito verificador exacto sigue sin validar**
      con Mineduc. No se marca como confirmado bajo ninguna circunstancia.
- [ ] **Teléfono de contacto**: `+56 44 335 1923`, tomado del listado de
      establecimientos del SLEP. Confirmar vigencia con la dirección.
- [ ] **Correo de contacto**: `escuelajosemiguelcarrera@sleppunillacordillera.cl`,
      tomado del mismo listado. Confirmar vigencia.
- [ ] **Nombre de la dirección** (`Matilde de las Mercedes Jofré Martínez`,
      nombre completo confirmado por la API oficial de Mineduc en la
      Iteración 11): el nombre en sí ya está confirmado, pero el cargo
      puede cambiar: confirmar vigencia.
- [x] **Escudo (resuelto)**: reemplazado el SVG propio (interpretación no
      oficial, Iteración 5) por el escudo oficial real (`public/images/escudo-oficial.png`,
      descargado de `escuelajosemcarrera.cl`), usado en `Historia.jsx` con
      autorización explícita del dueño del proyecto (confirmó representar
      al colegio/SLEP). El favicon se mantiene como vector simplificado
      propio, ya que el escudo oficial no es legible a tamaño de ícono.
- [ ] **Fechas exactas del proceso de Admisión Escolar (SAE)** del año en
      curso (se publican anualmente en sae.mineduc.cl).
- [ ] **Confirmar detalles del Programa de Integración Escolar (PIE)**:
      disponibilidad, cupos y cobertura actual.
- [ ] **Curso Especial**: confirmar con la dirección del establecimiento su
      público objetivo y funcionamiento exacto (nivel listado en el menú
      del sitio oficial, sin mayor detalle disponible).
- [ ] **Año exacto de fundación** del establecimiento (no verificado; solo
      se documentó su funcionamiento inicial en una casona en San Carlos).
- [ ] **Año exacto del traspaso** del Ministerio de Educación a la
      administración municipal (se documentó "alrededor de 1983").
- [ ] Contrastar todo el contenido histórico e institucional directamente
      con https://sleppunillacordillera.gob.cl/ y con la dirección del
      establecimiento.
- [x] **Matrícula aproximada (≈224 alumnos)**: **resuelto en la Iteración
      11.** La cifra de ≈224 alumnos mencionada en material de referencia
      anterior era de baja confianza y queda descartada. La API oficial de
      Mineduc (RBD 3744) confirma la matrícula real: **213 estudiantes**
      (junto con 34 docentes y un promedio de 16 alumnos por curso), ya
      incorporados en `school.cifras` y mostrados en `Hero.jsx`. Ya no es
      un pendiente.
- [ ] **Documentos institucionales con nombres de archivo desactualizados**
      (ver Iteración 8): el sitio oficial etiqueta los enlaces como "PEI -
      2025" y "Reglamento Interno y Convivencia - 2024-2025", pero ambos
      apuntan a archivos PDF cuyo nombre de archivo y ruta corresponden a
      años anteriores (`PEI-2021.pdf` en la ruta `/uploads/2021/12/` y
      `Reglamento-de-de-Convivencia-Escolar-Esc.-Gral.-JMCV-1.pdf` en la
      ruta `/uploads/2019/04/`, respectivamente). Confirmar con el colegio
      si el contenido de esos PDFs efectivamente está actualizado a
      2024-2025/2025, o si son archivos antiguos que no se han vuelto a
      subir con el nombre correspondiente.

## Nota operativa: verificación de despliegue pendiente

Este es un hecho **operativo** (no un dato del colegio): al cierre de la
Iteración 5, la conexión MCP a GitHub del agente Orquestador se cayó y
requiere reautorización del usuario, por lo que **no se pudo verificar en
esta sesión que el workflow de GitHub Actions haya desplegado
correctamente** el resultado de esta iteración en
https://pcornejov.github.io/Colegio-tio/. El commit sí se subió a la rama
de trabajo `claude/carrera-school-website-plan-4wiguu`, y el workflow
`.github/workflows/deploy.yml` está configurado para ejecutarse
automáticamente en cada push a esa misma rama (ver hash del commit en el
historial de git); falta confirmar manualmente, revisando la pestaña
"Actions" del repo en GitHub, que esa ejecución del workflow terminó sin
errores y que el sitio publicado en https://pcornejov.github.io/Colegio-tio/
refleja los cambios de esta iteración.

## Notas técnicas

- No usar `-uall` en comandos de estado de git en este repo.
- El workflow de despliegue (`.github/workflows/deploy.yml`) se creó una
  sola vez en la Iteración 1 y no debería modificarse salvo fallas.
- Rama de trabajo: `claude/carrera-school-website-plan-4wiguu`.
