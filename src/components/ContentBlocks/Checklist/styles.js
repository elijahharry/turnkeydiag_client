import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  section: {
    position: "relative",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    paddingTop: theme.spacing(6),
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  checks: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
    flexWrap: "wrap",
  },
  check: {
    height: "100%",
    flexShrink: 1.1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`,
    color: "#fff",
    margin: theme.spacing(1.5),
    borderRadius: 40,
    boxShadow: theme.shadows[3],
    transition: "all 300ms",
    position: "relative",
    "& svg": {
      zIndex: 1,
      marginRight: theme.spacing(1),
    },
    "&:hover": {
      transform: "scale(1.05)",
    },
  },
  arrow_circle: {
    width: 19,
    height: 19,
    borderRadius: "50%",
    position: "absolute",
    left: theme.spacing(2.1),
    marginTop: 3,
    zIndex: 0,
  },
  background: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    zIndex: -1,
  },
  primary: {
    color: theme.palette.primary.main,
  },
  secondary: {
    color: theme.palette.secondary.main,
  },
  secondary_light: {
    color: theme.palette.secondary.light,
  },
  text_default: {
    marginBottom: theme.spacing(2),
  },
  desc: {
    maxWidth: "60%",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "80%",
    },
    [theme.breakpoints.down("xs")]: {
      maxWidth: "100%",
    },
  },
}));
