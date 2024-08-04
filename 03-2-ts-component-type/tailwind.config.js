export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Pretendard Variable',
          'Pretendard',
          '-apple-system',
          'BlinkMacSystemFont',
          'system-ui',
          'Roboto',
          'Helvetica Neue',
          'Segoe UI',
          'Apple SD Gothic Neo',
          'Noto Sans KR',
          'Malgun Gothic',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          'sans-serif',
        ],
      },
      colors: {
        primary: '#D83A58',
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
        md: '3px',
      },
      width: {
        7.5: '30px',
        21: '84px',
      },
      height: {
        7.5: '30px',
      },
    },
  },
  plugins: [],
};
