import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  footer_brand: {
    height: 20,
    padding: 20,
    height: 250,
    backgroundColor: theme.palette.text.primary,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
  },
  footer_links: {
    width: "100%",
    color: theme.palette.text.primary,
    display: "flex",
    justifyContent: "center",
    "& p": {
      margin: 10,
    },
  },
  footer_copyright: {
    borderTop: "2px solid #f8f8f8",
    paddingTop: 10,
    marginBottom: 10,
  },
}));
