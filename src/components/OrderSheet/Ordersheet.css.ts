import { themeVars } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const ordersheetContentBox = style({
  marginBottom: '3.125rem',
});

export const ordersheetTitle = style({
  fontSize: '1.25rem',
  fontWeight: '500',
  marginBottom: '0.5rem',
  textAlign: 'left',
});

export const ordersheetFlexTitleBox = style({
  display: 'grid',
  gridTemplateColumns: '1fr 3.75rem repeat(3, 6.25rem)',
  borderBottom: `0.0625rem solid ${themeVars.colors.gray1}`,
  textAlign: 'center',
  padding: '1.125rem 0',
  fontSize: '.875rem',
  lineHeight: '100%',
  letterSpacing: '-.01em',
  fontWeight: 500,
  height: '100%',
});


export const ordersheetFlexBox = style({
  display: 'grid',
  gridTemplateColumns: '1fr 3.75rem repeat(3, 6.25rem)',
  borderBottom: `.0625rem solid ${themeVars.colors.gray6}`,
  alignItems: 'center',
  textAlign: 'center',
  padding: '1.25rem 0',
  fontSize: '.9375rem',
  lineHeight: '100%',
  letterSpacing: '-.01em',
  fontWeight: 400,
});

export const ordersheetInfoCol = style({
  alignItems: 'flex-start',
  paddingLeft: '.625rem',
  fontWeight: 700,
  display: 'flex',
  flexDirection: 'column',
  gap: '.625rem',
});

export const ordersheetRecipeName = style({
  fontSize: '0.875rem',
  color: themeVars.colors.gray2,
  fontWeight: 400,
});

export const ordersheetCountCol = style({
  fontSize: '1rem',
});

export const ordersheetTitleCol = style({
  fontSize: '1rem',
  fontWeight: '600',
});

export const ordersheetPriceCol = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const ordersheetPriceInner = style({
  color: themeVars.colors.gray2,
  textDecoration: 'line-through'
});

export const ordersheetCouponColRed = style({
  color: '#999',
});

export const ordersheetApplyCouponCol = style({
  textAlign: 'center',
});

export const ordersheetButton = style({
  width: '5.0625rem',
  height: '2.3125rem',
  maxHeight: '2.3125rem',
  whiteSpace: 'nowrap',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  boxSizing: 'border-box',
  border: `.0625rem solid ${themeVars.colors.gray3}`,
  borderRadius: '.125rem',
  cursor: 'pointer',
  fontSize: '.9375rem',
  fontWeight: 500,
  backgroundColor: '#fff',
});
