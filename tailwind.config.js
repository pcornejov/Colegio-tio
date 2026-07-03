/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Paleta institucional definitiva (v1) para un colegio público
        // chileno: azul/rojo con referencia sobria a la bandera chilena,
        // sobre fondo crema neutro. Ver docs/ROADMAP.md: reemplazable si
        // aparece identidad visual / manual de marca oficial del
        // establecimiento o del SLEP Punilla Cordillera.
        institucional: {
          azul: '#1E3A8A',
          'azul-oscuro': '#152a63',
          'azul-claro': '#3B5BC4',
          rojo: '#B91C1C',
          'rojo-oscuro': '#7F1414',
          crema: '#FAF7F0',
          dorado: '#C9A227',
        },
      },
    },
  },
  plugins: [],
}
