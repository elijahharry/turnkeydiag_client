import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  cta: {
    color: "#fff",
  },
  cta_content: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    paddingTop: theme.spacing(1.2),
    paddingBottom: theme.spacing(1.2),
    [theme.breakpoints.down("sm")]: {
      paddingTop: theme.spacing(1.2),
      paddingBottom: theme.spacing(1.2),
    },
  },
  text_light: {
    color: "#fff",
    "& svg": {
      color: "#fff",
    },
  },
  text_dark: {
    color: theme.palette.text.primary,
    "& svg": {
      color: theme.palette.text.primary,
    },
  },
  dropdown_primary: {
    backgroundColor: `${theme.palette.secondary.dark}`,
    border: `1px solid ${theme.palette.primary.main}2D`,
    color: "#fff",
    "& svg": {
      color: "#fff",
      opacity: 1,
    },
  },
  dropdown_transparent: {
    margin: "0 !important",
    paddingLeft: `${theme.spacing(0.8)}px !important`,
    "& svg": {
      opacity: 1,
    },
  },
  dropdown_lightblue: {
    backgroundColor: `${theme.palette.lightblue.main}0D`,
    border: `1px solid ${theme.palette.lightblue.main}2D`,
  },
  dropdown_lightblue: {
    backgroundColor: `${theme.palette.primary.main}0D`,
    border: `1px solid ${theme.palette.lightblue.main}2D`,
  },
  dropdown_default: {
    backgroundColor: "#000000D",
    border: `1px solid #00000014`,
  },
  cta_dropdown: {
    margin: theme.spacing(0.9),
    paddingLeft: theme.spacing(1.2),
    borderRadius: 10,
    "& h6": {
      fontWeight: "bold",
    },
    "& div": {
      "& h6": {
        transition: "border 300ms, transform 300ms",
        [theme.breakpoints.down("xs")]: {
          fontSize: "1.2rem",
        },
      },
      "&:focus": {
        backgroundColor: "#ffffff00 !important",
      },
    },
    [theme.breakpoints.down("sm")]: {
      margin: 0,
    },
  },
  text_default: {
    margin: theme.spacing(0.9),
    [theme.breakpoints.down("sm")]: {
      margin: 0,
    },
  },
  text_first: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  text_second: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  cta_button: {
    letterSpacing: 3,
    // backgroundColor: "#0000000D",
    transition: "letter-spacing 600ms, background-color 600ms",
    "& svg": {
      transition: "transform 600ms",
      marginLeft: theme.spacing(1),
      [theme.breakpoints.down("sm")]: {
        marginLeft: theme.spacing(0),
      },
    },
    "&:hover": {
      letterSpacing: 5,
      "& svg": {
        transform: "scaleX(1.4)",
      },
    },
  },
  button_text: {
    [theme.breakpoints.down(450)]: {
      display: "none",
    },
  },
}));
