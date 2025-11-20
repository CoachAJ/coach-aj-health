/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'blue-sky': '#3CAADF',
        'health-blue': '#0068B3',
        'tangy-yellow': '#FFB81C',
        'glorious-sunset': '#F58A34',
        'hot-chocolate': '#784434',
        'shade-grey': '#58595B',
      },
      fontFamily: {
        'proxima': ['Proxima Nova', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
