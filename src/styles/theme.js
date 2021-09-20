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
      fontWeight: 7800,
      fontSize: "4.4rem",
      fontFamily: "'Bitter', serif",
    },
    h2: {
      fontSize: "3rem",
      fontWeight: 700,
      fontFamily: "'Bitter', serif",
    },
    h3: {
      fontSize: "2.5rem",
      fontWeight: 700,
      fontFamily: "'Bitter', serif",
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
      lighter: "#fad287",
      light: "#e0bb75",
      main: "#caa45d",
      dark: "#ad8a49",
      darker: "#917033",
      offwhite: "#fff8eb",
      offwhite_dark: "#faf2e3",
      offwhite_light: "#fffefc",
    },
    secondary: {
      lightest: "#3a83d6",
      lighter: "#2562a8",
      light: "#194578",
      main: "#0a2749",
      dark: "#071c36",
      darker: "#030e1c",
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
