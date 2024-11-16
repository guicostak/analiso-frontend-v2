import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: "#2485a8",
        secondaryColor: "#101820",
        primaryBackground: '#1A2128',
        primaryColorHover: "#2485a820",
        errorColor: '#D04444'
      },
    },
  },
  plugins: [],
} satisfies Config;
