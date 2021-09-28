import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  header: {
    marginBottom: 40,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    "& h5": {
      maxWidth: 1200,
    },
  },
}));
