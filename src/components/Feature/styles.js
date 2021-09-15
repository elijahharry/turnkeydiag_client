import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  block: {
    overflow: "hidden",
    position: "relative",
    paddingTop: theme.spacing(3),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      paddingTop: 0,
    },
  },
  block_even_padding: {
    paddingBottom: theme.spacing(3),
  },
  content: {
    position: "relative",
    zIndex: 5,
  },
  content_dark: {
    color: "#fff",
  },
  content_column: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    position: "relative",
  },
  content_column__default: {
    alignItems: "flex-start",
    [theme.breakpoints.down("sm")]: {
      alignItems: "center",
      textAlign: "center",
    },
  },
  content_column__centered: {
    alignItems: "center",
    textAlign: "center",
  },
  content_column__left: {
    paddingLeft: theme.spacing(2),
  },
  content_column__left_xtra: {
    paddingLeft: theme.spacing(6),
  },
  content_column__right: {
    paddingRight: theme.spacing(2),
  },
  content_default: {
    minHeight: 500,
    [theme.breakpoints.down("md")]: {
      minHeight: 450,
    },
  },
  content_md: {
    minHeight: 600,
    [theme.breakpoints.down("md")]: {
      minHeight: 525,
    },
  },
  content_lg: {
    minHeight: 700,
    [theme.breakpoints.down("sm")]: {
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(5),
      minHeight: "100vh",
    },
  },
  content_flipped: {
    flexDirection: "row-reverse",
    [theme.breakpoints.down("sm")]: {
      flexWrap: "reverse",
    },
  },
  column_text: {
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.down("sm")]: {
      minHeight: 0,
      paddingBottom: theme.spacing(5),
      paddingTop: theme.spacing(5),
    },
  },
  column_normal: {
    [theme.breakpoints.down("sm")]: {
      minHeight: 0,
    },
  },
  column_full_mobile_center: {
    [theme.breakpoints.down("sm")]: {
      minHeight: 700,
    },
  },
  column_image: {
    "&:hover": {
      "& img": {
        transform: "scale(1.02) translateY(1%)",
      },
    },
    [theme.breakpoints.down("sm")]: {
      minHeight: 475,
    },
    [theme.breakpoints.down("xs")]: {
      minHeight: 300,
    },
  },
  title: {
    zIndex: 1,
    fontWeight: 700,
  },
  title_blob: {
    zIndex: 1,
    fontWeight: 700,
    maxWidth: "90%",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100%",
    },
  },
  description: {
    zIndex: 1,
    [theme.breakpoints.down("md")]: {
      maxWidth: "80% !important",
    },
    [theme.breakpoints.down("xs")]: {
      maxWidth: "100% !important",
    },
  },
  description_normal: {
    maxWidth: "80%",
  },
  description_flipped: {
    maxWidth: "85%",
  },
  overline: {
    zIndex: 1,
    fontSize: "1.1rem",
    letterSpacing: ".15rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: ".95rem",
      letterSpacing: ".1rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: ".8rem",
      letterSpacing: ".08rem",
    },
  },
  cta_button: {
    zIndex: 1,
    padding: "10px 30px",
    marginTop: theme.spacing(3),
    "& span": {
      position: "relative",
      zIndex: 1,
    },
    "&:before": {
      position: "relative",
      content: "''",
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "4px",
      backgroundColor: "#fff",
      zIndex: 0,
      opacity: 0,
      transition: "opacity 300ms",
    },
    "&:hover": {
      "&:before": {
        opacity: 0.1,
      },
    },
  },
  background: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
  },
  background_media: {
    zIndex: 1,
  },
  background_overlay: {
    zIndex: 2,
  },

  text_primary: {
    color: theme.palette.primary.main,
  },
  button_primary: {
    color: "#fff",
    backgroundColor: theme.palette.primary.main,
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
    },
  },
  text_secondary: {
    color: theme.palette.secondary.main,
  },
  button_secondary: {
    color: theme.palette.secondary.contrastText,
    backgroundColor: theme.palette.secondary.main,
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
    },
  },
  text_secondary__light: {
    color: theme.palette.secondary.light,
  },
  button_secondary__light: {
    color: theme.palette.secondary.contrastText,
    backgroundColor: theme.palette.secondary.light,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  text_secondary__dark: {
    color: theme.palette.secondary.dark,
  },
  button_secondary__dark: {
    color: theme.palette.secondary.contrastText,
    backgroundColor: theme.palette.secondary.main,
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
    },
  },
  text_blue: {
    color: theme.palette.blue.light,
  },
  button_blue: {
    color: "#fff",
    backgroundColor: theme.palette.blue.light,
    "&:hover": {
      backgroundColor: theme.palette.blue.main,
    },
  },
  text_lightblue: {
    color: theme.palette.lightblue.main,
  },
  button_lightblue: {
    color: "#fff",
    backgroundColor: theme.palette.lightblue.main,
    "&:hover": {
      backgroundColor: theme.palette.lightblue.main,
    },
  },
  button_primary__dark: {
    color: "#fff",
    backgroundColor: theme.palette.lightblue.main,
    "&:hover": {
      backgroundColor: theme.palette.lightblue.main,
    },
  },
  "@keyframes blob-change": {
    "0%": {
      borderRadius: "50%",
    },
    "25%": {
      borderRadius: "33% 67% 70% 30% / 30% 30% 70% 70%",
    },
    "50%": {
      borderRadius: "37% 63% 51% 49% / 37% 65% 35% 63%",
    },
    "75%": {
      borderRadius: "36% 64% 64% 36% / 64% 48% 52% 36%",
    },
    "100%": {
      borderRadius: "50%",
    },
  },
  "@keyframes blob-xs-rotate": {
    "0%": {
      transform: "rotate(0deg) translateX(20px) rotate(0deg)",
    },
    "100%": {
      transform: "rotate(360deg) translateX(20px) rotate(-360deg)",
    },
  },
  "@keyframes blob-sm-rotate": {
    "0%": {
      transform: "rotate(360deg) translateX(20px) rotate(-360deg)",
    },
    "100%": {
      transform: "rotate(0deg) translateX(20px) rotate(0deg)",
    },
  },
  blob_backdrop: {
    width: "100%",
    height: "100%",
  },
  blob: {
    borderRadius: "50%",
    position: "absolute",
    width: "100%",
    height: "80%",
    overflow: "hidden",
    animation: "$blob-change 30s linear infinite",
    // border: "2px solid #fff",
  },
  // blob_main: {
  //   minWidth: 550,
  //   backdropFilter: "blur(20px)",
  //   zIndex: 0,
  //   transform: "translateX(-10%) scale(1.1) scaleX(1.03)",
  //   minHeight: 550,
  //   [theme.breakpoints.down("sm")]: {
  //     backdropFilter: "blur(2px)",
  //     transform: "translateX(0%)",
  //     borderRadius: "0 !important",
  //     width: "200%",
  //     height: "100%",
  //   },
  // },
  // blob_lg: {
  //   backdropFilter: "blur(5px) contrast(120%) brightness(110%)",
  //   zIndex: -1,
  //   transform: "translateX(-40%) scale(-2.9) translateX(18%)",
  //   [theme.breakpoints.down("sm")]: {
  //     display: "none",
  //   },
  // },
  // blob_sm: {
  //   backdropFilter: "blur(15px)",
  //   zIndex: -1,
  //   transform: "translateX(-90%) translateY(60%) scaleX(-.5) scaleY(.5)",
  //   animation: "$blob-change 40s linear infinite",
  // },
  // blob_xs: {
  //   backdropFilter: "blur(50px)",
  //   zIndex: -1,
  //   animation: "$blob-change 55s linear infinite",
  //   transform: "translateX(-85%) translateY(-48%) scaleY(.2) scaleX(-.2)",
  // },
  // blob_sm: {
  //   width: 350,
  //   height: 350,
  //   backdropFilter: "blur(15px)",
  //   zIndex: 5,
  //   transform: "scaleX(-1)",
  //   animation:
  //     "$blob-change 20s linear infinite, $blob-sm-rotate 30s linear infinite",
  //   left: -100,
  //   bottom: -150,
  //   [theme.breakpoints.down("lg")]: {
  //     left: "36%",
  //     width: 80,
  //     height: 80,
  //     bottom: "5%",
  //   },
  //   [theme.breakpoints.down("sm")]: {
  //     display: "none",
  //     visibility: "none",
  //   },
  // },
  // blob_xs: {
  //   width: 120,
  //   height: 120,
  //   top: "5%",
  //   left: "4%",
  //   backdropFilter: "blur(50px)",
  //   zIndex: 4,
  //   animation:
  //     "$blob-change 55s linear infinite, $blob-xs-rotate 30s linear infinite",
  //   [theme.breakpoints.up(2600)]: {
  //     left: "10%",
  //   },
  //   [theme.breakpoints.up(3100)]: {
  //     left: "15%",
  //   },
  //   [theme.breakpoints.down("lg")]: {
  //     left: "40%",
  //     width: 30,
  //     height: 30,
  //   },
  //   [theme.breakpoints.down("sm")]: {
  //     display: "none",
  //     visibility: "none",
  //   },
  // },
  blob_feature: {
    backdropFilter: "blur(25px)",
    zIndex: -1,
    transform: "scaleX(75%) scaleY(105%) translateY(10%)",
    animation: "$blob-change 50s linear infinite",
    [theme.breakpoints.down("sm")]: {
      transform: "scaleX(80%) scaleY(80%) translateY(10%)",
    },
  },
  // blob_lg: {
  //   width: "53%",
  //   height: "200%",
  //   position: "absolute",
  //   top: "-50%",
  //   left: 0,
  //   zIndex: 3,
  //   // clipPath: "ellipse(50% 150% at 0% 50%)",
  //   borderBottomRightRadius: "50%",
  //   borderTopRightRadius: "50%",
  //   overflow: "hidden",
  //   backdropFilter: "blur(10px) contrast(120%) brightness(110%)",
  //   [theme.breakpoints.down("sm")]: {
  //     display: "none",
  //   },
  // },
}));
