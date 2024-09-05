import { themeVars } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const textFieldContainer = style({
  cursor: "pointer",
});


export const textInput = style({
  position: "relative",
  display: "inline-flex",
  alignItems: "center",
  width: "100%",
  maxWidth: "14.125rem",
  fontSize: themeVars.fontSize.m,
  outline: '0',
  border: '0',
  textAlign: 'center',
  '::selection': {
    backgroundColor: themeVars.colors.danger,
    color: themeVars.colors.white, 
  }
});

export const textInputWrapper = style({
  position: "relative",
  display: "flex",
  alignItems: "center",
  width: "100%",
  maxWidth: '22.5rem',
  paddingBottom: '0.5rem',
  marginTop: '1.875rem',
  borderBottom: `0.0625rem solid ${themeVars.colors.gray2}`,
  selectors: {
    '&:focus-within': {
      borderBottomColor: themeVars.colors.danger,
    },
  },
})

export const unitStyle = style({
  marginBottom: "0.2rem",
});
