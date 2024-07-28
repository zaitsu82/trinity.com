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
        'about-img':"url('/unsplash_k1bO_VTiZSs.png')",
      },
      colors:{
        'footer':'#6B7375'
      },
      fontFamily: {
        'noto-serif': ['Noto Serif JP', 'serif'],
      },
      animation: {
        "fade-in-bottom": "fade-in-bottom 0.6s ease-out   both",
      },
      keyframes: {
        "fade-in-bottom": {
          "0%": {
            transform: "translateY(50px)",
            opacity: "0",
          },
          to: {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
      },
    }
  }
};
