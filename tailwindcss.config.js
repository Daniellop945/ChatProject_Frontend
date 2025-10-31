/** @type {import('tailwindcss').Config} */
module.exports = {
  // Asegura que estas rutas coincidan con la estructura de tu proyecto (src/app)
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/img/**/*.{js,ts,jsx,tsx,mdx,png}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}', 
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}