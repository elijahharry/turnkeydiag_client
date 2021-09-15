import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  background: {
    position: "absolute",
    width: "100%",
    height: "100%",
    bottom: 0,
    left: 0,
  },
  background_overlay: {
    zIndex: 1,
  },
  section: {
    position: "relative",
    overflow: "hidden",
  },
  grid: {
    flexDirection: "row",
    paddingTop: theme.spacing(10),
    position: "relative",
    zIndex: 5,
  },
  container: {
    [theme.breakpoints.down("sm")]: {
      padding: 0,
    },
  },
  padding_normal: {
    paddingTop: theme.spacing(6),
    [theme.breakpoints.down("sm")]: {
      paddingTop: theme.spacing(4),
    },
  },
  padding_equal: {
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
    [theme.breakpoints.down("sm")]: {
      paddingBottom: theme.spacing(0),
    },
  },
  padding_bottom: {
    paddingBottom: theme.spacing(6),
    [theme.breakpoints.down("sm")]: {
      paddingBottom: theme.spacing(4),
    },
  },
  grid_flipped: {
    flexDirection: "row-reverse",
    alignItems: "stretch",
    position: "relative",
  },
  title: {
    fontWeight: 700,
    marginBottom: theme.spacing(1),
  },
  desc: {
    margin: `${theme.spacing(1.5)}px 0`,
    "& span": {
      fontWeight: 500,
    },
    [theme.breakpoints.down("sm")]: {
      margin: `${theme.spacing(1)}px 0`,
    },
    "& ul": {
      margin: `-12px 0`,
      "& li": {
        margin: `${theme.spacing(0.5)}px 0`,
        marginRight: theme.spacing(0.5),
        width: "100%",
      },
      [theme.breakpoints.down("sm")]: {
        paddingLeft: 0,
        listStylePosition: "inside",
      },
    },
  },
  grid_border: {
    borderBottom: `2px solid ${theme.palette.grey.main}`,
  },
  primary: {
    color: theme.palette.primary.main,
  },
  secondary: {
    color: theme.palette.secondary.main,
  },
  secondary_light: {
    color: theme.palette.secondary.light,
  },
  desc_primary: {
    "& span": {
      color: theme.palette.primary.main,
    },
  },
  desc_secondary: {
    "& span": {
      color: theme.palette.secondary.main,
    },
  },
  desc_secondary_light: {
    "& span": {
      color: theme.palette.secondary.light,
    },
  },
  cta: {
    fontWeight: 700,
    fontSize: "1.2rem",
    transition: "all 300ms",
    marginTop: theme.spacing(1),
    [theme.breakpoints.down("xs")]: {
      fontSize: "1rem",
    },
    "& svg": {
      transition: "all 300ms",
    },
    "&:hover": {
      letterSpacing: ".05rem",
      "& svg": {
        transform: "translateX(10px)",
      },
    },
  },
  text_col: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: "100%",
    alignItems: "flex-start",
    paddingBottom: theme.spacing(4),
    paddingTop: theme.spacing(4),
    position: "relative",
    zIndex: 2,
    [theme.breakpoints.down("sm")]: {
      alignItems: "center",
      padding: `0 ${theme.spacing(2)}px`,
    },
  },
  img_col: {
    display: "flex",
    alignItems: "center",
    position: "relative",
    zIndex: 5,
    padding: `0 ${theme.spacing(3)}px`,
    transition: "all 300ms",
    pointerEvents: "none",
    [theme.breakpoints.down("sm")]: {
      padding: 0,
      height: 380,
    },
  },
  img_col_lg: {
    minHeight: 480,
    [theme.breakpoints.down("sm")]: {
      minHeight: 380,
    },
    [theme.breakpoints.down("xs")]: {
      minHeight: 350,
    },
  },
  floating_img: {
    width: "100%",
    height: "100%",
    zIndex: 1,
    overflow: "hidden",
    pointerEvents: "none",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  img_backdrop: {
    position: "absolute",
    width: "100%",
    height: "100%",
    overflow: "hidden",
    zIndex: -1,
    left: 0,
    bottom: -8,
  },
  backdrop_overlay: {
    width: "100%",
    height: "100%",
    position: "relative",
  },
  faded_img: {
    position: "absolute",
    width: "200%",
    height: "120%",
    overflow: "hidden",
    zIndex: -2,
    top: "-10%",
    [theme.breakpoints.down("sm")]: {
      opacity: 0.07,
    },
    "& img": {
      opacity: 0.2,
    },
  },
  faded_default: {
    left: "20%",
  },
  faded_flipped: {
    right: "20%",
  },
  faded_overlay: {
    width: "100%",
    height: "100%",
    position: "relative",
    opacity: 0.3,
  },
  img_overlay: {
    width: "100%",
    height: "100%",
    position: "relative",
    zIndex: 1,
    top: 0,
    left: 0,
    backdropFilter: "grayscale(100%) contrast(140%) brightness(80%)",
  },
  img_overlay_gradient: {
    width: "100%",
    height: "100%",
    opacity: 0.65,
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
  bottom_shadow: {
    position: "absolute",
    zIndex: 0,
    left: 0,
    bottom: -50,
    height: 10,
    width: "100%",
    // boxShadow: `0px -20px 30px ${theme.palette.primary.main}`,
  },
  img_half: {
    height: "100%",
    width: "45%",
    position: "absolute",
    top: 0,
    zIndex: 0,
    [theme.breakpoints.down("sm")]: {
      opacity: 0,
    },
  },
  left: {
    left: 0,
  },
  right: {
    right: 0,
  },
  img_half_mobile: {
    height: "100%",
    position: "relative",
    width: "100vw",
    opacity: 0,
    overflow: "hidden",
    marginTop: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      opacity: 1,
    },
  },
  ul_flex: {
    width: "100%",
    "& ul": {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "space-between",
      flexWrap: "wrap",
      height: 340,
      "& li": {
        width: "46%",
      },
      [theme.breakpoints.down("xs")]: {
        flexWrap: "no-wrap",
        height: "auto",
        maxHeight: "5000px !important",
        "& li": {
          width: "100%",
        },
      },
    },
  },
  ul_flex_sm: {
    width: "100%",
    "& ul": {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      flexWrap: "wrap",
      height: 200,
      "& li": {
        width: "49%",
        margin: 0,
        margin: `${theme.spacing(0.1)}px 0`,
      },
      [theme.breakpoints.down("xs")]: {
        flexWrap: "no-wrap",
        height: "auto",
        "& li": {
          width: "100%",
        },
      },
    },
  },
  animate_position: {
    animation: "$object-position 25s infinite",
  },
  "@keyframes object-position": {
    "0%": {
      objectPosition: "left",
    },
    "50%": {
      objectPosition: "right",
    },
    "100%": {
      objectPosition: "left",
    },
  },
  button: {
    marginTop: theme.spacing(2),
    transition: "all 300ms",
    "& svg": {
      width: "1.7rem",
      height: "1.7rem",
      marginBottom: theme.spacing(0.1),
      marginLeft: theme.spacing(0.3),
      transition: "all 300ms",
    },
    "&:hover": {
      paddingRight: theme.spacing(5),
      "& svg": {
        transform: "translateX(16px)",
      },
    },
  },
  button_primary: {
    backgroundColor: theme.palette.primary.main,
    color: "#fff",
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
  },
  button_secondary: {
    backgroundColor: theme.palette.secondary.main,
    color: "#fff",
    "&:hover": {
      backgroundColor: theme.palette.secondary.dark,
    },
  },
  button_secondary_light: {
    backgroundColor: theme.palette.secondary.light,
    color: "#fff",
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
    },
  },
  ul_nomargin: {
    margin: "-15px 0 !important",
  },
  img_hide: {
    transform: "translateY(50%)",
    opacity: 0,
  },
  img_show: {
    transform: "translateY(0)",
    opacity: 1,
  },
}));
