/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  purge: ["./src/**/*.{js,ts,jsx,tsx}", "./index.html"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'background': '#ebebeb',
      'box': '#5A90FE',
      'text': '#545454'
    },
    fontFamily: {
      'poppins': ["Poppins", "sans-serif"],
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
  plugins: [],
  }
}

