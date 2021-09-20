import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  section: {
    width: "100%",
    position: "relative",
    minHeight: 750,
    [theme.breakpoints.down("xs")]: {
      height: "auto !important",
    },
  },
  container: {
    paddingTop: 50,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    zIndex: 5,
    [theme.breakpoints.down("xs")]: {
      paddingBottom: 110,
      paddingTop: 110,
    },
  },
  text_white: {
    color: "#fff",
  },
  title: {
    maxWidth: 1000,
    marginTop: theme.spacing(1),
    "& span": {
      color: theme.palette.primary.light,
    },
  },
  lightblue: {
    color: theme.palette.primary.main,
  },
  desc: {
    maxWidth: 620,
    fontWeight: 400,
    fontSize: "1.3rem",
    lineHeight: "2.2rem",
  },
  overlay: {
    height: "100%",
    width: "100%",
    position: "absolute",
    zIndex: 1,
    top: 0,
    left: 0,
    opacity: 0.8,
    overflow: "hidden",
  },
  overlay_fill: {
    width: "400vw",
    height: "100%",
    animation: "$fill-slide 10s infinite",
  },
  "@keyframes fill-slide": {
    "0%": {
      transform: "translateX(0px)",
    },
    "50%": {
      transform: "translateX(-200vw)",
    },
    "100%": {
      transform: "translateX(0px)",
    },
  },
  buttons: {
    display: "flex",
    marginTop: theme.spacing(2),
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  button: {
    color: "#fff",
    fontSize: "1rem",
    letterSpacing: 1,
    boxShadow: theme.shadows[5],
    backgroundColor: theme.palette.primary.main,
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
  },
  button_transparent: {
    color: "#fff",
    fontSize: "1rem",
    letterSpacing: 1,
    marginLeft: theme.spacing(2),
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
      marginTop: theme.spacing(1),
    },
  },
}));
