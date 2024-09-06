import { themeVars } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const statisticsTopContainer = style({
  gridArea: "top",
  padding: "2.625rem 4.0625rem",
  boxShadow: "0 0 1.25rem rgba(69, 69, 83, 0.08)",
  borderRadius: "1.5rem",
  '@media': {
    'screen and (max-width: 1100px)': {
      padding: "2.625rem 0.625rem",
    },
  },
});
export const statisticsRightChartWrapper = style({
  display: "grid",
  gridTemplateColumns: "minmax(3.125rem, 3.75rem) minmax(6.25rem, 19.375rem)",
  gridTemplateRows: "repeat(4, 1.25rem)",
  rowGap: "1.25rem",
  columnGap: ".625rem",
  alignItems: "center",
});
export const statisticsRightContainer = style({
  gridArea: "t_right",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "2.5rem",
  width: "100%",
  maxWidth: "28.75rem",
  boxSizing: "border-box",
  boxShadow: "0 0 1.25rem rgba(69, 69, 83, 0.08)",
  borderRadius: "1.5rem",
  gap: '2.125rem',
});
export const statisticsLeftContainer = style({
  gridArea: "left",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  maxWidth: "28.75rem",
  boxShadow: "0 0 1.25rem rgba(69, 69, 83, 0.08)",
  borderRadius: "1.5rem",
  '@media': {
    'screen and (max-width: 1100px)': {
      paddingTop: '2.5rem 0',
      gridColumn: 'span 2',
      maxWidth: '100%',
    },
  },
});
export const statisticsBRightContainer = style({
  gridArea: "b_right",
  paddingBlock: "2.5rem",
  width: "100%",
  maxWidth: "28.75rem",
  boxShadow: "0 0 1.25rem rgba(69, 69, 83, 0.08)",
  borderRadius: "1.5rem",
});
export const statisticsLeftWrapper = style({
  display: "flex",
  justifyContent: "center",
  columnGap: ".625rem",
  width: "100%",
  maxWidth: "23.75rem",
  textAlign: "center",
  marginBottom: "1.875rem",
  marginLeft: "2.1875rem",
  marginRight: "2.1875rem",
});

export const statisticsTopWrapper = style({
  display: "flex",
  '@media': {
    'screen and (max-width: 1100px)': {
      display: 'grid',
      gap: '3.75rem',
    },
  },
});
export const statisticsContainer = style({
  display: "flex",
  width: '100%',
  justifyContent: 'center',

});
export const statisticsLeftChatWrapper = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});
export const statisticsTopBox = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "33%",
  gap: "1.875rem",
  '@media': {
    'screen and (max-width: 1100px)': {
      width: "100%",
      gap: "0",
    },
  },
});

export const statisticsLeftChartBox = style({
  width: "100%",
  letterSpacing: "-0.01em",
  lineHeight: "1",
  fontWeight: '700',
  fontSize: themeVars.fontSize.m,
});
export const statisticsBRightWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1.25rem',
  margin: "0 2.1875rem",
});

export const statisticsTitle = style({
  fontSize: themeVars.fontSize.l,
  fontWeight: 700,
  letterSpacing: "-0.01em",
  textAlign: "center",
  marginBottom: "2.5rem",
});







export const resultTextWrapper = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  '@media': {
    'screen and (max-width: 1100px)': {
      flexDirection: 'column',
      justifyContent: 'center',
      gap: '0.625rem',
      
    },
    'screen and (max-width: 900px)': {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  },
})
export const resultTextOneWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  gap: '0.225rem',
})

export const resultTextBox = style({
  display: 'flex',
  gap: '0.625rem',
  '@media': {
    'screen and (max-width: 900px)': {
      flexDirection: 'column',
      justifyContent: 'center',
      gap: '0.125rem',
    },
  },
})





export const resultAmountText = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  fontWeight: 800,
  fontSize: "2rem",
  lineHeight: "140%",
  letterSpacing: "-0.02em",
  color: themeVars.colors.danger,
});

export const resultTitle = style({
  fontSize: "1.25rem",
  lineHeight: "100%",
  letterSpacing: "-0.01em",
  fontWeight: 500,
  color: themeVars.colors.black,
});
export const resultSubtitle = style({
  fontSize: "0.9375rem",
  lineHeight: "100%",
  letterSpacing: "-0.01em",
  fontWeight: 500,
  color: themeVars.colors.gray2,
});














