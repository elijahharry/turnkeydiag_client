import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  section: {
    position: "relative",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  background: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
  },
  background_overlay: {
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

  chips: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(1),
    flexWrap: "wrap",
    maxWidth: "80%",
    [theme.breakpoints.down("lg")]: {
      maxWidth: "100%",
    },
  },
  chip: {
    height: "100%",
    flexShrink: 1.1,
    display: "flex",
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`,
    color: "#fff",
    margin: theme.spacing(1.5),
    borderRadius: 40,
    boxShadow: theme.shadows[3],
    transition: "all 300ms",
    position: "relative",
    cursor: "pointer",
    "& p": {
      zIndex: 1,
    },
    "& svg": {
      zIndex: 1,
      marginRight: theme.spacing(1),
    },
    "&:hover": {
      transform: "scale(1.03)",
    },
  },
  chip_selected: {
    transform: "scale(1.08)",
    "&:hover": {
      transform: "scale(1.1)",
    },
    "&:before": {
      content: "''",
      width: "100%",
      height: "100%",
      position: "absolute",
      top: 0,
      left: 0,
      backgroundColor: "#000",
      zIndex: 0,
      animation: "$opacity 300ms",
      opacity: 0.4,
    },
  },
  "@keyframes opacity": {
    "0%": {
      opacity: 0,
    },
    "100%": {
      opacity: 0.4,
    },
  },
  selected_desc: {
    margin: `${theme.spacing(1.4)}px 0`,
    "& ul": {
      margin: 0,
    },
  },
  selected_content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: "80%",
    padding: theme.spacing(2),
    borderRadius: 20,
    backgroundColor: "#fff",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "90%",
    },
    [theme.breakpoints.down("xs")]: {
      maxWidth: "98%",
    },
  },
  selected_q: {
    marginTop: theme.spacing(0.8),
    marginBottom: theme.spacing(1.5),
    fontWeight: 500,
    [theme.breakpoints.down("md")]: {
      marginLeft: 0,
    },
  },
  title: {
    margin: `${theme.spacing(0.5)}px 0`,
  },
  border_secondary_light: {
    borderBottom: `3px solid ${theme.palette.secondary.light}`,
  },
  border_secondary: {
    borderBottom: `3px solid ${theme.palette.secondary.main}`,
  },
  border_primary: {
    borderBottom: `3px solid ${theme.palette.primary.main}`,
  },
  icon_fill: {
    width: "1.2rem",
    height: "1.2rem",
    borderRadius: "50%",
    position: "absolute",
    left: 18,
  },
}));
