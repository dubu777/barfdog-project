import { themeVars } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const shippingInfoSection = style({
  padding: '1.875rem 0 3.125rem',
  "@media": {
    "screen and (max-width: 600px)": {
      padding: '1.875rem 0',
    },
  }
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
  "@media": {
    "screen and (max-width: 600px)": {
      display: 'grid',
      gridTemplateColumns: '6.25rem 1fr',
      margin: '.875rem 1.25rem',
      columnGap: '0',
      rowGap: '.625rem',
    },
  }
});

export const leftBox = style({
  borderRight: `.0625rem solid ${themeVars.colors.gray3}`,
  paddingRight: '1.25rem',
  textAlign: 'left',
  "@media": {
    "screen and (max-width: 600px)": {
      border: 'none',
      gridColumn: '1 / span 2',
      paddingRight: '0',
    },
  }
});

export const midBox = style({
  color: themeVars.colors.gray2,
  paddingLeft: '1.25rem',
  textAlign: 'left',
  "@media": {
    "screen and (max-width: 600px)": {
      paddingTop: '.625rem',
      paddingLeft: '0',
      borderTop: `.0625rem solid ${themeVars.colors.gray4}`,
    },
  }
});

export const rightBox = style({
  textAlign: 'left',
  "@media": {
    "screen and (max-width: 600px)": {
      paddingTop: '.625rem',
      borderTop: `.0625rem solid ${themeVars.colors.gray4}`,
    },
  }
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
