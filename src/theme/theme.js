const theme = {
  headingFont: 'DM Serif Display, serif',
  textFont: 'Nunito, sans-serif',
  dangerBackgroundColor: '#f44336',
  dangerBorderColor: '#E91E63',
  button: {
    borderColor: '#ecb199',
    backgroundColor: '#fcbfa7',
  }
}

const lightTheme = {
  ...theme,
  name: 'light',
  backgroundColor: '#FFF',
  textColor: '#000'
}

const darkTheme = {
  ...theme,
  name: 'dark',
  backgroundColor: '#000',
  textColor: '#FFF'
}

export { lightTheme, darkTheme }
export default lightTheme