import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  secondary_black: {
    background: theme.palette.secondary.main,
    background: `linear-gradient(90deg, ${theme.palette.secondary.main} 0%, #000 100%)`,
  },
  primary: {
    background: theme.palette.primary,
    background: `linear-gradient(90deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
  },
  primary_tilt: {
    background: theme.palette.primary,
    background: `linear-gradient(200deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
  },
  primary_dark_tilt: {
    background: theme.palette.primary,
    background: `linear-gradient(200deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.darker} 100%)`,
  },
  primary_flipped: {
    background: theme.palette.primary,
    background: `linear-gradient(90deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
  },
  primary_vert: {
    background: theme.palette.primary,
    background: `linear-gradient(180deg, ${theme.palette.primary.light} 0%, ${theme.palette.primary.dark} 100%)`,
  },
  primary_vert_transparent: {
    background: theme.palette.primary,
    background: `linear-gradient(180deg, ${theme.palette.primary.light}33 -10%, ${theme.palette.primary.dark} 90%)`,
  },
  primary_light: {
    background: theme.palette.primary,
    background: `linear-gradient(180deg, ${theme.palette.primary.offwhite_light} 0%, ${theme.palette.primary.offwhite} 100%)`,
  },
  primary_white: {
    background: theme.palette.primary,
    background: `linear-gradient(180deg, ${theme.palette.primary.offwhite_light} 0%, ${theme.palette.primary.offwhite} 100%)`,
  },
  transparent_primary: {
    background: theme.palette.primary,
    background: `linear-gradient(90deg, ${theme.palette.primary.main}80 0%, ${theme.palette.primary.dark} 80%)`,
  },
  secondary: {
    background: theme.palette.secondary.main,
    background: `linear-gradient(90deg, ${theme.palette.secondary.light} 0%, ${theme.palette.secondary.dark} 100%)`,
  },
  secondary_light: {
    background: theme.palette.secondary.main,
    background: `linear-gradient(30deg, ${theme.palette.secondary.main} 0%, ${theme.palette.secondary.light} 60%)`,
  },
  secondary_dark: {
    background: theme.palette.secondary.main,
    background: `linear-gradient(-90deg, ${theme.palette.secondary.main} 0%, ${theme.palette.secondary.dark} 100%)`,
  },
  secondary_tilt: {
    background: theme.palette.secondary.main,
    background: `linear-gradient(200deg, ${theme.palette.secondary.light} 0%, ${theme.palette.secondary.dark} 100%)`,
  },
  secondary_vert: {
    background: theme.palette.secondary.main,
    background: `linear-gradient(180deg, ${theme.palette.secondary.light} 0%, ${theme.palette.secondary.dark} 100%)`,
  },
  secondary_vert_light: {
    background: theme.palette.secondary.light,
    background: `linear-gradient(180deg, ${theme.palette.secondary.lighter} 0%, ${theme.palette.secondary.light} 100%)`,
  },
  secondary_vert_dark: {
    background: theme.palette.secondary.main,
    background: `linear-gradient(180deg, ${theme.palette.secondary.main} 0%, ${theme.palette.secondary.dark} 100%)`,
  },
  blue: {
    background: theme.palette.blue.main,
    background: `linear-gradient(90deg, ${theme.palette.blue.dark} 0%, ${theme.palette.blue.light} 100%)`,
  },
  blue_muted: {
    background: theme.palette.blue.muted.main,
    background: `linear-gradient(90deg, ${theme.palette.blue.muted.dark} 0%, ${theme.palette.blue.muted.main} 100%)`,
  },
  blue_transparent: {
    background: theme.palette.secondary,
    background: `linear-gradient(90deg, ${theme.palette.blue.dark} 35%, ${theme.palette.blue.dark}00 100%)`,
  },
  lightblue_dark: {
    background: "#2ea8ea",
    background: `linear-gradient(180deg, ${theme.palette.lightblue.light} 0%, ${theme.palette.lightblue.dark} 100%)`,
  },
  lightblue: {
    background: "#2ea8ea",
    background: `linear-gradient(180deg, ${theme.palette.lightblue.main} 0%, ${theme.palette.lightblue.dark} 100%)`,
  },
  lightblue_white: {
    background: "#2ea8ea",
    background: `linear-gradient(180deg, #c4ddff 0%, #cfe3ff 100%)`,
  },
  lightblue_vert: {
    background: "#2ea8ea",
    background: `linear-gradient(180deg, ${theme.palette.lightblue.light} 0%, ${theme.palette.lightblue.darker} 100%)`,
  },
  white: {
    background: "#fff",
    background: `linear-gradient(180deg, #fff 0%, ${theme.palette.grey.light} 100%)`,
  },
  grey: {
    background: "#000",
    background: `linear-gradient(90deg, #2b2b2b80 0%, #171717 80%)`,
    [theme.breakpoints.down("sm")]: {
      background: `linear-gradient(90deg, #2b2b2b 0%, #171717 80%)`,
    },
  },
  shadows_vert: {
    background: "rgb(0,0,0)",
    background:
      "linear-gradient(0deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0) 10%, rgba(0,0,0,0) 90%, rgba(0,0,0,0.1) 100%)",
  },
}));
