import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  nav: {
    width: "100%",
    position: "absolute",
    zIndex: 21,
    [theme.breakpoints.down("xs")]: {
      position: "relative",
    },
  },
  nav_primary: {
    borderBottom: `6px solid ${theme.palette.primary.main}`,
    borderBottomLeftRadius: 7,
    borderBottomRightRadius: 7,
    boxShadow: theme.shadows[2],
  },
  nav_bar: {
    position: "relative",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    zIndex: 4,
    backgroundColor: "#fff",
    width: "100%",
    transition: "all 500ms",
    padding: theme.spacing(3),
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(2),
    },
  },
  nav_bar_no_radius: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  nav_brand_default: {
    height: 60,
    [theme.breakpoints.down("sm")]: {
      height: 55,
    },
    [theme.breakpoints.down("xs")]: {
      height: 40,
    },
  },
  nav_links: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  nav_link: {
    fontSize: "1rem",
    marginLeft: theme.spacing(5),
  },
  tests_link: {
    fontSize: "1rem",
    marginRight: -10,
  },
  nav_link_2: {
    fontSize: "1rem",
    margin: theme.spacing(1.8),
  },
  tests_button_overlay: {
    position: "absolute",
    width: 125,
    height: "100%",
    right: 436,
    // backgroundColor: "#00000033",
  },
  contact_bar: {
    height: 40,
    width: "100%",
    color: "#fff",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "relative",
    zIndex: 2,
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  contact_item: {
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    padding: `0 ${theme.spacing(2)}px`,
    fontSize: "1rem",
    "& svg": {
      height: "1.3rem",
      width: "1.3rem",
      marginRight: theme.spacing(0.8),
      color: theme.palette.primary.main,
    },
  },
  blur_overlay: {
    zIndex: 19,
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    backdropFilter: "blur(25px)",
    position: "fixed",
  },
}));
