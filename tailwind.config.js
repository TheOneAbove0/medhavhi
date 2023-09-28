/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: "#45B8EA",
        backGroundColor: "#faf9f6",
        SilverColor: "#545454",
        LightBlue: "#E2E8F0",
        NewBlue: "#E2EFF0",
        newBlue: "#F2F6F6",
        SkyBlue: "#2BB8D6",
        lightBlack: "#090914",

      },
      fontSize: {
        'normalSize': '16px',
        'mediumSize': '24px',
        'LargeSize': '40px',
      },

      letterSpacing: {
        tightest: '-.075em',
        tighter: '-.05em',
        tight: '-.025em',
        normal: '0',
        wide: '.025em',
        wider: '.05em',
        widest: '.1em',
        widest: '.25em',
      },
    },
  },
  plugins: [],
}