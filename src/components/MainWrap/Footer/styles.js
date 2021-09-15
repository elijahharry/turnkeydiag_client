import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.secondary.darker,
    color: "#fff",
    [theme.breakpoints.down("xs")]: {
      paddingTop: theme.spacing(2),
    },
    marginTop: -16,
  },
  copyright: {
    padding: `${theme.spacing(2)}px 0`,
    backgroundColor: "#121212",
    "& p": {
      fontSize: ".9rem",
    },
  },
  content: {
    height: 460,
    width: "100%",
    display: "flex",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(9),
    justifyContent: "space-between",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "auto",
    },
  },
  col: {
    padding: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("xs")]: {
      justifyContent: "center",
      alignItems: "center",
      padding: 0,
    },
  },
  subheader: {
    opacity: 0.6,
    marginBottom: theme.spacing(1),
    width: "100%",
  },
  col_30: {
    flexBasis: "30%",
    [theme.breakpoints.down("sm")]: {
      flexBasis: "50%",
    },
    [theme.breakpoints.down("xs")]: {
      flexBasis: "auto",
    },
  },
  contact: {
    width: "100%",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    marginTop: theme.spacing(1),
    [theme.breakpoints.down("xs")]: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "center",
    },
  },
  contact_item: {
    margin: `${theme.spacing(1.2)}px 0`,
    display: "flex",
    alignItems: "flex-start",
    [theme.breakpoints.down("xs")]: {
      margin: theme.spacing(1),
    },
  },
  avatar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: theme.spacing(0.7),
    backgroundColor: theme.palette.primary.main,
    borderRadius: "50%",
    marginRight: theme.spacing(2),
    "& svg": {
      width: 18,
      height: 18,
    },
    [theme.breakpoints.down("xs")]: {
      marginRight: theme.spacing(1),
    },
  },
  contact_text: {
    marginTop: theme.spacing(0.4),
    lineHeight: "1.6rem",
  },
  col_40: {
    flexBasis: "40%",
  },
  links: {
    width: "100%",
    height: "calc(100% - 126px)",
    listStyleType: "none",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    flexWrap: "wrap",
    padding: 0,
    marginBlock: 0,
    cursor: "pointer",
    paddingInline: 0,
    [theme.breakpoints.down("xs")]: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      height: "auto",
      paddingTop: theme.spacing(3),
    },
  },
  link: {
    padding: `${theme.spacing(1.4)}px 0`,
    width: "50%",
    display: "inline",
    "& a": {
      color: "#fff",
    },
    [theme.breakpoints.down("xs")]: {
      width: "auto",
      margin: `0 ${theme.spacing(2)}px`,
    },
  },
  logo: {
    height: 80,
    [theme.breakpoints.down("xs")]: {
      height: "auto",
      width: "70%",
    },
  },
  padding_left: {
    paddingLeft: theme.spacing(17),
    [theme.breakpoints.down("xs")]: {
      paddingLeft: 0,
    },
  },
  padding_top: {
    paddingTop: theme.spacing(7),
    [theme.breakpoints.down("xs")]: {
      paddingTop: 0,
    },
  },
  top_row: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    height: 126,
  },
  top_text: {
    paddingTop: theme.spacing(2),
  },
  top_brand: {
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      paddingTop: 0,
      paddingBottom: theme.spacing(2),
      width: "100%",
    },
  },
}));
