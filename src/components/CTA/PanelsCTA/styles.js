import { makeStyles } from "@material-ui/core/styles";
import gradients from "@styles/gradients";

export default makeStyles((theme) => ({
  cta: {
    backgroundColor: "#fff",
    position: "relative",
    zIndex: 6,
    marginTop: -75,
    borderRadius: 5,
    height: 150,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    overflow: "hidden",
    boxShadow: theme.shadows[4],
    borderBottom: `5px solid ${theme.palette.secondary.main}`,
    [theme.breakpoints.down("sm")]: {
      marginTop: 0,
    },
  },
  cta_content: {
    position: "relative",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexBasis: "70%",
    zIndex: 1,
    padding: `0 ${theme.spacing(1)}px`,
    paddingRight: theme.spacing(5),
    // border: `2px solid ${theme.palette.grey.dark}`,
    borderRadius: 5,
    height: "100%",
    boxShadow: theme.shadows[1],
    [theme.breakpoints.down("sm")]: {
      paddingRight: 0,
      padding: `0 ${theme.spacing(2)}px`,
      justifyContent: "flex-start",
    },
  },
  icon: {
    width: "4.8rem",
    height: "4.8rem",
    marginRight: theme.spacing(1),
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  content_item: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  dropdown_label: {
    marginBottom: theme.spacing(0.5),
  },
  item_col: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    "& h5": {
      fontWeight: 700,
      marginBottom: theme.spacing(0.4),
      [theme.breakpoints.down(1090)]: {
        marginBottom: theme.spacing(0.2),
      },
    },
  },
  dropdown: {
    minWidth: 180,
    maxWidth: 260,
    backgroundColor: theme.palette.grey.light,
    height: 45,
    [theme.breakpoints.down(1250)]: {
      maxWidth: 100,
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: 400,
    },
    [theme.breakpoints.down("xs")]: {
      maxWidth: 120,
    },
    transition: "all 300ms",

    "& .MuiSelect-root": {
      fontSize: "1.2rem",
      lineHeight: "1.5rem",
      fontWeight: 700,
      transition: "all 300ms",
    },
    "& .MuiSelect-select": {
      transition: "all 300ms",
      "&:focus": {
        backgroundColor: "#ffffff00",
      },
    },
  },
  col_1_text: {
    [theme.breakpoints.down(1090)]: {
      fontSize: "1rem",
      wordWrap: "break-word",
    },
  },
  cta_arrow: {
    position: "absolute",
    border: `12px solid #fff`,
    width: "6rem",
    height: "6rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
    right: "-3rem",
    transition: "all 300ms ease-in-out",
    "& svg": {
      color: "#fff",
      width: "2.2rem",
      height: "2.2rem",
      transition: "all 300ms ease-in-out",
    },
    "&:hover": {
      transform: "scale(1.1)",
      border: `6px solid #fff`,
    },
    [theme.breakpoints.down("xs")]: {
      width: "4rem",
      height: "4rem",
      right: "-2rem",
    },
  },
  cta_media: {
    position: "relative",
    flexBasis: "30%",
    height: "100%",
    overflow: "hidden",
    borderTopRightRadius: 5,
    zIndex: 0,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      flexBasis: "40%",
      minWidth: "40%",
    },
  },
  vid_overlay: {
    zIndex: 2,
    position: "absolute",
    width: "100%",
    height: "100%",
    backdropFilter: "sepia(100%)",
    backgroundColor: `${theme.palette.primary.dark}99`,
  },
  overlay_gradient: {
    position: "absolute",
    width: "100%",
    height: "100%",
    opacity: 0,
  },
  video: {
    position: "absolute",
    overflow: "hidden",
    width: "100%",
    height: "100%",
    zIndex: 0,
    "& video": {
      objectPosition: "center",
      objectFit: "cover",
    },
  },
  vid_blur: {
    position: "absolute",
    width: "100%",
    height: "200%",
    top: "-50%",
    right: 0,
    zIndex: 1,
    transition: "opacity 600ms",
  },
  blur: {
    filter: "blur(10px) !important",
  },
  hide: {
    opacity: 0,
  },
  show: {
    opacity: 1,
  },
  section: {
    position: "relative",
  },
  background: {
    position: "absolute",
    width: "100%",
    height: "50%",
    bottom: 0,
    left: 0,
  },
  background_overlay: {
    zIndex: 1,
  },
}));
