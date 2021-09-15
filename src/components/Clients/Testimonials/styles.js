import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  section: {
    position: "relative",
    zIndex: 6,
    marginTop: -110,
    overflow: "hidden",
    maxWidth: "100vw",
    paddingBottom: theme.spacing(6),
  },
  backdrop: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 110,
    zIndex: -1,
  },
  container: {
    padding: 0,
    position: "relative",
  },
  intro: {
    color: "#fff",
    fontWeight: 500,
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    "& svg": {
      marginRight: theme.spacing(1),
    },
  },
  testimonial: {
    backgroundColor: "#fff",
    width: "100%",
    height: "auto",
    display: "flex",
    align: "stretch",
    justifyContent: "space-between",
    borderRadius: 15,
    transition: "all 1s",
    overflow: "hidden",
    borderBottom: `5px solid ${theme.palette.secondary.main}`,
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  testimonial_active: {
    transform: "scale(1)",
    opacity: 1,
    boxShadow: theme.shadows[3],
  },
  testimonial_inactive: {
    boxShadow: theme.shadows[1],
    opacity: 1,
  },
  inactive_left: {
    transform: "scale(.7) translateX(-50vw)",
  },
  inactive_right: {
    transform: "scale(.7) translateX(50vw)",
  },
  testimonial_offpage: {
    opacity: 0.8,
  },
  offpage_right: {
    transform: "scale(.5) translateX(50vw) !important",
  },
  offpage_left: {
    transform: "scale(.5) translateX(50vw) !important",
  },
  imgs: {
    width: "40%",
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: 200,
    },
  },
  text: {
    width: "60%",
    padding: theme.spacing(3),
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      textAlign: "center",
    },
  },
  caroseul_container: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    position: "relative",
    zIndex: 1,
  },
  caroseul_item: {
    height: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transformStyle: "preserve-3d",
    backfaceVisibility: "hidden",
    position: "relative",
    padding: 0,
    [theme.breakpoints.down("sm")]: {
      padding: `0 ${theme.spacing(7)}px`,
    },
  },
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
    transition: "transform 1s",
  },

  quote: {
    fontWeight: 700,
    fontSize: "1.3rem",
    margin: `0 ${theme.spacing(0.4)}px`,
  },
  body: {
    position: "relative",
  },
  logo_overlay: {
    zIndex: 5,
    position: "absolute",
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: `${theme.palette.secondary.light}bf`,
  },
  contact: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
  },
  contact_info: {
    marginTop: theme.spacing(1),
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    [theme.breakpoints.down("sm")]: {
      alignItems: "center",
      width: "100%",
    },
  },
  title: {},
  quote_1: {
    position: "absolute",
    left: -10,
    top: -3,
    fontWeight: 700,
    fontSize: "1.3rem",
    [theme.breakpoints.down("sm")]: {
      position: "relative",
      left: "auto",
      top: "auto",
    },
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
    zIndex: 2,
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
    top: "45%",
  },
  arrow_left: {
    left: "-7%",
    "& svg": {
      marginLeft: theme.spacing(1.4),
    },
    [theme.breakpoints.down("sm")]: {
      left: 0,
    },
  },
  arrow_right: {
    right: "-7%",
    "& svg": {
      marginLeft: theme.spacing(0.7),
    },
    [theme.breakpoints.down("sm")]: {
      right: 0,
    },
  },
  name: {
    color: theme.palette.secondary.light,
  },
}));
