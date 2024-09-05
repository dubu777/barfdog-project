import { style } from "@vanilla-extract/css";
import { themeVars } from "./theme.css";

const flexColumn = style({
  display: "flex",
  flexDirection: "column",
});

const flexRowAllCenter = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const flexColumnAllCenter = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const flexColumnCenter = style({
  display: "flex",
  alignItems: "center",
});

const flexRowCenter = style({
  display: "flex",
  justifyContent: "center",
});

const surveyTitle = style({
  fontSize: themeVars.fontSize.l,
  fontWeight: '600',
  paddingBottom: '1.875rem',
})

const surveyInputWrapper = style({
  display: "flex",
  flexDirection: "column",
  alignItems: 'center',
})

const notification = style({
  fontSize: themeVars.fontSize.s,
  lineHeight: '1.6',
  letterSpacing: '-0.01em',
  color: themeVars.colors.danger,
  textAlign: "center",
  marginTop: "1.875rem",
})


export {
  flexColumn,
  flexColumnAllCenter,
  flexRowAllCenter,
  flexColumnCenter,
  flexRowCenter,
  surveyTitle,
  surveyInputWrapper,
  notification
};
