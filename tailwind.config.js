/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ 
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'first-view': "url('/unsplash_Vtgrmre8qCA.png')",
      },
      colors:{
        'footer':'#6B7375'
      },
      fontFamily: {
        'noto-serif': ['Noto Serif JP', 'serif'],
      },
    }
  }
};
