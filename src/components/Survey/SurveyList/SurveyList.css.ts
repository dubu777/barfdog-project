import { recipe } from "@vanilla-extract/recipes";

export const surveyListContainer = recipe({
  base: {
  },
  variants: {
    type: {
      row: {
        display: 'flex',
        flexDirection: 'row',
        gap: '0.875rem',
      },
      col: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: '0.875rem',
        padding: '0 3.75rem',
      },
      grid: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        justifyContent: 'center',
        columnGap: '1.0625rem',
        rowGap: '0.75rem',
      }
    },
  },
  defaultVariants: {
    type: 'row',
  }
});