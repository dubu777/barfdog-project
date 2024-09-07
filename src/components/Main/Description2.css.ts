import { style } from '@vanilla-extract/css';



export const barfGoodContainer = style({
  padding: '0 1.25rem',
});

export const barfGoodSection = style({
  padding: '9.375rem 0 8.4375rem',
});

export const inner = style({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gridGap: '1.25rem',
  margin: '0 auto',
  position: 'relative',
  "@media": {
    "screen and (max-width: 1050px)": {
      gridTemplateColumns: '1fr',
      gridGap: '6.5rem',
    },
  },
});

export const leftBox = style({
  display: 'inline-block',
  alignSelf: 'center',
});

export const textBox = style({
  width: '100%',
});
export const text = style({
  fontSize: '1.75rem',
  fontWeight: 700,
  textAlign: 'left',
  lineHeight: '1.4'
});
export const textContent = style({
  fontSize: '1rem',
  marginTop: '2.5rem',
  width: '23.875rem',
  lineHeight: '1.5',
  textAlign:'left',
  "@media": {
    "screen and (max-width: 1050px)": {
      width: '100%',
    },
  },
});

export const rightBox = style({
  display: 'inline-block',
  alignSelf: 'center',
  "@media": {
    "screen and (max-width: 1050px)": {
      margin: '0 auto',
    },
  },
});

export const imgBox = style({
  width: '100%'
});

export const barFood1 = style({
  width: '35rem',
  height: '28.5rem',
  display: 'flex',
  alignItems: 'center',
  "@media": {
    "screen and (max-width: 1050px)": {
      display: 'none',
    },
  },
});
export const barFood = style({
  objectFit: 'cover', 
  width: '100%',
  height: 'auto',
});

export const barFood2 = style({
  width: '20.9375rem',
  height: '39.6875rem',
  display: 'none',
  marginTop: '-3.125rem',
  "@media": {
    "screen and (max-width: 1050px)": {
      display: 'block',
    },
  },
});
export const barFood3 = style({
  objectFit: 'cover', 
  width: '100%',
  height: 'auto',
});

export const imageContainer = style({

});
