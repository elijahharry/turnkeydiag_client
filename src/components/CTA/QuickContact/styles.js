import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  contact: {
    padding: "50px 0 50px 0",
    position: "relative",
  },
  // all background related
  background: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: -1,
  },
  overlay: {
    zIndex: 1,
    position: "absolute",
    width: "100%",
    height: "105%",
    backdropFilter: "contrast(180%) grayscale(100%)",
  },
  gradient: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    opacity: 0.9,
  },
  background_img: {
    objectPosition: "top",
    animation: "$image-fit 60s infinite",
  },
  "@keyframes image-fit": {
    "0%": {
      objectPosition: "top center",
    },
    "50%": {
      objectPosition: "bottom center",
    },
    "100%": {
      objectPosition: "top center",
    },
  },

  image: {
    zIndex: -2,
  },
  background_text: {
    color: "#fff",
  },
  border: {
    position: "absolute",
    left: 0,
    width: "100%",
    height: "10px",
    zIndex: 2,
  },
  border_top: {
    top: 0,
  },
  border_bottom: {
    bottom: 0,
  },
  // end background
  paper: {
    width: 800,
    padding: "8px 20px 20px 20px",
    height: "auto",
    margin: "10px 0 10px 0",
    boxShadow: theme.shadows[3],
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  guide: {
    width: 750,
    padding: "20px 20px 20px 20px",
    [theme.breakpoints.down("sm")]: {
      padding: "20px 0 20px 0",
      width: "100%",
    },
  },
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "stretch",
  },
  fields: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "stretch",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  input: {
    margin: "0 0 15px 0",
  },
  left: {
    marginRight: 15,
    [theme.breakpoints.down("xs")]: {
      marginRight: 0,
    },
  },
  right: {
    marginLeft: 15,
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
  feedback: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  feedback_icon: {
    marginRight: 10,
  },
  button_success: {
    color: "#fff !important",
    backgroundColor: `${theme.palette.secondary.main} !important`,
  },
}));
