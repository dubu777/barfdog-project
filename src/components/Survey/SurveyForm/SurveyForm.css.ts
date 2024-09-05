import { themeVars } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";



export const layoutContainer = style({
  width: '100vw',
  display: 'flex',
  justifyContent: "center",
  alignItems: 'center',
  flexDirection: 'column',
})

export const pageContainer = style({
  width: '100%',
})
export const errorMessageWrapper = style({
  display: "flex",
  flexDirection: 'column',
  alignItems: 'center',
  gap: '0.625rem',
  width: '100%',
  margin: '0.625rem 0 1.95rem 0',
})

export const confirmButtonWrapper = style({
  display: 'flex',
  width: '100%',
  justifyContent: "center",
  alignItems: "center",
})



export const confirmButton = style({
  border: '0',
  backgroundColor: themeVars.colors.danger,
  color: themeVars.colors.white,
  width: '100%',
  maxWidth: '10rem',
  height: '2.75rem',
  fontSize: themeVars.fontSize.m,
  borderRadius: '0.25rem',
})

export const fieldContainer = style({
  display: "flex",
  flexDirection: 'column',
  alignItems: "center",
  justifyContent: "center",
  width: '100%',
  minHeight: "100vh",
  overflowX: "hidden",
  paddingBottom: '5rem',
})

export const fieldTitle = style({
  textAlign: 'center',
  fontWeight: '600',
  fontSize: themeVars.fontSize.l,
  paddingBottom: '30px',
})

export const prevButton = recipe({
  base: {
    display: 'flex',
    alignItems: "center",
    justifyContent: 'center',
    border: `0.0625rem solid ${themeVars.colors.danger}`,
    backgroundColor: themeVars.colors.white,
    color: themeVars.colors.danger,
    boxShadow: '0 0.125rem 0.625rem 0 rgba(0, 0, 0, .1)',
    gap: '0.25rem',
    width: '7.5rem',
    fontSize: themeVars.fontSize.m,
    padding: '1.1875rem 0',
    borderRadius: '0.25rem',
  },
  variants: {
    visible: {
      true: {
      },
      false: {
        opacity: '0',
      }
    }
  },
  defaultVariants: {
    visible: true,
  },
})

export const nextButton = style({
  display: 'flex',
  alignItems: "center",
  justifyContent: 'center',
  border: '0.0625rem solid transparent',
  backgroundColor: themeVars.colors.danger,
  color: themeVars.colors.white,
  boxShadow: '0 0.125rem 0.625rem 0 rgba(0, 0, 0, .1)',
  gap: '0.25rem',
  width: '7.5rem',
  fontSize: themeVars.fontSize.m,
  padding: '1.1875rem 0',
  borderRadius: '0.25rem',
})

export const surveyButtonWrapper = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  maxWidth: '35rem',
  margin: '0 auto',
  width: '100%',
})

