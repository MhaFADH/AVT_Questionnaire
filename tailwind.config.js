/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      textColor: {
        primary: "#143C5A",
        secondary: "#F9F9F9",
        hover: "#F5F5F5",
        active: "#EBE3E3"
      },
      backgroundColor: {
        primary: "#143C5A",
        secondary: "#F9F9F9",
        hover: "#F5F5F5",
        active: "#EBE3E3"
      }
    }
  },
  plugins: []
}
