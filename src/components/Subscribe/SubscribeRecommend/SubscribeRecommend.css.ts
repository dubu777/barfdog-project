import { themeVars } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";


export const SuscribeContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  padding: "5rem 0 9.375rem",
  '@media': {
    'screen and (max-width: 500px)': {
      paddingTop: "5rem",
    },
  },
});
export const SuscribeTitle = style({
  fontSize: themeVars.fontSize.xxl,
  color: themeVars.colors.black,
  letterSpacing: "-0.02em",
  textAlign: "center",
  lineHeight: "1.4",
  paddingBottom: "3.125rem",
  fontWeight: '700',
  '@media': {
    'screen and (max-width: 500px)': {
      fontSize: '1.5rem',
      paddingBottom: "1.325rem",
    },
  },
});
export const SuscribeResultWrapper = style({
  display: "flex",
  justifyContent: "center",
});


export const SuscribeResultBox = style({
  display: 'grid',
  gridTemplateColumns: '16.25rem 28.5rem',
  gridTemplateAreas: `
    "grid_left result_title"
    "grid_left grid_right"
  `,
  justifyContent: 'space-between',
  columnGap: '2.5rem',
  '@media': {
    'screen and (max-width: 800px)': {
      columnGap: '0',
      display: 'grid',
      gridTemplateAreas: `
        "result_title"
        "grid_left"
        "grid_right"
      `,
      gridTemplateColumns: '1fr',
      rowGap: '1.875rem',
    },
  },
});

export const SuscribeResultLeft = style({
  gridRow: '1 / span 2',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  boxShadow: '0 0 1.5625rem rgba(0, 0, 0, 0.15)',
  paddingBottom: '0.925rem',
  gridArea: 'grid_left',
  '@media': {
    'screen and (max-width: 500px)': {
      gridRow: '2 / span 1',
      margin: '0 auto',
    },
  },
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
  gridArea: 'result_title',
  '@media': {
    'screen and (max-width: 800px)': {
      flexDirection: 'column',
      alignItems: 'center',
      gap: '0.125rem',
    },
    'screen and (max-width: 500px)': {
      fontSize: '1.25rem',
    },
  },
});


export const resultTextWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  width: '100%',
  gap: '0.187rem',
  // justifyContent: 'space-between',
  // '@media': {
  //   'screen and (max-width: 1100px)': {
  //     flexDirection: 'column',
  //     justifyContent: 'center',
  //     gap: '0.625rem',
      
  //   },
  //   'screen and (max-width: 900px)': {
  //     flexDirection: 'row',
  //     justifyContent: 'space-between',
  //   },
  // },
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
export const resultNotification = style({
  fontSize: "1rem",
  paddingTop: '0.3125rem',
  letterSpacing: "-0.01em",
  fontWeight: 400,
  color: themeVars.colors.gray2,
  textAlign: 'right',
});
export const resultSubtitle = style({
  fontSize: "0.9375rem",
  lineHeight: "100%",
  letterSpacing: "-0.01em",
  fontWeight: 500,
  color: themeVars.colors.gray2,
});




export const resultTextOneWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  gap: '0.225rem',
})




export const SuscribeRightContenteWrapper = style({
  display: 'grid',
  gridTemplateColumns: '7fr 3fr',
  justifyContent: 'space-between',
  borderTop: '.125rem solid black',
  borderBottom: '.125rem solid black',
  rowGap: '.5rem',
  columnGap: '1.25rem',
  padding: '1rem 0',
  gridArea: 'grid_right',
});
export const SuscribeResultImgBox = style({
  width: '16.25rem',
  aspectRatio: '1/1',
});
export const SuscribeResultImgText = style({
  fontSize: '1.25rem',
  lineHeight: '100%',
  letterSpacing: '-0.01em',
  fontWeight: 800,
  padding: '0.825rem 0 0.625rem',
});

export const SuscribeText = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  textAlign: "left",
  fontSize: "1.25rem",
  letterSpacing: "-.01em",
  fontWeight: 400,
});
export const SuscribeAmountText = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  lineHeight: '1.4',
  fontSize: "1.75rem",
  letterSpacing: "-.02em",
  textAlign: "right",
  color: themeVars.colors.danger,
  fontWeight: 600,
  paddingBottom: '0.125rem',
  '@media': {
    'screen and (max-width: 600px)': {
      fontSize: "1.25rem",
    },
  },
});








export const statisticsTopBox = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "33%",
  gap: "1.875rem",
});





export const statisticsTopContainer = style({
  gridArea: "top",
  padding: "2.625rem 4.0625rem",
  boxShadow: "0 0 1.25rem rgba(69, 69, 83, 0.08)",
  borderRadius: "1.5rem",
});

export const statisticsTopWrapper = style({
  display: "flex",
});

export const statisticsTitle = style({
  fontSize: themeVars.fontSize.l,
  fontWeight: 700,
  letterSpacing: "-0.01em",
  textAlign: "center",
  marginBottom: "2.5rem",
});