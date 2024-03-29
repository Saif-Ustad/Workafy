import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        fadeInUp: 'fadeInUp .5s ease-out',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },  
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        'title': ['"DM Sans"', 'sans-serif'],
        'body': ['"DM Sans"', 'sans-serif'],
        "prata": ['"prata"', 'serif'],
      },
      colors: {
        'headings': '#1f4b3e',
        'body-text': '#6b7177',
        'customRed': '#ff193c',
        'customGreen': '#5bbb7b',
        'customDarkGreen':'#1f4b3e',
      },
      fontSize: {
        '25': '25px',
        '15': '15px',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
};
export default config;
