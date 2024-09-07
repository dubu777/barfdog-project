import { themeVars } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const wrapperContainerOuter = style({
  padding: '0 1.25rem',
});


export const mainPageBarfraw = style({
  padding: '7.5rem 0',
  position: 'relative',
  ":before": {
    content: '""',
    position: 'absolute',
    top: 0,
    left: '50%',
    transform: 'translateX(-50%)',
    width: '100vw',
    height: '100%',
    backgroundImage: "url('/barfraw.png')",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: '50%',
  },
  '@media': {
    'screen and (max-width: 900px)': {
      ":before": {
        content: 'none',
      },
    },
  },
});

export const mainPageInner = style({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  columnGap: '2.5rem',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '0 auto',
  position: 'relative',
  "@media": {
    "screen and (max-width: 900px)": {
      display: 'block',
    },
  },
});

export const mainPageLeftbox = style({
  position: 'relative',
  width: '100%',
  height: '22.5rem',
  "@media": {
    "screen and (max-width: 900px)": {
      height: '20.9375rem',
    },
  },
});

export const mainPageImageWrap = style({
  display: 'none',
  "@media": {
    "screen and (max-width: 900px)": {
      display: 'block',
    },
  },
});

export const imageContainer = style({

});

export const imageContainer2 = style({
  display: 'block',
  overflow: 'hidden',
  width: 'initial',
  height: 'initial',
  background: 'none',
  opacity: 1,
  border: 0,
  margin: 0,
  padding: 0,
  position: 'absolute',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
});

export const mainPageRightbox = style({
  width: '100%',
  maxWidth: '22.5rem',
  position: 'relative',
  padding: '3.125rem 0 3.125rem 2.5rem',
  ":before": {
    content: '""',
    position: 'absolute',
    top: '50%',
    left: 0,
    transform: 'translateY(-50%)',
    width: '50vw',
    height: '100%',
    backgroundColor: '#fff',
    borderRadius: '1.25rem 0 0 1.25rem',
    opacity: 0.9,
  },
  "@media": {
    "screen and (max-width: 900px)": {
      padding: 0,
      marginTop: '2.5rem',
      width: '100%',
      maxWidth: '100%',
    },
  },
});
export const rightText = style({
  color: themeVars.colors.danger,
  fontSize: '.9375rem',
  fontWeight: 700,
  position: 'relative',
  zIndex: 1,
  height: '100%',
  textAlign: 'left',
    lineHeight: '1.3',
    "@media": {
      "screen and (max-width: 900px)": {
        display: 'none',
      },
    },
});

export const rightTitle = style({
  left: 0,
  fontSize: '1.75rem',
  fontWeight: 700,
  position: 'relative',
  zIndex: 1,
  height: '100%',
  textAlign: 'left',
    lineHeight: '1.5',
    "@media": {
      "screen and (max-width: 900px)": {
        position: 'relative',
        top: 'auto',
        textAlign: 'center',
        padding: '.625rem',
        left: 0,
        fontSize: '1.75rem',
        fontWeight: 700,
        zIndex: 1,
        height: '100%',
      },
    },
});
export const rightContent = style({
  fontSize: '1rem',
  position: 'relative',
  zIndex: 1,
  height: '100%',
  textAlign: 'left',
  lineHeight: '1.6',
  "@media": {
    "screen and (max-width: 900px)": {
      position: 'relative',
      top: 'auto',
      textAlign: 'center',
      padding: '.625rem',
    },
  },
});

export const textStyles = style({
  fontSize: '1.2rem',
  marginBottom: '0.5rem',
});

export const titleStyles = style({
  fontSize: '2rem',
  marginBottom: '1rem',
});

export const descStyles = style({
  fontSize: '1rem',
  lineHeight: '1.5',
});
