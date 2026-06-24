/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        ink: "#232323",
        cocoa: "#5C5C5C",
        rose: "#ED1C24",
        sage: "#666666",
        cream: "#F5F5F5",
        shell: "#EEEEEE",
        lavender: "#5C5C5C"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Montserrat", "Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      boxShadow: {
        soft: "0 18px 60px rgba(0, 0, 0, 0.09)"
      }
    }
  },
  plugins: []
};
