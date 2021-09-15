import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  blog: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    paddingTop: theme.spacing(30),
    paddingBottom: theme.spacing(8),
    [theme.breakpoints.down("sm")]: {
      paddingTop: theme.spacing(25),
    },
  },
}));
