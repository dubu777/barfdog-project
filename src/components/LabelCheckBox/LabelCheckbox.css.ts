import { themeVars } from "@/styles/theme.css";
import { recipe } from "@vanilla-extract/recipes";

export const checkboxContainer = recipe({
  base: {
    display: "inline-flex",
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: '1.875rem',
    maxWidth: '20rem',
  },
  variants: {
    type: {
      single: {
        width: '100%',
        alignItems: 'center',
      },
      group: {
        width: "20%",
      }
    }
  },
  defaultVariants: {
    type: 'group',
  }
  
});
export const checkBox = recipe({
  base: {
    appearance: "none",
    borderRadius: "50%",
    fontSize: themeVars.fontSize.s,
    width: "1.25rem",
    height: "1.25rem",
    border: `0.0625rem solid ${themeVars.colors.gray3}`,
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    outline: "none",
    ":before": {
      content: '""',
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      borderRadius: "50%",
      width: "50%",
      height: "50%",
      zIndex: "2",
      backgroundColor: themeVars.colors.white,
      transition: "background-color 0.2s ease",
    },
  },
  variants: {
    isChecked: {
      true: {
        borderColor: themeVars.colors.danger,
        ":after": {
          content: '""',
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "100%",
          height: "100%",
          backgroundColor: themeVars.colors.danger,
          zIndex: "1",
          borderRadius: "50%",
        },
      },
      false: {
        borderColor: themeVars.colors.gray2,
      },
    },
    type: {
      single: {
        marginRight: '0.6875rem',
      },
      group: {
        marginBottom: "1rem",
      },
    },
  },
  compoundVariants: [
    {
      variants: {
        isChecked: false,
        type: "single",
      },
      style: {
        borderColor: themeVars.colors.gray3,
        ":after": {
          content: '""',
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "100%",
          height: "100%",
          backgroundColor: themeVars.colors.gray3,
          zIndex: "1",
          borderRadius: "50%",
        },
      }
    }
  ]
});

export const CheckBoxLabel = recipe({
  base: {
    display: "inline-flex",
    fontSize: "1rem",
    cursor: "pointer",
    justifyContent: 'center',
    alignItems: "center",
    maxWidth: "20rem",
  },
  variants: {
    type: {
      single: {
      },
      group: {
        flexDirection: "column",
      }
    }
  },
  defaultVariants: {
    type: 'single'
  }
})


