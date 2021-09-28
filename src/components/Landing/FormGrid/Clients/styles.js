import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  clients: {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  client: {
    position: "relative",
    flexGrow: 1,
    margin: 15,
    flexBasis: "42%",
    height: 140,
    transition: "opacity 250ms, filter 300ms",
    filter: "grayscale(100%)",
    opacity: 0.8,
    "&:hover": {
      opacity: 1,
      filter: "grayscale(0%)",
    },
  },
}));
