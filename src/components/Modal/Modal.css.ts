import { style } from "@vanilla-extract/css";
import { themeVars } from "@/styles/theme.css";

export const modalOverlay = style({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
});

export const modalContent = style({
  backgroundColor: themeVars.colors.white,
  padding: "2rem",
  borderRadius: "0.5rem",
  boxShadow: "0 0 1rem rgba(0, 0, 0, 0.3)",
  position: "relative",
  maxWidth: "500px",
  width: "90%",
});

export const closeButton = style({
  position: "absolute",
  top: "0.5rem",
  right: "0.5rem",
  fontSize: "1.5rem",
  border: "none",
  background: "none",
  cursor: "pointer",
});
