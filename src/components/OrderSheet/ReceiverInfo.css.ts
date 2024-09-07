import { themeVars } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const receiverInfoSection = style({
  padding: '1.25rem 0 2.5625rem',
});

export const receiverInfoTitle = style({
  fontSize: '1.25rem',
  fontWeight: '500',
  marginBottom: '1.875rem',
  textAlign: 'left',
});

export const checkboxWrap = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'left',
});

export const checkboxLabel = style({
  display: 'inline-grid',
  gridTemplateColumns: '1.25rem 1fr',
  alignItems: 'center',
  columnGap: '.625rem',
  cursor: 'pointer',
  fontSize: '1rem',
});

export const checkboxInput = style({
  display: 'none',
});

export const gridBox = style({
  width: '100%',
  maxWidth: '31.25rem',
  display: 'grid',
  alignItems: 'center',
  gridTemplateColumns: '7.5rem 1fr',
  rowGap: '1rem',
  columnGap: '.625rem',
  padding: '1.375rem 0 0',
  fontSize: '.9375rem',
  lineHeight: '100%',
  letterSpacing: '-.01em',
});

export const inputBox = style({
  padding: '.8125rem 0 .8125rem 1rem',
  fontSize: '0.9375rem',
  borderRadius: '4px',
  border: '1px solid #ddd',
  width: '100%',
  appearance: 'none',
  textAlign: 'left',
});

export const addressBox = style({
  display: 'grid',
  gridTemplateColumns: '1fr',
  alignItems: 'center',
  gap: '1rem',
});

export const addressItem = style({
  display: 'grid',
  gridTemplateColumns: '1fr 2fr',
  gap: '0.625rem',
  height: '2.875rem',
  width: '100%',
});

export const btn = style({
  padding: '0.5rem 1rem',
  backgroundColor: themeVars.colors.white,
  color: themeVars.colors.danger,
  borderRadius: '5px',
  border: `0.5px solid ${themeVars.colors.danger}`,
  cursor: 'pointer',
});
