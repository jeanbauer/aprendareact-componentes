const theme = {
  headingFont: 'DM Serif Display, serif',
  textFont: 'Nunito, sans-serif',
  dangerBackgroundColor: '#eb1c49',
  dangerBorderColor: '#eb1c49',
  button: {
    borderColor: '#ecb199',
    backgroundColor: '#fcbfa7',
  },
}

const lightTheme = {
  ...theme,
  name: 'light',
  backgroundColor: '#FFF',
  textColor: '#000',
  banner: {
    primary: '#ffecd2',
    secondary: '#fcb69f',
  }
}

const darkTheme = {
  ...theme,
  name: 'dark',
  backgroundColor: '#000',
  textColor: '#FFF',
  banner: {
    primary: '#884dff',
    secondary: '#673AB7',
  }
}

export { lightTheme, darkTheme }
export default lightTheme