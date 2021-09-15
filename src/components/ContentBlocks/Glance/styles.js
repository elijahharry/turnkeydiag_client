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
    position: "relative",
    zIndex: 1,
  },
  desc: {
    width: "90%",
    padding: `${theme.spacing(1)}px 0`,
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  benefits: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
    flexWrap: "wrap",
  },
  benefit: {
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
  overline: {
    color: theme.palette.secondary.main,
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
  arrow_circle_1: {
    backgroundColor: theme.palette.secondary.dark,
  },
  arrow_circle_2: {
    backgroundColor: theme.palette.secondary.lighter,
  },
  background: {
    position: "absolute",
    width: "100%",
    height: "100%",
    bottom: 0,
    left: 0,
  },
  background_overlay: {
    zIndex: -1,
  },
}));
