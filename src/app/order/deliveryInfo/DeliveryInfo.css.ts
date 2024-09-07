import { themeVars } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const wrapperContainer = style({
  position: 'relative',
});


export const deliveryInfoTopContent = style({
  padding: '5rem 0 0.5rem',
});
export const PackageImageSection = style({
  padding: '0 0 4.375rem',
});
export const PackageImage = style({
  width: '100%',
  maxWidth: '35rem',
  aspectRatio: '1/1',
  height: 'auto',
});

export const deliveryInfoTitleWrapper = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});
export const deliveryInfoTitle = style({
  fontSize: '1.375rem',
  fontWeight: '700',
  marginBottom: '1.25rem',
  lineHeight: '1.4',
});

export const deliveryInfoTextRow = style({
  fontSize: '1.25rem',
  marginBottom: '0.5rem',
});

export const deliveryInfoTextHighlight = style({
  fontWeight: '700',
  fontSize: '1.25rem',
});

export const deliveryInfoTextRow3 = style({
  fontSize: '1rem',
  marginTop: '1rem',
  color: '#666',
});

export const deliveryInfoImageBox = style({
  width: '100%',
  textAlign: 'center',
  marginTop: '2rem',
});






export const deliveryInfoMidContent = style({
  marginTop: '2rem',
});
export const deliveryTitle = style({
  fontSize: '1.375rem',
  fontWeight: 700,
  paddingBottom: '1.875rem',
});

export const deliveryInfoMidContentBox = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(5, 1fr);',
  gap: '0.9375rem',
  width: '100%',
  maxWidth: '60rem',
  backgroundColor: '#f1f1f4',
  padding: '0.625rem',
});

export const deliveryInfoMidContentInnerBox = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '3.375rem 0',
});

export const deliveryInfoImage = style({
  display: 'flex',
  // maxWidth: '7.5rem',
  // width: '100%',
  // paddingTop: '60%',
});

export const deliveryInfoMidContentText = style({
  padding: '1.4375rem 0 .9375rem',
  fontSize: '1.25rem',
  letterSpacing: '-.01em',
  fontWeight: 600,
  lineHeight: '140%',
});
export const deliveryInfoMidSubText = style({
  fontSize: '1rem',
  textAlign: 'center',
  lineHeight: '130%',
  letterSpacing: '-.04em',
  color: themeVars.colors.gray2,
});

export const deliveryInfoBtnSection = style({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '2rem 0',
});

export const deliveryInfoLeftBtn = style({
  padding: '1rem 2rem',
  backgroundColor: '#f0f0f0',
  textDecoration: 'none',
  textAlign: 'center',
});

export const deliveryInfoRightBtn = style({
  padding: '1rem 2rem',
  backgroundColor: '#0070f3',
  color: '#fff',
  border: 'none',
  cursor: 'pointer',
});
