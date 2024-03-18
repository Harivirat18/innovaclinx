/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "992px",
      xl: "1024px",
      "2xl": "1280px",
    },
    colors: {
      'header-bg': '#f5f5f5',
      'nav-item-color': '#2f323a',
      'section-1': '#eeeeee',
      'section-2': '#e5e5e5',
      'section-3': '#f5f5f5',
      'footer': '#191919',
      'primary-color': '#fc5130',
      'secondary-color': '#E0040B',
      'para': '#6f6f6f',
      'white': '#fff',
      'footer-1': '#8e8e8e',
      'black': 'rgb(19 19 19)',
      'red': '#dd1e4b',
      'purple': 'rgb(196 137 248)',
      'sky': 'rgb(88 212 253)',
      'gold':'rgb(135 130 130)',
    },
    // backgroundImage: {
    //   'about-bg': "url('./media/about-section.jpg')",
    //   'service-bg': "url('/img/footer-texture.png')",
    // },
    // fontFamily: {
    //   poppins: ['Outfit', 'sans-serif'],
    // },
    extend: {
      fontFamily: {
        outfit: ['Outfit', 'sans-serif']
      },
      // padding: {
      //   '16' :'10rem',
      //   '18' :'20rem'
      // },
      // minHeight: {
      //   '80':'20rem',
      // }
    },
  },
  plugins: [],
}