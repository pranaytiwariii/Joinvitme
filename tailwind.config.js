/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "purple-gradient": "linear-gradient(90deg, #401b4e 0%, #5f286f 100%)",
        "btn-gradient": "linear-gradient(180deg, #FDE100 0%, #F58921 100%)",
      },
    },
  },
  plugins: [],
};
