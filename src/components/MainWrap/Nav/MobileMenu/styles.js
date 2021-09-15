import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  icon_menu: {
    width: "2.5rem",
    height: "2.5rem",
  },
  logo: {
    width: "80%",
  },
  drawer: {
    padding: 20,
    width: "80vw",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    color: "#000",
  },
  menu: {
    width: "100%",
  },
  panels: {
    paddingLeft: 20,
  },
  panels_avatar: {
    width: 35,
    height: 35,
  },

  img: {
    position: "relative",
    width: "100%",
    minHeight: 400,
    height: "100%",
    borderRadius: 5,
    overflow: "hidden",
    [theme.breakpoints.down("sm")]: {
      minHeight: 300,
      width: "90vw",
    },
  },
  avatar: {
    width: 55,
    height: 55,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    borderRadius: "50%",
    position: "relative",
    marginRight: theme.spacing(2),
    "& svg": {
      width: 30,
      height: 30,
      color: "#fff",
    },
  },
  avatar_sm: {
    width: 45,
    height: 45,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    borderRadius: "50%",
    position: "relative",
    marginRight: theme.spacing(2),
  },
  avatar_back: {
    position: "absolute",
    width: 55,
    height: 55,
    top: 0,
    left: 0,
    zIndex: -1,
    "& img": {
      filter: "brightness(60%)",
    },
  },
}));
