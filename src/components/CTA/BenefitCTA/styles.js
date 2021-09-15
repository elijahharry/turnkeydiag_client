import { makeStyles } from "@material-ui/core/styles";
import gradients from "@styles/gradients";

export default makeStyles((theme) => ({
  cta: {
    backgroundColor: "#fff",
    position: "relative",
    zIndex: 6,
    marginTop: -62.5,
    borderRadius: 5,
    height: 125,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    overflow: "hidden",
    boxShadow: theme.shadows[4],
    borderBottom: `5px solid ${theme.palette.secondary.main}`,
    [theme.breakpoints.down("sm")]: {
      marginTop: 0,
      height: "auto",
    },
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  cta_content: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexBasis: "76%",
    zIndex: 1,
    padding: `0 ${theme.spacing(1)}px`,
    paddingRight: theme.spacing(5),
    paddingLeft: theme.spacing(2),
    borderRadius: 5,
    height: "100%",
    [theme.breakpoints.down("sm")]: {
      paddingRight: 0,
      padding: `0 ${theme.spacing(2)}px`,
      justifyContent: "flex-start",
    },
    [theme.breakpoints.down("xs")]: {
      justifyContent: "center",
      padding: 0,
    },
  },
  icon: {
    height: "4.5rem",
    width: "4.5rem",
    marginRight: theme.spacing(1),
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  content_item: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: `${theme.spacing(2)}px 0`,
    paddingRight: theme.spacing(4),
    [theme.breakpoints.down("sm")]: {
      paddingRight: theme.spacing(4),
    },
    [theme.breakpoints.down("xs")]: {
      justifyContent: "center",
      paddingRight: 0,
      paddingBottom: 0,
    },
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
    [theme.breakpoints.down("xs")]: {
      alignItems: "center",
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
  desc: {
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
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  cta_media: {
    position: "relative",
    flexBasis: "24%",
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
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  title: {
    "& span": {
      color: theme.palette.primary.dark,
    },
    fontWeight: 700,
  },
  media_overlay: {
    zIndex: 2,
    position: "absolute",
    width: "100%",
    height: "100%",
    overflow: "hidden",
    backdropFilter:
      "grayscale(100%) sepia(100%) brightness(65%) hue-rotate(345deg)",
    [theme.breakpoints.down("xs")]: {
      borderRadius: "50%",
    },
  },
  overlay_gradient: {
    position: "absolute",
    width: "100%",
    height: "100%",
    opacity: 0,
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
  cta_media_mobile: {
    height: 150,
    width: "100%",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  media_mobile: {
    width: 130,
    height: 130,
    position: "relative",
    borderRadius: "50%",
    overflow: "hidden",
    zIndex: 0,
    marginLeft: "1rem",
  },
  cta_arrow_mobile: {
    position: "relative",
    border: `8px solid #fff`,
    width: "5rem",
    height: "5rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
    transition: "all 300ms ease-in-out",
    zIndex: 1,
    marginLeft: "-2rem",
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
  },
}));
