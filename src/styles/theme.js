import { createTheme, responsiveFontSizes } from "@material-ui/core/styles";
import { red, blue } from "@material-ui/core/colors";

const theme = createTheme({
  components: {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          color: "yellow",
          backgroundColor: "red",
        },
      },
    },
  },
  props: {
    MuiButton: {
      disableElevation: false,
    },
  },
  typography: {
    fontFamily: [
      "Roboto",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    overline: {
      fontSize: "1.1rem",
      letterSpacing: ".16rem",
      fontWeight: 700,
      lineHeight: 1.6,
    },
    h1: {
      fontWeight: 700,
      fontSize: "4.5rem",
    },
    h2: {
      fontSize: "3rem",
      fontWeight: 700,
    },
    h3: {
      fontSize: "2.5rem",
      fontWeight: 700,
    },
    body1: {
      fontSize: "1.2rem",
      lineHeight: 1.5,
    },
    body2: {
      fontSize: "1.08rem",
      lineHeight: 1.25,
    },
  },
  palette: {
    primary: {
      light: "#d8c4b2",
      lighter: "#f0dfd3",
      main: "#bda997",
      dark: "#a6917e",
      offwhite: "#f9f7f5",
      offwhite_dark: "#f7f2ed",
      offwhite_light: "#faf9f7",
      darker: "#635344",
    },
    secondary: {
      lightest: "#e3eafa ",
      lighter: "#677fb5",
      light: "#485e92",
      main: "#2c3957",
      dark: "#27324b",
      darker: "#171d2b",
    },
    lightblue: {
      light: "#389fff",
      main: "#107de3",
      dark: "#255fd6",
      darker: "#1749b0",
    },
    blue: {
      light: "#0952ab",
      main: "#054899",
      dark: "#043570",
      muted: {
        light: "#4f80b0",
        main: "#43709c",
        dark: "#365a7d",
      },
    },
    grey: {
      light: "#fafafa",
      main: "#f7f7f7",
      dark: "#f0f0f0",
      darker: "#d1d1d1",
      darkest: "#bababa",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#fff",
    },
    text: {
      primary: "#1d263b",
      secondary: "#293552",
      disabled: "#555c63",
    },
  },
});

const Turnkey = responsiveFontSizes(theme);

export default Turnkey;
