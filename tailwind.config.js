/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      textColor: {
        primary: "#2D3142",
        secondary: "#F9F9F9",
        hover: "#F5F5F5",
        active: "#EBE3E3",
        maintheme: "#FFFFFF",
        tertiary: "#1996EB",
        quaternary: "#F1F5F9"
      },
      backgroundColor: {
        primary: "#2D3142",
        secondary: "#F9F9F9",
        hover: "#F5F5F5",
        active: "#EBE3E3",
        maintheme: "#FFFFFF",
        tertiary: "#1996EB",
        quaternary: "#F1F5F9"
      },
      borderColor: {
        primary: "#2D3142",
        secondary: "#F9F9F9",
        maintheme: "#FFFFFF",
        tertiary: "#1996EB",
        quaternary: "#F1F5F9"
      }
    }
  },
  plugins: []
}
