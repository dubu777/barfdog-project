import { themeVars } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const shippingInfoSection = style({
  padding: '1.875rem 0 3.125rem',

});

export const shippingInfoTitle = style({
  fontSize: '1.25rem',
  fontWeight: '500',
  marginBottom: '1.875rem',
  textAlign: 'left',
});

export const shippingInfoBox = style({
  border: `.0625rem solid ${themeVars.colors.gray3}`,
});

export const gridBox = style({
  display: 'grid',
  gridTemplateColumns: '1fr 7.5rem 1fr',
  margin: '0.875rem 1.25rem',
  fontSize: '0.9375rem',
  lineHeight: '1.6',
});

export const leftBox = style({
  borderRight: `.0625rem solid ${themeVars.colors.gray3}`,
  paddingRight: '1.25rem',
  textAlign: 'left',
});

export const midBox = style({
  color: themeVars.colors.gray2,
  paddingLeft: '1.25rem',
  textAlign: 'left',
});

export const rightBox = style({
  textAlign: 'left',
});

export const itemTitle = style({
  fontWeight: '600',
  marginBottom: '0.5rem',
});

export const itemText = style({
  // color: themeVars.colors.danger,
  textAlign: 'left',
});

export const itemTextD = style({
  color: themeVars.colors.danger,
  textAlign: 'left',
});
