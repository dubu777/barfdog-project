import { themeVars } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const paymentSection = style({
  fontSize: '.9375rem',
  lineHeight: '100%',
  letterSpacing: '-.01em',
  padding: '1.875rem 0 3.125rem',
  borderBottom: `.0625rem solid ${themeVars.colors.gray4}`
});

export const title = style({
  fontSize: '1.25rem',
  fontWeight: '500',
  paddingBottom: '2rem',
  textAlign: 'left',
});

export const flexBox = style({
  display: 'flex',
  justifyContent: 'space-between',
});
export const flexBox1 = style({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '.9375rem 0 0 1.25rem',
  color: themeVars.colors.gray2,
});
export const flexBox2 = style({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '.75rem 0 1.25rem 1.25rem',
  color: themeVars.colors.gray2,
});
export const flexBox3 = style({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '1.5625rem 0 0',
});
export const flexBox4 = style({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '1.5625rem 0',
});
export const flexBox5 = style({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '1.125rem 0 1.2125rem',
});

export const checkboxWrapper = style({
  display: 'flex',
  alignItems: 'center',
  marginTop: '1rem',
  fontSize: '0.875rem',
  gap: '0.5rem',
});

export const termsButton = style({
  marginLeft: '0.5rem',
  fontSize: '0.875rem',
  color: themeVars.colors.danger,
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  textDecoration: 'underline',
});
