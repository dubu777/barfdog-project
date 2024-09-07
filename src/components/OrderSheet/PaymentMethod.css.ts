import { themeVars } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const paymentMethodSection = style({
  padding: '1.875rem 0 3.125rem',
});

export const paymentMethodTitle = style({
  marginBottom: '1.875rem',
  textAlign: 'left',
});

export const paymentMethodGrid = style({
  display: 'grid',
  justifyContent: 'flex-start',
  gridTemplateColumns: 'repeat(auto-fill, minmax(15rem, 15rem))',
  columnGap: '.625rem',
  rowGap: '.5rem',
});

export const paymentMethodItem = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  boxSizing: 'border-box',
  padding: '1.125rem 0',
  border: `.0625rem solid ${themeVars.colors.gray3}`,
  color: themeVars.colors.gray2,
  fontSize: '.9375rem',
  lineHeight: '100%',
  letterSpacing: '-.01em',
  cursor: 'pointer',
});

export const paymentMethodImage = style({
  width: '1.5rem',
  marginRight: '.25rem',
  height: '100%',
  minHeight: '1.25rem',
  border: 0,
});

export const paymentMethodText = style({
  fontSize: '1rem',
});
