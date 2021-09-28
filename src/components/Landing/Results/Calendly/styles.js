import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  calendly: {
    cursor: "pointer",
    position: "relative",
    height: 550,
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    transition: "transform 800ms",
    borderBottom: "2px solid #f3f3f3",
    backgroundColor: "#fcfcfc",
    borderRadius: "5px 5px 0 0",
    "&:hover": {
      transform: "scale(1.03)",
    },
    "& img": {
      filter: "brightness(98%)",
      transition: "filter 800ms",
      "&:hover": {
        filter: "brightness(97%) grayscale(40%) brightness(105%)",
      },
    },
  },
  button_round: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    zIndex: 1,
    color: "#fff !important",
    padding: 30,
    transition: "transform 400ms",
    borderRadius: "50%",
    "& svg": {
      width: 100,
      height: 100,
      transition: "transform 400ms",
    },
    "&:hover": {
      transform: "scale(1.4)",
      "& svg": {
        transform: "scale(1.2)",
      },
    },
  },
}));
