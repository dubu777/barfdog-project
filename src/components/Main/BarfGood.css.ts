import { themeVars } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';



export const wrapperRow = style({
  padding: '0 1.25rem',
});

export const differenceInner = style({
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
});
export const diffText = style({
  fontWeight: 700,
  color: themeVars.colors.danger,
  marginTop: '3.75rem'

});
export const diffTitle = style({
  fontSize: '2rem',
  fontWeight: 700,
});

export const differenceSection = style({
  padding: '5rem 0 6.25rem',

});
export const differenceUl = style({
  width: '60rem',
  margin: '0 auto',
  overflow: 'hidden',
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  columnGap: '5rem',
  alignItems: 'center',
  "@media": {
    "screen and (max-width: 1000px)": {
      gridTemplateColumns: '1fr 1fr',
      width: '100%',
    },
    "screen and (max-width: 700px)": {
      display: 'block',
      width: '100%',
    },
  },
});
export const differenceLi = style({
  textAlign: 'center',

});

export const mainTitle = style({
  fontSize: '1.25rem',
  fontWeight: 'bold',
  lineHeight: '1.5',
  marginBottom: '1.5625rem',
});
export const mainTextWrapper = style({
  "@media": {
    "screen and (max-width: 1000px)": {
      gridColumn: 'span 2',
    },
  },
});

export const imageContainer = style({
  width: '100%',
  maxWidth: '260px',
  height: '260px',
  margin: '0 auto 1rem auto',
  position: 'relative',
});

export const mainText = style({
  padding: '1.875rem 0',
  fontSize: '1rem',
  fontWeight: 500,
  height: '5rem',
  lineHeight: '1.3',
  "@media": {
    "screen and (max-width: 700px)": {
      padding: '2.5rem 3.125rem 5.625rem',
      fontSize: '1rem',
      height: '5rem',
    },
  }
});
