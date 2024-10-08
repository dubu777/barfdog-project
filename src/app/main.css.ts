import { style } from '@vanilla-extract/css';

export const ordererInfoSection = style({
  marginBottom: '0 0 3.125rem',
});

export const ordererInfoTitle = style({
  fontSize: '1.25rem',
  fontWeight: '500',
  marginBottom: '1.875rem',
  textAlign: 'left',
});

export const ordererInfoGridBox = style({
  display: 'grid',
  gridTemplateColumns: '7.5rem 1fr',
  rowGap: '1.2rem',
  fontSize: '1rem',
  justifyContent: 'flex-start',
});


export const ordererInfoValue = style({
  height: '100%',
  textAlign: 'left',
  color: 'black',
});
