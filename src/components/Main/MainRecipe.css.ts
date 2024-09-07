import { themeVars } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';


export const recipeContainer = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '7.5rem 0 10.625rem',
});
export const buttonBox = style({

  display: 'flex',
  justifyContent: 'center',
});
export const buttonBox2 = style({

  display: 'flex',
  justifyContent: 'center',
});
export const buttonBox3 = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '3.75rem',
  width: '15rem',
  color: '#fff',
  fontSize: '1rem',
  fontWeight: 600,
  boxSizing: 'border-box',
  textAlign: 'center',
  backgroundImage: "url('/sub.svg')",  
  backgroundRepeat: 'no-repeat',
  backgroundSize: '15rem 3.75rem',
  backgroundPosition: '50%',
});

export const recipeSection = style({
  textAlign: 'center',
  width: '1200px',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  '@media': {
    'screen and (max-width: 1300px)': {
      width: '800px',
    },
    'screen and (max-width: 940px)': {
      width: '600px',
    },
    'screen and (max-width: 650px)': {
      width: '300px',
    },
  },

});

export const recipeTopTitle = style({
  fontSize: '1.75rem',
  lineHeight: '140%',
  letterSpacing: '-.02em',
  textAlign: 'center',
  paddingBottom: '0.825rem',
  fontWeight: 600,
  '@media': {
    'screen and (max-width: 650px)': {
      paddingBottom: '1.375rem',
      fontSize: '1.5rem',
      fontWeight: 700,
    },
  },
});
export const recipeTopSubtitle = style({
  fontSize: '1rem',
  lineHeight: '100%',
  letterSpacing: '-.01em',
  textAlign: 'center',
  color: themeVars.colors.gray2,
  fontWeight: 600,
});
export const swiperWrapper = style({
  maxWidth: '100%',
  margin: '1.875rem auto 0',
  maxHeight: '600px',
  position: 'relative',
});



export const recipeLabel = style({
  marginBottom: '3rem',
  position: 'relative',
  width: '275px',
  marginRight: '10px',
  padding: '0.625rem',
  cursor: 'pointer',
  transition: 'border-color .15s ease, box-shadow .15s ease',
});



export const selected = style({
  borderColor: '#0070f3',
  boxShadow: '0 0 10px rgba(0, 112, 243, 0.5)',
});
export const inputHide = style({
  display: 'none',
});

export const recipeContent = style({
  position: 'relative',
  width: '16.25rem',
  height: '28.5rem',
  backgroundColor: '#fff',
  boxShadow: '.625rem .625rem 1.875rem rgba(0, 0, 0, .1)',
  padding: '.625rem',
  boxSizing: 'border-box',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const recipeImageWrapper = style({
  position: 'relative',
  width: '15rem',
  height: '15rem',
});

export const recipeTitle = style({
  marginTop: '.5rem',
  marginBottom: '.625rem',
  left: '50%',
  fontSize: '1.5rem',
  fontWeight: 700,
  textAlign: 'center',
});
export const recipeTitle2 = style({
  fontSize: '1.25rem',
  fontWeight: '900',
  color: '#333',
  paddingTop: '0.75rem',
});

export const recipeSubtitle = style({
  fontSize: '1rem',
  fontWeight: 600,
  color: '#666',
});

export const recipeDescription = style({
  fontSize: '1rem',
  fontWeight: 600,
  color: themeVars.colors.gray2,
  lineHeight: '140%',
  paddingTop: '0.6255rem',
  height: '4.625rem',
});
export const recipeNotice = style({
  paddingTop: '.8125rem',
  fontSize: '.9375rem',
  lineHeight: '100%',
  letterSpacing: '-.01em',
  color: themeVars.colors.danger,
  fontWeight: 600,
  textDecorationLine: 'underline',
});

export const checkbox = style({
  display: 'block',
  marginTop: '10px',
  fontSize: '0.85rem',
  color: '#0070f3',
});



export const customPrev = style({
  position: 'absolute',
  top: '50%',
  left: '-60px',  // 왼쪽에 배치
  transform: 'translateY(-50%)',
  cursor: 'pointer',
  borderRadius: '100%',
  width: '3.125rem',
  height: '3.125rem',
  zIndex: 2,
  transition: 'opacity .2s ease',
  opacity: 0.2,
  ':hover': {
    opacity: 0.8,
  },
});


export const customNext = style({
  position: 'absolute',
  top: '50%',
  right: '-60px',  // 오른쪽에 배치
  transform: 'translateY(-50%)',
  cursor: 'pointer',
  borderRadius: '100%',
  width: '3.125rem',
  height: '3.125rem',
  zIndex: 2,
  transition: 'opacity .2s ease',
  opacity: 0.2,
  ':hover': {
    opacity: 0.8,
  },
});

export const selectButton = style({
  color: '#ca1010',
  fontSize: '.875rem',
  fontWeight: 700,
  textAlign: 'center',
  lineHeight: '2.1875rem',
  position: 'absolute',
  bottom: '1.25rem',
  left: '50%',
  transform: 'translateX(-50%)',
  width: '5.9375rem',
  height: '2.1875rem',
  borderRadius: '2rem',
  backgroundColor: '#f9edec',
  cursor: 'pointer',
  transition: 'background-color .1s ease, color .1s ease',
    ':hover': {
      background: themeVars.colors.danger,
      color: themeVars.colors.white
    },
});