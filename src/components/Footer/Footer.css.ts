import { style } from "@vanilla-extract/css";

export const footerContainer = style({
  padding: "4.375rem 0 3.75rem",
  backgroundColor: '#f8f8f8',
});
export const footerWrapper = style({
  display: "flex",
  justifyContent: 'center',
  alignItems: 'center',
});
export const innerFooterWrapper = style({
  maxWidth: "120rem",
  width: "75rem",
  display: "flex",
  flexDirection: "column",
  alignItems: 'center',
  justifyContent: 'center',
  paddingBottom: '10rem',
});
