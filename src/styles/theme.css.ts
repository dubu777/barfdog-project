import { createTheme, createThemeContract } from "@vanilla-extract/css";


// 추후에 다크모드 구현을 위해
export const themeVars = createThemeContract({
  colors: {
    white: '',
    black: '',
    gray1: '',
    gray2: '',
    gray3: '',
    gray4: '',
    danger: '',
  },
  fontSize: {
    xs: '',
    s: '',
    m: '',
    l: '',
    xl: '',
    xxl: '',
    heading: '',
  },
});

export const theme = createTheme(themeVars, {
  colors: {
    white: '#ffffff',
    black: '#000000',
    gray1: '#717171',
    gray2: '#909090',
    gray3: '#ddd',
    gray4: '#EFEFEF',
    danger: '#ca1011',
  },
  fontSize: {
    xs: '0.6rem',
    s: '0.875rem',
    m: '1rem',
    l: '1.25rem',
    xl: '1.5rem',
    xxl: '1.75rem',
    heading: '2rem',
  },
});
