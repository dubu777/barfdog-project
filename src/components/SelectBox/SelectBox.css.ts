import { style, globalStyle } from "@vanilla-extract/css";
import { themeVars } from "@/styles/theme.css";

export const selectBoxContainer = style({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
});

export const selectInputWrapper = style({
  position: 'relative',
  display: 'flex',
  justifyContent: 'space-between',
  width: '7.5rem',
  height: '2.1875rem',
});

export const inputField = style({
  fontSize: themeVars.fontSize.m,
  textAlign: 'center',
  width: '100%',
  height: '100%',
  border: '0',
  outline: '0',
  padding: '4px 8px',
  borderBottom: `0.0625rem solid ${themeVars.colors.gray3}`,
  cursor: 'pointer',
});

export const frontWord = style({
  fontSize: themeVars.fontSize.m,
  marginRight: '0.325rem',
  minWidth: '3rem',
});

export const unit = style({
  position: 'absolute',
  fontSize: themeVars.fontSize.m,
  right: '0',
  top: '50%',
  transform: 'translateY(-50%)',
});

export const optionsContainer = style({
  position: 'absolute',
  left: '0',
  top: '100%',
  width: '100%',
  zIndex: '3',
  borderRadius: '0.5rem',
  fontSize: themeVars.fontSize.m,
  boxShadow: '0 0 1.5625rem rgba(0, 0, 0, 0.1)',
  backgroundColor: themeVars.colors.white,
});



export const optionsWrapper = style({
  maxHeight: '12.5rem',
  overflowY: 'scroll',
  paddingBottom: '0.625rem',
});

globalStyle(`${optionsWrapper}::-webkit-scrollbar`, {
  display: "none",
});

export const option = style({
  transitionTimingFunction: 'ease',
  transitionDuration: '0.3s',
  transitionProperty: 'background, color',
  padding: '0.25rem 0.9375rem',
  height: '2.375rem',
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  selectors: {
    '&[data-selected="true"]': {
      backgroundColor: themeVars.colors.gray3,
    },
    '&:hover': {
      backgroundColor: themeVars.colors.gray4,
    },
  },
});