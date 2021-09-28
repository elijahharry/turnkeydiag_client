import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  certifications: {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  cert: {
    position: "relative",
    height: 140,
    flexGrow: 1,
    flexBasis: "42%",
    margin: 15,
    filter: "grayscale(100%)",
    opacity: 0.8,
    transition: "opacity 250ms, filter 300ms",
    "&:hover": {
      opacity: 1,
      filter: "grayscale(0%)",
    },
  },
}));
