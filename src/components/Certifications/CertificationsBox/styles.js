import { makeStyles } from "@material-ui/core/styles";
import gradients from "@styles/gradients";

export default makeStyles((theme) => ({
  section: {
    position: "relative",
  },
  badges: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    zIndex: 5,
    bottom: 1,
    left: 1,
    width: "100%",
    backgroundColor: "#fff",
    position: "relative",
    zIndex: 6,
    marginTop: -75,
    borderRadius: 5,
    height: 120,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    overflow: "hidden",
    boxShadow: theme.shadows[4],
    borderBottom: `5px solid ${theme.palette.secondary.main}`,
    [theme.breakpoints.down("sm")]: {
      marginTop: 0,
      flexWrap: "wrap",
      height: 240,
    },
  },
  badge: {
    height: 100,
    position: "relative",
    display: "flex",
    justifyContent: "center",
    padding: 10,
    flexBasis: "20%",
    [theme.breakpoints.down("sm")]: {
      flexBasis: "33%",
    },
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
