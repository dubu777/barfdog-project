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
export const wrapperBox = style({
  position: 'relative',
  height: '25rem',
  width: '100%',
  "@media": {
    "screen and (max-width: 1200px)": {
      height: '18.75rem',
    },
    "screen and (max-width: 900px)": {
      height: '13.75rem',
    },
    "screen and (max-width: 600px)": {
      height: 'auto',
      width: '100%',
      aspectRatio: '1/1',
    },
  },
});
export const bannerImage = style({
  objectFit: 'cover',
  objectPosition: 'center',
});
export const bannerImageWrapper = style({
  width: '100%',
  height: '100%',
});
export const customSwiper = style({
  position: 'relative',
  height: '25rem',
  width: '100%',
  "@media": {
    "screen and (max-width: 1200px)": {
      height: '18.75rem',
    },
    "screen and (max-width: 900px)": {
      height: '13.75rem',
    },
    "screen and (max-width: 600px)": {
      height: 'auto',
      width: '100%',
      aspectRatio: '1/1',
    },
  },
});
