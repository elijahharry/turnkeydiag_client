import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  section: {
    position: "relative",
    zIndex: 1,
    overflow: "hidden",
    maxWidth: "100vw",
  },
  background: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
  },
  secondary: {
    color: theme.palette.secondary.main,
  },
  primary: {
    color: theme.palette.primary.main,
  },
  secondary_light: {
    color: theme.palette.secondary.light,
  },
  text_section: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  desc: {
    maxWidth: "60%",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "80%",
    },
    [theme.breakpoints.down("xs")]: {
      maxWidth: "100%",
    },
  },
  text_default: {
    marginBottom: theme.spacing(2),
  },
  background_overlay: {
    zIndex: -1,
  },
  caroseul_container: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    position: "relative",
    zIndex: 0,
  },
  caroseul_item: {
    height: 500,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transformStyle: "preserve-3d",
    backfaceVisibility: "hidden",
    position: "relative",
  },
  item_active: {
    zIndex: 2,
  },
  item_inactive: {
    zIndex: 1,
  },
  item_offpage: {
    zIndex: 0,
  },
  panel: {
    height: "85%",
    width: "85%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "space-between",
    backgroundColor: "#fff",
    borderRadius: 10,
    overflow: "hidden",
    transition: "transform 600ms, opacity 600ms, box-shadow 600ms",
    borderBottom: `6px solid ${theme.palette.secondary.dark}`,
    // border: `2px solid ${theme.palette.grey.dark}`,
  },
  bullet_active: {
    backgroundColor: theme.palette.secondary.light,
    transform: "scale(1.3)",
  },
  bullet_inactive: {
    backgroundColor: theme.palette.secondary.main,
    transform: "scale(1)",
  },
  arrow: {
    width: 40,
    height: 40,
    backgroundColor: theme.palette.secondary.main,
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transition: "transform 300ms, background-color 300ms, box-shadow 300ms",
    boxShadow: theme.shadows[4],
    cursor: "pointer",
    position: "absolute",
    zIndex: 1,
    "& svg": {
      color: "#fff",
      width: "1.8rem",
      height: "1.8rem",
    },
    "&:hover": {
      transform: "scale(1.1)",
      boxShadow: theme.shadows[8],
      backgroundColor: theme.palette.secondary.light,
    },
  },
  arrow_left: {
    left: 0,
    "& svg": {
      marginLeft: theme.spacing(1.4),
    },
  },
  arrow_right: {
    right: 0,
    "& svg": {
      marginLeft: theme.spacing(0.7),
    },
  },
  panel_active: {
    transform: "scale(1)",
    opacity: 1,
    boxShadow: theme.shadows[5],
    "&:hover": {
      transform: "scale(1.03)",
    },
  },
  panel_inactive: {
    transform: "scale(.9)",
    boxShadow: theme.shadows[2],
    opacity: 1,
    "&:hover": {
      transform: "scale(.93)",
    },
  },
  inactive_left: {
    // transition: "transform 600ms, opacity 200ms, box-shadow 600ms",
  },
  inactive_right: {
    // transition:
    //   "transform 600ms, opacity 200ms ease-in-out 100ms, box-shadow 600ms",
  },
  panel_offpage: {
    opacity: 0,
  },
  offpage_right: {
    transform: "scale(0) translateX(-500px) !important",
  },
  offpage_left: {
    transform: "scale(0) translateX(500px) !important",
  },
  panel_media: {
    width: "100%",
    flexBasis: "auto",
    flexGrow: 2,
    position: "relative",
    overflow: "hidden",
    // clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 86% 90%, 0% 90%)",
    zIndex: 0,
  },
  img_holder: {
    width: "105%",
    height: "105%",
    position: "relative",
    top: "-2.5%",
    left: "-2.5%",
  },
  panel_content: {
    width: "100%",
    flexShrink: 1,
    flexBasis: "auto",
    // padding: `${theme.spacing(2)}px ${theme.spacing(2)}px`,
    padding: theme.spacing(2.4),
    backgroundColor: "#fff",
    position: "relative",
    zIndex: 1,
  },
  chip_block: {
    paddingTop: theme.spacing(1),
    marginTop: theme.spacing(1.5),
    // borderTop: `1px solid ${theme.palette.primary.light}`,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  chip_arrow: {
    color: theme.palette.grey.darker,
    height: "1.4rem",
    width: "1.4rem",
  },
  overlay: {
    position: "absolute",
    zIndex: 2,
    width: "100%",
    height: "100%",
    background: "#fff",
    background:
      "linear-gradient(90deg, rgba(255,255,255,1) 2%, rgba(255,255,255,0) 15%, rgba(255,255,255,0) 95%, rgba(255,255,255,1) 100%)",
  },
  content_chip: {
    borderRadius: 20,
    color: "#fff",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    left: theme.spacing(2),
    float: "left",
    marginTop: theme.spacing(0.5),
    padding: theme.spacing(0.8),
    "& svg": {
      marginRight: theme.spacing(0.5),
      width: "1.rem",
      height: "1.3rem",
    },
    "& span": {
      lineHeight: ".8rem",
      fontSize: ".9rem",
    },
  },
  // start
  caroseul_track: {
    listStyle: "none",
    padding: "0",
    margin: "0",
    display: "flex",
    flexDirection: "row",
    position: "relative",
    transformStyle: "preserve-3d",
    backfaceVisibility: "hidden",
    willChange: "transform, transition",
    transition: "transform 600ms",
  },
  bullets: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  bullet: {
    width: 14,
    height: 14,
    margin: 20,
    borderRadius: "50%",
    cursor: "pointer",
    transition: "transform 200ms",
    [theme.breakpoints.down("sm")]: {
      margin: 6,
      width: 9,
      height: 9,
    },
  },

  container: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    // overflow: "hidden",
  },

  img: {
    zIndex: 0,
    // blue
    // filter:
    //   "grayscale(100%) sepia(100%) brightness(70%) hue-rotate(180deg) !important",
    // gold
    // filter:
    //   "grayscale(100%) sepia(100%) saturate(60%) brightness(85%) hue-rotate(345deg) !important",
  },

  // img: {
  //   zIndex: 0,
  //   filter:
  //     "sepia(150%) brightness(60%) contrast(140%) hue-rotate(180deg) !important",
  // },
  // img_overlay: {
  //   width: "100%",
  //   height: "100%",
  //   zIndex: 5,
  //   position: "absolute",
  //   top: 0,
  //   left: 0,
  // },
  // overlay_gradient: {
  //   width: "100%",
  //   height: "100%",
  //   opacity: 0.4,
  // },
}));
