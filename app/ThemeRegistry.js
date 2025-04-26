"use client";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme({
  typography: {
    fontFamily:
      "var(--font-urbanist), var(--font-geist-sans), Arial, sans-serif",
  },
  palette: {
    background: {
      default: "#EDF7F7",
      paper: "#EDF7F7",
    },
  },
});

export default function ThemeRegistry({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
