/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        // 'it-bg': "url('../src/assets/imgs/loginbg.png')",
      },
      colors:{
        'bg-main':'#ffc629',  
      },

    },
  },
  plugins: [],
}