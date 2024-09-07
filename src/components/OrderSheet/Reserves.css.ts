import { themeVars } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const reservesSection = style({
  padding: '2.375rem 0 3.125rem',
});

export const reservesTitle = style({
  fontSize: '1.5rem',
  fontWeight: '700',
  marginBottom: '1rem',
});
export const reservesText = style({
  fontSize: '1rem',
  textAlign: 'left',
});

export const flexBox = style({
  display: 'grid',
  gridTemplateColumns: '7.5rem 1fr',
  gap: '.625rem',
  alignItems: 'flex-start',
  fontSize: '.9375rem',
  lineHeight: '100%',
  letterSpacing: '-.01em',
  height: '7.5rem',
});

export const inputBox = style({
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  gap: '.625rem',
});

export const inputWrap = style({
  display: 'flex',
  alignItems: 'flex-start',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '.625rem',
  position: 'relative',
});

export const inputField = style({
  width: '100%',
  height: '2.875rem',
  paddingRight: '1.25rem',
  fontSize: '1rem',
  textAlign: 'right',
  border: '1px solid #ddd',
  borderRadius: '5px',
  padding: '4px 8px',
  boxSizing: 'border-box',
  transition: 'border-color .3s ease',
});

export const button = style({
  height: '2.75rem',
  display: 'inline-grid',
  placeItems: 'center',
  width: '6.5625rem',
  borderRadius: '.125rem',
  backgroundColor: themeVars.colors.danger,
  color: '#fff',
  cursor: 'pointer',
  minWidth: '6.5625rem',
  fontSize: '1rem',
  border: 'none',
});

export const pointBox = style({
  height: '2.875rem',
  display: 'flex',
  alignItems: 'center',
  color: themeVars.colors.gray5,
  fontSize: '.875rem',
  fontWeight: 600,
  minWidth: '8.4375rem',
});

export const pointText = style({
  fontSize: '0.975rem',
  color: themeVars.colors.gray2,
});
