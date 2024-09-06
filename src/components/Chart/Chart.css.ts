import { themeVars } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';


export const statisticsTopContainer = style({
  gridArea: 'top',
  padding: '2.625rem 4.0625rem',
  boxShadow: '0 0 1.25rem rgba(69, 69, 83, 0.08)',
  borderRadius: '1.5rem',
  width: '100%'
});


export const statisticsTopWrapper = style({
  display: "flex",
});
export const statisticsTopBox = style({
  display: "flex",
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '33%',
  gap: '1.875rem',
});

export const statisticsTitle = style({
  fontSize: themeVars.fontSize.l,
  fontWeight: 700,
  letterSpacing: '-0.01em',
  textAlign: 'center',
  marginBottom: '2.5rem',
});


export const stickBox = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'baseline',
  height: '7.5rem',
  width: '100%',
  columnGap: '1rem',
});

export const stick = style({
  width: '1rem',
  backgroundColor: themeVars.colors.pink2,
  borderTopLeftRadius: '1.25rem',
  borderTopRightRadius: '1.25rem',
});

export const redStick = style({
  backgroundColor: '#ff4d4d',
});

export const topTextBox = style({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  margin: "auto",
  maxWidth: "9.375rem",
  rowGap: ".625rem",
  fontSize: "1rem",
  lineHeight: "100%",
  letterSpacing: "-.01em",
});

export const textRow = style({
  display: 'flex',
  justifyContent: 'space-between',
});

export const leftText = style({
  width: '50%',
  textAlign: 'left',
});

export const rightText = style({
  width: '50%',
  textAlign: 'right',
  fontWeight: 'bold',
});
