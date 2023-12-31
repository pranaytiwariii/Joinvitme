/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "purple-gradient": "linear-gradient(90deg, #401b4e 0%, #5f286f 100%)",
        "btn-gradient": "linear-gradient(180deg, #FDE100 0%, #F58921 100%)",
        "gradi":" linear-gradient(0deg, #ffffff 25%, #E0C3FC 50%, #ffffff 100%);",
      },
      fontFamily: {
        "spline": ['Dancing Script', 'cursive','Montserrat', 'sans-serif']
      },
    },
  },
  plugins: [],
};
