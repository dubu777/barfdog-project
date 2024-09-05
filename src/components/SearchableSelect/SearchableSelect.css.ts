import { style } from '@vanilla-extract/css';
import { themeVars } from '@/styles/theme.css';

export const selectWrapper = style({
  position: 'relative',
  width: '22.5rem',
  minWidth: '12.5rem',
});

export const viewer = style({
  cursor: 'pointer',
  width: '100%',
  backgroundColor: '#f1f1f4',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '0.6rem',
  height: '3.125rem',
  marginBottom: '.25rem',
  fontSize: themeVars.fontSize.m,
  boxShadow: 'inset 0px 0px 4px 0px rgba(0, 0, 0, 0.1)',
});

export const optionsContainer = style({
  position: 'absolute',
  left: '50%',
  bottom: '0',
  transform: 'translate(-50%, 100%)',
  width: '22.5rem',
  height: '12.5rem',
  margin: 'auto',
  overflow: 'hidden',
  padding: '0.3125rem',
  backgroundColor: themeVars.colors.white,
  border: `0.0625rem solid ${themeVars.colors.gray3}`,
  borderRadius: '0.25rem',
  zIndex: 10,
  boxShadow: '0 0 1.5625rem rgba(0, 0, 0, 0.1)',
});

export const optionsWrapper = style({
  overflowY: 'scroll',
  height: '8.5375rem',
  '::-webkit-scrollbar': {
    width: '8px',
  },
  '::-webkit-scrollbar-thumb': {
    backgroundColor: themeVars.colors.white,
    border: `0.0625rem solid ${themeVars.colors.gray2}`,
    borderRadius: '10px',
  },

  '::-webkit-scrollbar-track': {
    backgroundColor: themeVars.colors.gray3,
    borderRadius: '10px',
  },
});
export const option = style({
  padding: '0.5rem',
  cursor: 'pointer',
  selectors: {
    '&:hover': {
      backgroundColor: themeVars.colors.gray4,
    },
    '&[data-selected="true"]': {
      backgroundColor: themeVars.colors.danger,
      color: themeVars.colors.white,
    },
  },
});

export const inputStyle = style({
  width: '100%',
  padding: '0.25rem',
  marginBottom: '0.5rem',
  height: '2.75rem',
  outline: '0',
  border: `0.0625rem solid ${themeVars.colors.gray3}`,
  borderRadius: '0.25rem',
  selectors: {
    '&:focus': {
      borderColor: themeVars.colors.danger,
    }
  }
});


