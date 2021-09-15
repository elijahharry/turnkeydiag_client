import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  section: {
    backgroundColor: theme.palette.grey.main,
  },
  container: {
    padding: 0,
    zIndex: 6,
    left: 0,
    top: -80,
    position: "relative",
    [theme.breakpoints.down("xs")]: {
      top: -40,
    },
  },
  panels: {
    listStyle: "none",
    padding: "0",
    margin: "0",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  panel_holder: {
    height: 500,
    flexBasis: "33%",
    padding: theme.spacing(3),
    [theme.breakpoints.down("sm")]: {
      flexBasis: "50%",
      padding: `${theme.spacing(1.5)}px ${theme.spacing(4)}px`,
    },
    [theme.breakpoints.down("xs")]: {
      flexBasis: "100%",
    },
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
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "space-between",
    backgroundColor: "#fff",
    borderRadius: 10,
    overflow: "hidden",
    transition: "all 300ms",
    boxShadow: theme.shadows[3],
    "&:hover": {
      transform: "scale(1.03)",
      boxShadow: theme.shadows[9],
    },
  },
  panel_primary: {
    borderBottom: `6px solid ${theme.palette.primary.main}`,
  },
  panel_secondary: {
    borderBottom: `6px solid ${theme.palette.secondary.main}`,
  },
  panel_media: {
    width: "100%",
    flexBasis: "auto",
    flexGrow: 2,
    position: "relative",
    overflow: "hidden",
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
    padding: theme.spacing(2.4),
    backgroundColor: "#fff",
    position: "relative",
    zIndex: 1,
  },
  chip_block: {
    paddingTop: theme.spacing(1),
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

  img: {
    zIndex: 0,
  },
  panel_title: {
    fontSize: "1.45rem",
  },
}));
