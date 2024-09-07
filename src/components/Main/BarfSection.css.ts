import { style } from '@vanilla-extract/css';



export const premiumSection = style({
  padding: '7.5rem 0 9.375rem',
  position: 'relative',
  height: '51.5rem',
  width: '100%',
});

export const premiumTitle = style({
  display: 'block',
  fontSize: '2rem',
  textAlign: 'center',
  width: '100%',
});

export const gridContainer = style({
  display: 'grid',
  gridTemplateColumns: '1fr',
  position: 'relative',
});

export const imageContainer = style({
  minWidth: '12.5rem',
  width: '28.75rem',
  height: '26.25rem',
  margin: '0 auto',
  transform: 'translateX(-12.5rem)',
});

export const textbox = style({
  textAlign: 'left',
});

export const textList = style({
  listStyle: 'none',
  padding: 0,

});
