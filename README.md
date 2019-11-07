# Componentes do Aprenda React
> Isso não é um Design System.

[![NPM](https://img.shields.io/npm/v/aprendareact.svg)](https://www.npmjs.com/package/aprendareact) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

<p align="center">
  <img src="./logo.png" alt="Logotipo do Aprenda React Componentes, 4 hexágonos e os dizeres Aprenda React" />
</p>


## Como instalar

```bash
yarn add aprendareact
```

## Como usar

```jsx
import React from 'react'
import { OutlineButton } from 'aprendareact/button'
import { lightTheme } from 'aprendareact/theme'
import { ThemeProvider } from 'styled-components'

const Exemplo = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <OutlineButton>
        Clique aqui
      </OutlineButton>
    </ThemeProvider>
  )
}
```

## Como utilizar com seu próprio tema

```jsx

import React from 'react'
import { OutlineButton } from 'aprendareact/button'
import { lightTheme } from 'aprendareact/theme'
import { ThemeProvider } from 'styled-components'

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

const meuProprioTema = {
  ...theme,
  name: 'light',
  backgroundColor: '#FFF',
  textColor: '#000',
  banner: {
    primary: '#ffecd2',
    secondary: '#fcb69f',
  }
}

const Exemplo = () => {
  return (
    <ThemeProvider theme={meuProprioTema}>
      <OutlineButton>
        Clique aqui
      </OutlineButton>
    </ThemeProvider>
  )
}
```

## Licença

GPL v3

## Emojis nos commits

https://gitmoji.carloscuesta.me/