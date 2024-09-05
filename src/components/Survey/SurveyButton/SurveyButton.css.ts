import { themeVars } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const surveyButtonContainer = style({
  display: "flex",
  flexDirection: 'column',
  gap: '0.875rem',
});
export const hiddenInputStyle = style({
  display: 'none',
});
export const subTextStyle = style({
  fontSize: themeVars.fontSize.s,
  color: themeVars.colors.gray1,
  lineHeight: '1.2',
});

export const buttonStyle = recipe({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    borderRadius: '2.03125rem',
    padding: '10px 20px',
    border: `0.125rem solid ${themeVars.colors.gray3}`,
    minHeight: '2.625rem',
    fontSize: themeVars.fontSize.m,
    fontWeight: '600',
    transition: 'border-color 0.2s, color 0.2s',
    cursor: 'pointer',
  },
  variants: {
    checked: {
      true: {
        borderColor: themeVars.colors.danger,
        color: themeVars.colors.danger,
      },
      false: {
        borderColor: themeVars.colors.gray3,
        color: themeVars.colors.black,
      },
    },
  },
  defaultVariants: {
    checked: false,
  },
});