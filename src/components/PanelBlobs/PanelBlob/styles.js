import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  blurload: {
    filter: "blur(30px) contrast(125%)",
    transition: "opacity 800ms, filter 800ms",
    zIndex: 1,
  },
  img: {
    zIndex: 0,
    transition: "filter 800ms",
  },
  hide: {
    opacity: 0,
    filter: "blur(20px) contrast(110%) scale(100%)",
  },
  show: {
    opacity: 1,
    filter: "blur(5px) contrast(200%) scale(110%)",
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
  panel: {
    display: "flex",
    minHeight: 100,
    minWidth: 200,
    alignItems: "center",
    margin: `${theme.spacing(3)}px ${theme.spacing(3)}px`,
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      justifyContent: "center",
      "& p": {
        textAlign: "center",
        marginTop: theme.spacing(1.5),
      },
    },
    transition: "transform 300ms",
    "&:hover": {
      transform: "scale(1.05)",
    },
  },
  panel_blob: {
    position: "relative",
    width: 80,
    height: 80,
    borderRadius: "50%",
    overflow: "hidden",
    zIndex: 1,
    transition: "width 300ms, height 300ms",
    marginRight: theme.spacing(1.5),
    boxShadow: theme.shadows[4],
    border: `3px solid ${theme.palette.secondary.main}`,
    [theme.breakpoints.down("sm")]: {
      width: 100,
      height: 100,
    },
  },
  panel_desc: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    height: "100%",
    [theme.breakpoints.down("sm")]: {
      alignItems: "center",
    },
  },
  blob: {
    position: "absolute",
    width: 105,
    height: 105,
    left: 0,
    borderRadius: "50%",
    overflow: "hidden",
    transform: "scale(1) translateY(2%) translateX(-24%)",
    boxShadow: theme.shadows[2],
  },
  blob_gradient: {
    width: "110%",
    height: "110%",
    zIndex: 10,
    position: "absolute",
  },
  border_secondary: {
    border: `2px solid ${theme.palette.secondary.main}`,
  },
  border_lightblue: {
    border: `2px solid ${theme.palette.lightblue.dark}`,
  },
  border_primary: {
    border: `2px solid ${theme.palette.primary.dark}`,
  },

  desc_chip: {
    borderRadius: 20,
    color: "#fff",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: theme.spacing(0.5),
    padding: theme.spacing(0.7),
    "& svg": {
      marginRight: theme.spacing(0.5),
      width: "1.1rem",
      height: "1.1rem",
    },
    "& span": {
      lineHeight: ".8rem",
      fontSize: ".78rem",
    },
  },
  desc_title: {
    maxWidth: 270,
  },
}));
