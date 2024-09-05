import { defineProperties } from "@vanilla-extract/sprinkles";

export const responsiveProperties = defineProperties({
  conditions: {
    mobile: { "@media": `(max-width: 650px)` },
    tablet: { "@media": `(min-width: 650px)` },
    desktop: { "@media": `(min-width: 1024px)` },
  },
  defaultCondition: "mobile",
  
  properties: {
    display: ["flex", "block", "none"],
    flexDirection: ["row", "column"],
    justifyContent: ["center", "flex-start", "flex-end"],
    alignItems: ["center", "flex-start", "flex-end"],
    gap: ["0", "1.25rem", "1.5625rem"],
  },

  shorthands: {
    layout: ["display", "flexDirection", "justifyContent", "alignItems"],
  },
});