import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  testimonials: {
    position: "relative",
    height: 500,
    "&::after": {
      content: "''",
      width: "100%",
      height: "100%",
      backgroundColor: `${theme.palette.text.primary}df`,
      position: "absolute",
      zIndex: 1,
    },
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    [theme.breakpoints.down("md")]: {
      height: 550,
    },
    [theme.breakpoints.down("sm")]: {
      height: 700,
    },
  },
  testimonials__content: {
    position: "absolute",
    width: "100%",
    height: 500,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    zIndex: 2,
    maxWidth: 2380,
    [theme.breakpoints.down("md")]: {
      height: 550,
    },
    [theme.breakpoints.down("sm")]: {
      height: 700,
    },
  },
  testimonial: {
    position: "relative",
    zIndex: 1,
    height: 500,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    marginBottom: "3%",
    [theme.breakpoints.down("md")]: {
      height: 550,
    },
    [theme.breakpoints.down("sm")]: {
      height: 700,
    },
  },
  testimonial_text: {
    fontWeight: 300,
    marginTop: 20,
    fontStyle: "italic",
    letterSpacing: 1,
    marginBottom: 15,
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.8rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.6rem",
    },
  },
  content_controls: {
    height: "20%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    left: 0,
    zIndex: 2,
    "& svg": {
      margin: 15,
    },
    [theme.breakpoints.down("sm")]: {
      height: "10%",
    },
  },

  arrow: {
    width: 40,
    height: 40,
    transition: "transform 300ms",
    "&:hover": {
      transform: "scale(1.3)",
    },
  },
  arrow_active: {
    cursor: "pointer",
  },
  arrow_inactive: {
    opacity: 0.6,
  },
  bullet_active: {
    width: 25,
    height: 25,
  },
  bullet_inactive: {
    width: 20,
    height: 20,
    cursor: "pointer",
    transition: "transform 300ms",
    "&:hover": {
      transform: "scale(1.5)",
    },
  },
  testimonial_contact: {
    marginLeft: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    flexDirection: "column",
    [theme.breakpoints.down("sm")]: {
      alignItems: "center",
      textAlign: "center !important",
    },
  },
  contact_logo: {
    width: 180,
    height: 80,
    position: "relative",
    margin: 10,
    [theme.breakpoints.down("sm")]: {
      width: 160,
      height: 60,
    },
  },
  contact: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  },
  column_arrow: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));
