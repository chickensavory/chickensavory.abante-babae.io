/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'white' : '#FFF',
        'gray' : '#D3D3D3',
        "mm-blue": "#A2E0F5",
        "mm-dark-green": "#90D34C",
        "mm-light-pink": "#FFE2DD",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        children: ["var(--font-children-sans)"],
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
}
