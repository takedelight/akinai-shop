import { MantineColorsTuple, createTheme } from '@mantine/core';

const makeColor = (name: string): MantineColorsTuple => [
  `var(--${name}-50)`,
  `var(--${name}-100)`,
  `var(--${name}-200)`,
  `var(--${name}-300)`,
  `var(--${name}-400)`,
  `var(--${name}-500)`,
  `var(--${name}-600)`,
  `var(--${name}-700)`,
  `var(--${name}-800)`,
  `var(--${name}-900)`,
];

export const theme = createTheme({
  primaryColor: 'primary',
  primaryShade: 5,

  colors: {
    primary: makeColor('primary'),
    neutral: makeColor('neutral'),
    secondary: makeColor('secondary'),
    success: makeColor('success'),
    warning: makeColor('warning'),
    danger: makeColor('danger'),
  },

  defaultRadius: 'var(--rounded-sm)',
  radius: {
    xs: 'var(--rounded-sm)',
    sm: 'var(--rounded-sm)',
    md: 'var(--rounded-md)',
    lg: 'var(--rounded-lg)',
    xl: 'var(--rounded-lg)',
  },

  fontFamily: 'var(--font-public-sans), sans-serif',
});
