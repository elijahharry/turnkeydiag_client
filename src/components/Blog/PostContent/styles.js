import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  blog: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    position: "relative",
    zIndex: 5,
  },
  holder: {
    marginTop: -70,
    borderRadius: 20,
    padding: theme.spacing(5),
    backgroundColor: "#fff",
    boxShadow: theme.shadows[2],
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(2),
    },
  },
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    // textAlign: "left !important",
    "& p": {
      ...theme.typography.body1,
      margin: `${theme.spacing(0.8)}px 0`,
    },
    "& h1": {
      ...theme.typography.h1,
      margin: `${theme.spacing(1.4)}px 0`,
    },
    "& h2": {
      ...theme.typography.h2,
      margin: `${theme.spacing(1.3)}px 0`,
    },
    "& h3": {
      ...theme.typography.h3,
      margin: `${theme.spacing(1.2)}px 0`,
    },
    "& h4": {
      ...theme.typography.h4,
      margin: `${theme.spacing(1.1)}px 0`,
    },
    "& h5": {
      ...theme.typography.h5,
      margin: `${theme.spacing(1)}px 0`,
    },
    "& h6": {
      ...theme.typography.h6,
      margin: `${theme.spacing(0.9)}px 0`,
    },
    "& figure": {
      marginBlock: 0,
      marginInline: 0,
      padding: `${theme.spacing(3)}px 0`,
      pointerEvents: "none",
    },
    "& img": {
      borderRadius: 5,
      // border: `3px solid #c3c3c3`,
      // boxShadow: theme.shadows[3],
      pointerEvents: "none",
      width: "100%",
      objectFit: "contain",
      height: "auto",
      maxHeight: 500,
    },
  },
}));
