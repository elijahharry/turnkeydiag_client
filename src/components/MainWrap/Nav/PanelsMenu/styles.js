import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  container: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 0,
  },
  dropdown: {
    zIndex: 0,
    borderBottom: `5px solid ${theme.palette.primary.main}`,
    backgroundColor: "#FFF",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    overflow: "hidden",
    position: "absolute",
    height: "auto",
    width: "100%",
    top: 120,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    // borderLeft: `4px solid ${theme.palette.grey.main}`,
    // borderRight: `4px solid ${theme.palette.grey.main}`,
    boxShadow: theme.shadows[2],
    paddingTop: theme.spacing(1),
  },
  dropdown_links: {
    height: "100%",
    display: "flex",
    // flexFlow: "column wrap",
    flexDirection: "row",
    flexWrap: "wrap",
    padding: theme.spacing(2.4),
    justifyContent: "center",
    flexBasis: "75%",
    zIndex: 1,
    position: "relative",
    backgroundColor: "#fff",
  },
  dropdown_cta: {
    height: "auto",
    flexBasis: "25%",
    display: "flex",
    position: "relative",
    overflow: "hidden",
    zIndex: -1,
    "&:hover": {
      "& #cta-overlay-gradient": {
        transform: "scale(5)",
      },
      "& span": {
        letterSpacing: 6,
      },
    },
  },
  link: {
    // margin: `${theme.spacing(0.)}px ${theme.spacing(0.8)}px`,
    // flexBasis: "20%",
    // maxWidth: "25%",
    // maxWidth: "30%",
    margin: `${theme.spacing(1.2)}px ${theme.spacing(2)}px`,
    display: "inline-flex",
    justifyContent: "flex-start",
    alignItems: "center",
    [theme.breakpoints.down("lg")]: {
      margin: `${theme.spacing(1)}px ${theme.spacing(1)}px`,
    },
  },
  avatar: {
    position: "relative",
    width: 55,
    height: 55,
    borderRadius: "50%",
    overflow: "hidden",
    flexShrink: 0,
    marginRight: theme.spacing(1),
    border: `2px solid ${theme.palette.grey.dark}`,
    "& img": {
      zIndex: 0,
    },
  },
  avatar_overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 1,
    borderRadius: "50%",
    overflow: "hidden",
    width: "100%",
    height: "100%",
    // backdropFilter:
    //   "grayscale(100%) sepia(100%) brightness(90%) hue-rotate(345deg)",
    // backdropFilter: "grayscale(100%)",
  },
  cta_overlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    padding: 10,
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    zIndex: 3,
    justifyContent: "flex-end",
  },
  cta_tagline: {
    fontSize: "1.2rem",
    fontWeight: 600,
    letterSpacing: ".1rem",
  },
  cta_link: {
    letterSpacing: ".2rem",
    fontSize: ".95rem",
    transition: "all 300ms",
  },
  nav_brand: {
    height: "90px",
    marginLeft: "-10px",
    [theme.breakpoints.down("sm")]: {
      height: "70px",
    },
    [theme.breakpoints.down("xs")]: {
      height: "50px",
    },
  },
  video: {
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    position: "absolute",
    overflow: "hidden",
    "& div": {
      overflow: "hidden",
      "& video": {
        objectFit: "cover",
      },
    },
  },
  video_overlay: {
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    zIndex: 1,
    position: "absolute",
    backdropFilter: "contrast(100%) brightness(50%)",
    "& #cta-overlay-gradient": {
      width: "100%",
      height: "100%",
      opacity: 0.6,
      transition: "all 300ms",
    },
  },
}));
