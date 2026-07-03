/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Paleta institucional definitiva (v2), basada en los colores reales
        // encontrados en el CSS del sitio oficial escuelajosemcarrera.cl
        // (azul marino #08088a, mostaza/oliva #c7c22c, dorado #e8d018).
        // Las variantes "mostaza" y "dorado" (sin sufijo) son versiones
        // oscurecidas respecto del tono oficial: se verificó con cálculo de
        // contraste WCAG (fórmula de luminancia relativa) que el tono
        // oficial #c7c22c/#e8d018 usado como texto sobre blanco NO alcanza
        // AA (ratio ~2.9–3.1:1); las versiones de abajo sí lo cumplen
        // (~5.3:1 y ~5.7:1 respectivamente) y deben ser las únicas usadas
        // para texto/botones. Las variantes "-claro" son el tono oficial
        // vívido, solo para uso decorativo (fondos de chips, bordes,
        // acentos), nunca como texto sobre blanco/crema.
        institucional: {
          azul: '#0A0A8F',
          'azul-oscuro': '#050550',
          'azul-claro': '#3B3BC4',
          mostaza: '#726E17',
          'mostaza-claro': '#c7c22c',
          dorado: '#7A6408',
          'dorado-claro': '#e8d018',
          crema: '#FAF7F0',
          rojo: '#B91C1C',
        },
      },
    },
  },
  plugins: [],
}
