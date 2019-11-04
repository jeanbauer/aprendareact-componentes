import { configure, addDecorator, addParameters } from '@storybook/react';
import { create } from '@storybook/theming';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';

import storybookTheme from './storybook-theme';
import { lightTheme, darkTheme } from '../src/theme/theme'

const themes = [
  {
    name: 'Diurno',
    backgroundColor: '#fff',
    ...lightTheme,
  },
  {
    name: 'Noturno',
    backgroundColor: '#000',
    ...darkTheme,
  }
]

addDecorator(withThemesProvider(themes));

addParameters({
  options: {
    theme: storybookTheme,
  },
});

// automatically import all files ending in *.stories.js
configure(require.context('../src', true, /\.stories\.(js|mdx)$/), module);
