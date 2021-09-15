import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  clients: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
  },
  client: {
    margin: theme.spacing(2),
    transition: "all 300ms",
    "&:hover": {
      transform: "scale(1.2)",
    },
  },
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  desc: {
    maxWidth: 500,
  },
}));
