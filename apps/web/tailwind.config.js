/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        latar: "#DDEEFF",
        btn: "#5BA5A5",
        btnhover: "#4E9090",
        hitam: "#242323",
        abu: "#e3e3e3",
        promo: "#e52424",
      },
      lineClamp: {
        7: "7",
        8: "8",
      },
    },
  },
  plugins: [],
};
