module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {},
      fontFamily: {
        inter: {
          light: 'Inter_300Light',
          regular: 'Inter_400Regular',
          medium: 'Inter_500Medium',
          semibold: 'Inter_600SemiBold',
          bold: 'Inter_700Bold',
        },
      },
      padding: {
        default: '24px',
        small: '10px',
      },
      margin: {
        default: '24px',
        small: '10px',
      },
    },
  },
  plugins: [],
};
