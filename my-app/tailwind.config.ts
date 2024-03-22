import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        'old-mauve': '#703d57ff',
        'faint-mauve': 'rgb(173, 98, 137)',
        'corn': '#fff05aff',
        'snow': '#fdf7faff',
        'tart-orange': '#ff4d4dff',
        'pine-tree': '#25291cff',
        'bg': '#f5f4f2',
        'accent': '#f35251',
        'soil': '#d8c28b',
        'pss': '#ffbb4d',
      },
    },
  },
  plugins: [],
};
export default config;