export const statisticsBRightTitle = style({
  textAlign: "center",
  fontSize: "1.25rem",
  lineHeight: "100%",
  letterSpacing: "-.01em",
  fontWeight: 700,
  paddingTop: "2.625rem",
  paddingBottom: "3.75rem",
});
export const statisticsLeftTitle = style({
  fontSize: themeVars.fontSize.l,
  fontWeight: 700,
  letterSpacing: "-0.01em",
  textAlign: "center",
  lineHeight: "1",
  padding: "2.5rem 0 1.25rem",
});
export const statisticsSubtitle = style({
  fontSize: themeVars.fontSize.s,
  fontWeight: 400,
  letterSpacing: "-0.01em",
  textAlign: "center",
  lineHeight: "1",
  paddingTop: "0.4375rem",
});

export const stickBox = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "baseline",
  height: "7.5rem",
  width: "100%",
  columnGap: "1rem",
});
export const horizonStick = style({
  backgroundColor: themeVars.colors.pink2,
  borderRadius: "1.25rem",
  height: '1rem',
});
export const horizonRedStick = style({
  backgroundColor: themeVars.colors.pink1,
  borderRadius: "1.25rem",
  height: '1rem',
});

export const leftStickBox = style({
  display: "flex",
  justifyContent: "center",
  alignItems: 'flex-end',
  height: "11.625rem",
  width: "100%",
  columnGap: "1rem",
  paddingBottom: '1.4375rem',
  // maxHeight: '7.5rem',
});

export const statisticsWrapper = style({
  display: "flex",
  justifyContent: "center",
  gap: "1.3125rem",
  width: "85%",
  maxWidth: "23.75rem",
  paddingBottom: "1.5625rem",
  margin: "0 2.1875rem",
});
export const statisticsLeftBox = style({
  background: themeVars.colors.pink2,
  borderRadius: "1.5rem",
  width: "43%",
  maxWidth: "10rem",
  textAlign: "center",
});
export const statisticsRightBox = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "53%",
  maxWidth: "12.5rem",
  paddingTop: "0.6875rem",
  gap: '0.95rem',
});
export const statisticsRightTitleWrapper = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  maxWidth: "12.5rem",
  gap: '0.625rem',
  fontSize: themeVars.fontSize.m,
});
export const statisticsImageWrapper = style({
  width: "1.5rem",
  aspectRatio: '1/1',
});

export const leftBoxSubtitle = style({
  color: themeVars.colors.gray2,
  letterSpacing: "-0.01em",
  textAlign: "center",
  lineHeight: "1",
  padding: "2.9375rem 0 .625rem",
  fontSize: themeVars.fontSize.m,
});
export const leftBoxText = style({
  fontSize: themeVars.fontSize.xxl,
  color: themeVars.colors.pink1,
  letterSpacing: "-0.02em",
  textAlign: "center",
  lineHeight: "1.4",
  paddingBottom: "3rem",
  fontWeight: '700',
});
export const statisticsRightText = style({
  fontSize: themeVars.fontSize.xxl,
  paddingTop: "0.3125rem",
  fontWeight: '600',
});
export const statisticsRightWrapper = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
});

export const stick = style({
  width: "1rem",
  backgroundColor: themeVars.colors.pink2,
  borderTopLeftRadius: "1.25rem",
  borderTopRightRadius: "1.25rem",
});

export const redStick = style({
  backgroundColor: themeVars.colors.pink1,
});

export const topTextBox = style({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  margin: "auto",
  maxWidth: "9.375rem",
  rowGap: ".625rem",
  fontSize: "1rem",
  lineHeight: "100%",
  letterSpacing: "-.01em",
  '@media': {
    'screen and (max-width: 1100px)': {
      marginTop: '1.875rem',
    },
  },
});

export const textRow = style({
  display: "flex",
  justifyContent: "space-between",
});
export const leftTextRow = style({
  display: "flex",
});

export const leftText = style({
  width: "50%",
  textAlign: "left",
});

export const rightText = style({
  width: "50%",
  textAlign: "right",
  fontWeight: "bold",
});
