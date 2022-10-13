/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.tsx", // qualquer pasta dentro de ./src e qualquer arquivo que termine com a extensão *.tsx
  ],
  theme: {
    fontSize: {
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      "2xl": 32,
    },
    colors: {

      transparent: "transparent",

      black: "#000",
      white: "#FFF",

      gray: {
        900: "#121214",
        800: "#202024",
        400: "#7c7c8a",
        200: "#c4c4cc",
        100: "#e1e1e6",
      },

      cyan: {
        500: "#81d8f7",
        200: "#a7e8ff",
      },
    },
    extend: {
      fontFamily: {
        sans: "Inter, sans-serif", // Sobreescreve a font-family default do tipo 'sans', tenta carregar a font 'Inter' do <link /> no index.html, caso não consiga carrega a sans-serif
      },
    },
  },
  plugins: [],
};

// Aqui a gente evidencia para o tailwind onde estão os arquivos de conteúdo da nossa aplicação, onde vão estar os arquivos que vão ter classes do tailwind
