/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        quicksand: ['Quicksand', 'sanserif'],
        Inter: ['Inter', 'sanserif']
      },
      colors: {
        customBlue: '#000033',
        orag: '#FFA500',
        cusgry: '#ececfc',
        ds: '#e6e6ff'
      },
      boxShadow: {
        'custom-sm': '20px 20px 30px rgba(15, 15, 15, 0.02)',
        'custom-bg': '20px 20px 30px rgba(15, 15, 15, 0.06)',
      },
      borderWidth: {
        '1': '1px',
      },
      fontSize: {
        cf: ['10px'],
      },
      height: {
        myHt: '500px',
        myHt2: '73%',
       },
      minHeight: {
        'lt': '400px',
        'lt2': '500px'
      },
      screens: {
        'max-477': {'max': '477px'},
        'max-540': {'max': '540px'},
        'max-799': {'max': '799px'},
        'max-1040': {'max': '1040px'}// Custom breakpoint for maximum width of 477px
      },
    },
  },
  plugins: [],
}

