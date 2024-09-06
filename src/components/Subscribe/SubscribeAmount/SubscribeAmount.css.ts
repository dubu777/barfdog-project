import { themeVars } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";


export const SubscribeAmountContainer = style({
  padding: '0 0 11rem',

});
export const SubscribeAmountTitle = style({
  fontSize: "1.5rem",
  lineHeight: "140%",
  letterSpacing: "-.02em",
  fontWeight: 600,
  paddingBottom: "3.75rem",
  textAlign: "center",
  gap: '0.5625rem',
});
export const SubscribeAmountsubtitle = style({
  fontSize: "1rem",
  color: themeVars.colors.gray2,
});

export const SubscribePlanBox = style({
  display: "grid",
  columnGap: "1.25rem",
  gridTemplateColumns: "repeat(3, 1fr)",
  justifyContent: "center",
  maxWidth: "62.5rem",
  margin: "0 auto",
});

export const SuscribeRightTitleWrapper = style({
  maxWidth: '26rem',
  fontSize: '1.4rem',
  letterSpacing: '-0.02em',
  lineHeight: '120%',
  fontWeight: 300,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
});
