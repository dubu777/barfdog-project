// RecipeSelectBox.css.ts
import { themeVars } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const swiperContainer = style({
  width: '100%',
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '20px',
});

export const recipeSlide = style({
  width: '260px',
  marginRight: '20px',
  height: '100%',
});

export const recipeLabel = recipe({
  base: {
  overflow: 'hidden',
  display: 'block',
  padding: '1.875rem 1.25rem 1.25rem;',
  border: `.0625rem solid ${themeVars.colors.white}`,
  borderRadius: '0.75rem',
  width: '100%',
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

export const recipeContent = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '10px',
});

export const recipeImageWrapper = style({
  position: 'relative',
  width: '100%',
  height: '150px',
  overflow: 'hidden',
  borderRadius: '8px',
});

export const recipeTitle = style({
  fontSize: '1.2rem',
  fontWeight: 'bold',
  color: '#333',
});

export const recipeSubtitle = style({
  fontSize: '1rem',
  color: '#666',
});

export const recipeDescription = style({
  fontSize: '0.9rem',
  color: '#999',
});

export const checkbox = style({
  display: 'block',
  marginTop: '10px',
  fontSize: '0.85rem',
  color: '#0070f3',
});
