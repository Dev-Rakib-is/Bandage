/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors:{
        HeaderaBG:'#252B42',
        mHbrClr:'#737373',
        iconClr:'#23A6f0',
        priceClr:'#BDBDBD',
        nowPrice:'#23856D',
        round1:'#23A6F0',
        round3:'#E77C40',
        newbtn:'#E74040',
        lastclr:'#FAFAFA',
      },
      backgroundImage:{
        bannerBg: "url('./assets/Banner.png')",
        summerBg: "url('./assets/carousel 2.png')",
      },
    },
  },
  plugins: [],
}

