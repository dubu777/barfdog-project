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
  '@media': {
    'screen and (max-width: 600px)': {
      display: 'none',
    },
  },
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
  '@media': {
    'screen and (max-width: 600px)': {
      position: 'relative',
      display: 'grid',
      gridTemplateAreas: `
        "info_col info_col info_col count_col"
        "price_col price_col price_col price_col"
        "coupon_col_red coupon_col_red coupon_col_red apply_coupon_col"
      `,
      gridTemplateColumns: '1fr 1fr 1fr 1fr',
      rowGap: '1.25rem',
      paddingBottom: '1.875rem',
      ":before": {
        content: '""',
        position: 'absolute',
        bottom: '1.25rem',
        left: 0,
        width: '100%',
        height: '5.625rem',
        backgroundColor: '#f1f1f4',
        zIndex: -99,
      },
    },
  },
});

export const ordersheetInfoCol = style({
  alignItems: 'flex-start',
  paddingLeft: '.625rem',
  fontWeight: 700,
  display: 'flex',
  flexDirection: 'column',
  gap: '.625rem',
  '@media': {
    'screen and (max-width: 600px)': {
      position: 'relative',
      gridColumn: '1 / span 3',
      ":before": {
        content: '"쿠폰할인"',
        position: 'absolute',
        bottom: '-5.5rem',
        left: '1.25rem',
        fontWeight: 400,
    },
    },
  },
});

export const ordersheetRecipeName = style({
  fontSize: '0.875rem',
  color: themeVars.colors.gray2,
  fontWeight: 400,
  '@media': {
    'screen and (max-width: 600px)': {
      ":after": {
        content: '"총 주문금액"',
        position: 'absolute',
        bottom: '-2.875rem',
        left: '1.25rem',
        fontWeight: 400,
    },
    },
  },
});

export const ordersheetCountCol = style({
  fontSize: '1rem',
  '@media': {
    'screen and (max-width: 600px)': {
      gridColumn: '4 / span 1',
  textAlign: 'right',
  paddingRight: '.625rem',
    },
  },
});

export const ordersheetTitleCol = style({
  fontSize: '1rem',
  fontWeight: '600',
});
export const ordersheetNoneBox = style({
  '@media': {
    'screen and (max-width: 600px)': {
      display: 'none',
    },
  },
});

export const ordersheetPriceCol = style({

  '@media': {
    'screen and (max-width: 600px)': {
      gridColumn: '1 / span 4',
      textAlign: 'right',
      display: 'flex',
      justifyContent: 'flex-end',
      paddingTop: '.625rem',
      paddingRight: '1.25rem',
    },
  },
});

export const ordersheetPriceInner = style({
  color: themeVars.colors.gray2,
  textDecoration: 'line-through',
  '@media': {
    'screen and (max-width: 600px)': {
      paddingRight: '0.625rem',
    },
  },

});

export const ordersheetCouponColRed = style({
  color: '#999',
  '@media': {
    'screen and (max-width: 600px)': {
      gridColumn: '1 / span 3',
      textAlign: 'right',
    },
  },
});

export const ordersheetApplyCouponCol = style({
  display: 'flex',
  justifyContent: 'center',
  '@media': {
    'screen and (max-width: 600px)': {
      gridColumn: '4 / span 1',
  justifyContent: 'flex-end',
  paddingLeft: '.625rem',
  paddingRight: '1.25rem',
    },
  },
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
  '@media': {
    'screen and (max-width: 600px)': {
      gridColumn: '1 / span 3',
      textAlign: 'right',
    },
  },
});
