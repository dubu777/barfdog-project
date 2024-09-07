import { themeVars } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const recipeSection = style({
  textAlign: 'center',
  width: '1200px',
  height: '100%',
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
      width: '400px',
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
export const recipeContainer = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});



export const recipeLabel = recipe({
  base: {
  position: 'relative',
  maxWidth: '260px',
  // overflow: 'hidden',
  padding: '1.875rem 1.25rem 1.25rem;',
  border: `.0625rem solid ${themeVars.colors.white}`,
  borderRadius: '0.75rem',
  cursor: 'pointer',
  boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);',
  transition: 'border-color .15s ease, box-shadow .15s ease',
  ':hover': {
    boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  },
},
variants: {
  isSelected: {
    true: {
      borderColor: themeVars.colors.danger,
    },
    false: {}
  },
},
defaultVariants: {
  isSelected: false,
}
});



export const selected = style({
  borderColor: '#0070f3',
  boxShadow: '0 0 10px rgba(0, 112, 243, 0.5)',
});
export const inputHide = style({
  display: 'none',
});

export const recipeContent = style({
  marginBottom: '1.25rem',
});

export const recipeImageWrapper = style({
  position: 'relative',
  width: '100%',
  aspectRatio: '1/1',
  overflow: 'hidden',
});

export const recipeTitle = style({
  fontSize: '1.25rem',
  fontWeight: '900',
  color: '#333',
  paddingTop: '1.25rem',
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
  color: themeVars.colors.gray1,
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

export const selectButton = recipe({
  base:{
    borderRadius: '.25rem',
    overflow: 'hidden',
    display: 'block',
    width: '100%',
    height: '3.125rem',
    textAlign: 'center',
    fontSize: '1.125rem',
    padding: '.8125rem',
    boxSizing: 'border-box',
    fontWeight: 500,
    position: 'relative',
    transition: 'background-color .15s ease',

  },
  variants: {
    isSelected: {
      true:{
        backgroundColor: themeVars.colors.danger,
        color: themeVars.colors.white,
        
      },
      false:{
        backgroundColor: themeVars.colors.gray5,
        color: themeVars.colors.gray2,
      }
    }
  },
  defaultVariants: {
    isSelected: false,
  }
});