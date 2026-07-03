/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Paleta institucional provisional (colegio público chileno).
        // Ver docs/ROADMAP.md: reemplazar si aparece identidad visual oficial.
        institucional: {
          azul: '#1E3A8A',
          rojo: '#B91C1C',
          crema: '#FAF7F0',
        },
      },
    },
  },
  plugins: [],
}
