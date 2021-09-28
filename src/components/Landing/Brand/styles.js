import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  nav: {
    paddingTop: 20,
    marginBottom: theme.spacing(6),
    position: "relative",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      "& h1": {
        fontSize: "2.3rem !important",
      },
    },
  },
  nav__brand: {
    height: 80,
    [theme.breakpoints.down("sm")]: {
      height: 85,
    },
    [theme.breakpoints.down("xs")]: {
      height: 75,
    },
  },
  nav__links: {
    "& svg": {
      marginRight: 5,
    },
  },
  links_default: {
    "& span": {
      color: theme.palette.text.primary,
    },
    marginRight: 20,
  },
  links_contained: {
    color: "#fff",
  },
}));
