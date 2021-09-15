import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  widget: {
    position: "fixed",
    zIndex: 50,
    bottom: "3%",
    right: "3%",
    width: 70,
    height: 70,
    backgroundColor: theme.palette.secondary.main,
    borderRadius: "50%",
    border: `4px solid ${theme.palette.secondary.light}`,
    animation: "$pop-shift 3s infinite",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    transition: "all 500ms",
    boxShadow: theme.shadows[5],
    overflow: "hidden",
    "& svg": {
      width: 32,
      height: 32,
      marginRight: 0,
      transition: "all 500ms",
    },
    "&:hover": {
      width: 220,
      alignItems: "center",
      animation: "none",
      borderRadius: 50,
      "& svg": {
        marginRight: 130,
        height: 38,
        width: 38,
      },
    },
  },
  "@keyframes pop-shift": {
    "0%": {
      transform: "scale(1)",
      boxShadow: theme.shadows[5],
    },
    "40%": {
      transform: "scale(1)",
      boxShadow: theme.shadows[5],
    },
    "50%": {
      transform: "scale(1.15) rotate(9deg)",
      boxShadow: theme.shadows[8],
    },
    "60%": {
      transform: "scale(1.17) rotate(-9deg)",
      boxShadow: theme.shadows[8],
    },
    "70%": {
      transform: "scale(1)",
      boxShadow: theme.shadows[5],
    },
    "100%": {
      transform: "scale(1)",
      boxShadow: theme.shadows[5],
    },
  },
  text: {
    position: "absolute",
    width: 150,
    fontSize: ".85rem",
    transition: "all 500ms",
    fontWeight: 700,
    textTransform: "uppercase",
    letterSpacing: "1.5px",
  },
  text_off: {
    transform: "translateX(200px)",
  },
  text_on: {
    transform: "translateX(40px)",
  },
}));
