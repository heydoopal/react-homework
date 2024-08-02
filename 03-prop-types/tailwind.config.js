export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#e23e57',
        content: '#333333',
        black: '#000000',
        white: '#ffffff',
        'gray-50': '#f9f9f9',
        'gray-100': '#e1e1e1',
        'gray-200': '#c4c4c4',
        'gray-300': '#a6a6a6',
        'gray-400': '#898989',
        'gray-500': '#6b6b6b',
      },
      borderRadius: {
        'md': '3px',
      },
      width: {
        '21': '84px', 
      },
      height: {
        '7.5': '30px',
      },
    },
  },
  plugins: [],
};