import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  primary: {
    backgroundColor: theme.palette.primary.main,
  },
  primary_light: {
    backgroundColor: theme.palette.primary.light,
  },
  primary_lighter: {
    backgroundColor: theme.palette.primary.lighter,
  },
  primary_dark: {
    backgroundColor: theme.palette.primary.dark,
  },
  primary_darker: {
    backgroundColor: theme.palette.primary.darker,
  },
  primary_white: {
    backgroundColor: theme.palette.primary.offwhite_light,
  },
  secondary: {
    backgroundColor: theme.palette.secondary.main,
  },
  secondary_light: {
    backgroundColor: theme.palette.secondary.light,
  },
  secondary_lighter: {
    backgroundColor: theme.palette.secondary.lighter,
  },
  secondary_lightest: {
    backgroundColor: theme.palette.secondary.lightest,
  },
  secondary_dark: {
    backgroundColor: theme.palette.secondary.dark,
  },
  blue: {
    backgroundColor: theme.palette.blue.main,
  },
  blue_muted: {
    backgroundColor: theme.palette.blue.muted.main,
  },
  lightblue_dark: {
    backgroundColor: theme.palette.lightblue.dark,
  },
  lightblue: {
    backgroundColor: theme.palette.lightblue.main,
  },
  lightblue_white: {
    backgroundColor: "#c4ddff",
  },
  white: {
    backgroundColor: "#fff",
  },
  grey: {
    backgroundColor: "#2b2b2b80",
  },
  black: {
    backgroundColor: "#1a1a1a",
  },
  shadows_vert: {
    background: "rgb(0,0,0)",
    background:
      "linear-gradient(0deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0) 10%, rgba(0,0,0,0) 90%, rgba(0,0,0,0.1) 100%)",
  },
}));
