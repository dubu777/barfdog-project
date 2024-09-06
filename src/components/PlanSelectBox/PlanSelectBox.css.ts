import { themeVars } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const subscribePlansContainer = recipe({
  base: {
    overflow: 'hidden',
    position: 'relative',
    cursor: 'pointer',
    display: 'block',
    borderRadius: '.75rem',
    border: `.0625rem solid ${themeVars.colors.gray5}`,
    padding: '.9375rem 1.5625rem',
    transition: 'border-color .15s ease, box-shadow .15s ease',
    ':hover': {
      boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    },
  },
  variants: {
    isSelected: {
      true: {
        borderColor: themeVars.colors.danger,
      },
      false: {}
    },
  },
  defaultVariants: {
    isSelected: false,
  }
});
export const subscribePlans = style({
  marginBottom: '1.25rem',
});

export const planWrapper = style({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  padding: '1rem',
  border: '1px solid #ccc',
  borderRadius: '0.5rem',
  cursor: 'pointer',
  transition: 'all 0.3s',

});

export const selected = style({
  borderColor: 'var(--color-main)',
  backgroundColor: '#f9f9f9',
});

export const bestLabel = style({
  color: themeVars.colors.white,
  display: 'flex',
  alignItems: 'center', 
  justifyContent: 'center',
  fontWeight: 500,
  transformOrigin: 'center center',
  position: 'absolute',
  fontSize: '1.25rem',
  letterSpacing: '0.025rem',
  backgroundColor: themeVars.colors.danger,
  zIndex: 1,
  transform: 'translate(-50%, 0px) rotate(-45deg)',
  height: '2.125rem',
  left: '2.125rem',
  top: '0.875rem',
  width: '18.75rem',
});

export const planDetails = style({

});

export const planImgWrapper = style({
  display: 'flex',
  justifyContent: 'center',
  paddingTop: '0.25rem',
});
export const planImgBox = style({
  width: '100%',
  maxWidth: '5rem',
  aspectRatio: '1/1',
});

export const planImage = style({
  width: '100%',
  objectFit: 'contain',
});
export const planTitle = style({
  paddingTop: '.625rem',
  fontWeight: 700,
  fontSize: '1.75rem',
  lineHeight: '140%',
  letterSpacing: '-.02em',
  textAlign: 'center',
});
export const planSubtitle = style({
  padding: '.5625rem 0 .8125rem',
  fontSize: '1rem',
  lineHeight: '100%',
  textAlign: 'center',
  letterSpacing: '-.06em',
});
export const planContentWrapper = style({
  display: 'grid',
  backgroundColor: '#f9f9f9',
  borderTop: `.0625rem solid ${themeVars.colors.gray2}`,
  borderBottom: `.0625rem solid ${themeVars.colors.gray2}`, 
});
export const planContentBox = style({
  borderBottom: `.0625rem dashed ${themeVars.colors.gray3}`,
  padding: '.75rem 0',
  textAlign: 'center',
  fontSize: '1rem',
  lineHeight: '100%',
  letterSpacing: '-.01em',
});
export const planPrice = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '1.5rem',
  lineHeight: '140%',
  letterSpacing: '-.02em',
  fontWeight: 600,
  color: themeVars.colors.danger,
  padding: '.5625rem 0 0',
  gap: '0.625rem',
});
export const planPrice2 = style({
  fontSize: '1.125rem',
  lineHeight: '100%',
  letterSpacing: '-.01em',
  fontWeight: 500,
  color: themeVars.colors.gray2, 
  textDecoration: 'line-through',
});
export const planFinalPrice = style({
  fontSize: '2rem',
  letterSpacing: '-.02em',
  fontWeight: 500,
  textAlign: 'center',
  lineHeight: '100%',
  paddingTop: '.0625rem',
});

export const planInput = style({
  display: 'none',
});
export const selectButton = recipe({
  base:{
    borderRadius: '.25rem',
    overflow: 'hidden',
    display: 'block',
    width: '100%',
    height: '3.125rem',
    textAlign: 'center',
    fontSize: '1.125rem',
    padding: '.8125rem',
    boxSizing: 'border-box',
    fontWeight: 500,
    position: 'relative',
    transition: 'background-color .15s ease',
    marginTop: '1.25rem',
  },
  variants: {
    isSelected: {
      true:{
        backgroundColor: themeVars.colors.danger,
        color: themeVars.colors.white,
        
      },
      false:{
        backgroundColor: themeVars.colors.gray5,
        color: themeVars.colors.gray2,
      }
    }
  },
  defaultVariants: {
    isSelected: false,
  }
});
