/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'background': '#545454',
      'box': '#404040',
      'purple': '#8C52FF'
    },
    fontFamily: {
      'plex': ["IBM Plex Mono", "monospace;"],
    }
  },
  plugins: [
    
  ],
}

