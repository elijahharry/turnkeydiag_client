import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  section: {
    padding: 0,
    "& .react-multiple-carousel__arrow": {
      background: theme.palette.secondary.light,
      color: "#fff",
    },
    "& .react-multi-carousel-dot": {
      "& button": {
        background: theme.palette.secondary.light,
        "&:hover": {
          background: theme.palette.secondary.lighter + " !important",
        },
      },
    },
    "& .react-multi-carousel-dot--active": {
      "& button": {
        background: theme.palette.secondary.main + " !important",
      },
    },
    position: "relative",
    zIndex: 1,
    overflow: "hidden",
    maxWidth: "100vw",
    backgroundColor: theme.palette.grey.dark,
  },
  caroseul_container: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    position: "relative",
    zIndex: 0,
  },
  caroseul_item: {
    height: 200,
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
  client: {
    height: "85%",
    width: "85%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    overflow: "hidden",
    transition: "transform 600ms, opacity 600ms, box-shadow 600ms",
  },
  client_active: {
    transform: "scale(1)",
    opacity: 1,
    "&:hover": {
      transform: "scale(1.03)",
    },
  },
  client_inactive: {
    transform: "scale(.9)",
    opacity: 1,
    "&:hover": {
      transform: "scale(.93)",
    },
  },
  client_offpage: {
    opacity: 0.3,
  },
  offpage_right: {
    transform: "scale(.6) translateX(-60px) !important",
  },
  offpage_left: {
    transform: "scale(.6) translateX(60px) !important",
  },
  chip_block: {
    paddingTop: theme.spacing(1),
    marginTop: theme.spacing(1.5),
    borderTop: `2px solid ${theme.palette.grey.dark}`,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  chip_arrow: {
    color: theme.palette.secondary.light,
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
      lineHeight: ".9rem",
      fontSize: ".95rem",
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
    backgroundColor: theme.palette.secondary.light,
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
    backgroundColor: theme.palette.secondary.main,
    transform: "scale(1.3)",
  },
  bullet_inactive: {
    transform: "scale(1)",
  },
  container: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    // overflow: "hidden",
  },
  arrow: {
    width: 40,
    height: 40,
    backgroundColor: theme.palette.secondary.light,
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
      backgroundColor: theme.palette.secondary.main,
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
}));
