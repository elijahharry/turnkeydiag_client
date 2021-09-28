import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  results: {
    minHeight: 600,
    display: "flex",
    marginBottom: 30,
    flexDirection: "column",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },
  results_desc: {
    width: "87.5%",
    [theme.breakpoints.down("sm")]: {
      width: "auto",
    },
  },
  results_buttons: {
    marginTop: 15,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  button_dark: {
    "& .MuiButton-label": {
      color: theme.palette.text.primary,
    },
    marginLeft: 10,
  },
}));
