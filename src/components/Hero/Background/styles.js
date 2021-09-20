import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  thumbnail: {
    filter: "blur(30px) contrast(125%)",
    transition: "opacity 1000ms, filter 1000ms",
    transform: "scale(1.25)",
    zIndex: 1,
  },
  fit_right: {
    objectFit: "contain",
    objectPosition: "right",
    [theme.breakpoints.down("sm")]: {
      objectPosition: "center",
      objectFit: "cover",
    },
    "& video": {
      objectFit: "contain",
      objectPosition: "right",
      minWidth: "50%",
      [theme.breakpoints.down("sm")]: {
        objectPosition: "center",
        objectFit: "cover",
      },
      [theme.breakpoints.up(1500)]: {
        objectPosition: "center",
        objectFit: "cover",
      },
    },
  },
  fit_center: {
    objectPosition: "center",
    objectFit: "cover",
    "& video": {
      objectPosition: "center",
      objectFit: "cover",
    },
  },
  img: {
    zIndex: 0,
    transition: "filter 800ms",
  },
  hide: {
    opacity: 0,
    transform: "scale(1.25)",
  },
  show: {
    opacity: 1,
    transform: "scale(1.25)",
  },
  blur: {
    filter: "blur(30px)",
  },
  unblur: {
    filter: "blur(0)",
  },
  zoom: {
    animation: "$slow-zoom 90s infinite",
  },
  "@keyframes slow-zoom": {
    "0%": {
      transform: "scale(1)",
    },
    "50%": {
      opacity: 1,
      transform: "scale(1.15)",
    },
    "100%": {
      transform: "scale(1)",
    },
  },
  video: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    right: 0,
    zIndex: 0,
  },
  overlay: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    // backgroundColor: "#000",
    zIndex: 2,
    transition: "backdrop-filter 800ms",
    transform: "scale(1.1)",
    backdropFilter: "blur(0) contrast(150%) grayscale(100%) brightness(80%)",
  },
  overlay_blur: {
    backdropFilter: "blur(5) contrast(150%) grayscale(100%) brightness(80%)",
  },
  overlay_unblur: {
    backdropFilter: "blur(0) contrast(150%) grayscale(100%) brightness(80%)",
    // backdropFilter: "blur(0) sepia(100%) hue-rotate(180deg) brightness(80%)",
  },
}));
