"use client";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

// Color palette
const primaryMain = "#023047";
const secondaryMain = "#219EBC";
const accentColor = "#FFB703";
const backgroundLight = "#F8F9FA";
const backgroundDark = "#343A40";
const textLight = "#F8F9FA";
const textDark = "#212529";

let theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: primaryMain,
      contrastText: textLight,
    },
    secondary: {
      main: secondaryMain,
      contrastText: textDark,
    },
    background: {
      default: backgroundLight,
      paper: "#FFFFFF",
      dark: backgroundDark,
    },
    text: {
      primary: textDark,
      secondary: "#495057",
    },
    accent: {
      main: accentColor,
      contrastText: textDark,
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      letterSpacing: "-0.01562em",
    },
    h2: {
      fontWeight: 600,
      letterSpacing: "-0.00833em",
    },
    h3: {
      fontWeight: 600,
      letterSpacing: "0em",
    },
    h4: {
      fontWeight: 600,
      letterSpacing: "0.00735em",
    },
    h5: {
      fontWeight: 600,
      letterSpacing: "0em",
    },
    h6: {
      fontWeight: 600,
      letterSpacing: "0.0075em",
    },
    subtitle1: {
      letterSpacing: "0.00938em",
    },
    subtitle2: {
      letterSpacing: "0.00714em",
    },
    body1: {
      letterSpacing: "0.00938em",
    },
    body2: {
      letterSpacing: "0.01071em",
    },
    button: {
      letterSpacing: "0.02857em",
      textTransform: "uppercase",
    },
    caption: {
      letterSpacing: "0.03333em",
    },
    overline: {
      letterSpacing: "0.08333em",
      textTransform: "uppercase",
    },
  },
  shape: {
    borderRadius: 8,
  },
  transitions: {
    easing: {
      easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
      easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
      easeIn: "cubic-bezier(0.4, 0, 1, 1)",
      sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
    },
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      standard: 300,
      complex: 375,
      enteringScreen: 225,
      leavingScreen: 195,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "50px",
          textTransform: "none",
          fontWeight: 600,
          boxShadow: "none",
          "&:hover": {
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
          },
        },
        containedPrimary: {
          "&:hover": {
            backgroundColor: "#034C6A",
          },
        },
        containedSecondary: {
          "&:hover": {
            backgroundColor: "#1C89A8",
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.08)",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
          transition: "box-shadow 0.3s ease-in-out",
          "&:hover": {
            boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
          },
        },
      },
    },
  },
});

// Apply responsive font sizes
theme = responsiveFontSizes(theme);

export default theme;
