/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      fontSize: {
        xs: "10px",
        sm: "12px",
        md: "14px",
        lg: "16px",
        xl: "18px",
        towXl: "20px",
        threeXl: "24px",
        fourXl: "48px",
      },
      colors: {
        lightWhite: "#F7F7F7",
      },
      // backgroundImage: {
      //   bgImage: "url('./images/section-green-img.png')",
      // }
      fontWeight: {
        sm: '300',
        md: '400',
        lg: '500',
        xl: '600',
        twoXl: '700',
        ThreeXl: '800',
      },
      lineHeight: {
        sm: '21px',
        md: '56px',
      }
    },
  },
  plugins: [],
}

