import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  contact: {
    padding: "50px 0 50px 0",
    position: "relative",
  },
  // all background related
  background: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
  image: {
    zIndex: -2,
  },
  overlay: {
    zIndex: -1,
  },
  background_text: {
    color: "#fff",
  },
  border: {
    position: "absolute",
    left: 0,
    width: "100%",
    height: "10px",
    zIndex: 2,
  },
  border_top: {
    top: 0,
  },
  border_bottom: {
    bottom: 0,
  },
  // end background
  paper: {
    position: "relative",
    width: "100%",
    padding: "20px 20px 20px 20px",
    height: "auto",
    margin: "10px 0 10px 0",
    backgroundColor: "#1B3752",
    overflow: "hidden",
    borderRadius: 6,
    zIndex: 0,
    "&::after": {
      content: "''",
      position: "absolute",
      zIndex: -1,
      top: 0,
      left: 0,
      height: "100%",
      width: "100%",
      backgroundImage: "url('/img/form-background.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      // filter: "blur(3px)",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  guide: {
    padding: "20px 0 20px 0",
    [theme.breakpoints.down("sm")]: {
      padding: "20px 0 20px 0",
      width: "100%",
    },
  },
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "stretch",
    "& .MuiInputBase-root": {
      overflow: "hidden",
    },
    "& .MuiFilledInput-root, .MuiFilledInput-root": {
      backgroundColor: "#fff",
      borderRadius: 5,
    },
    "& .MuiFormHelperText-root": {
      color: "#fff",
    },
    "& .MuiSelect-root": {
      width: 300,
    },
  },
  fields_row: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "stretch",
  },
  input: {
    margin: "0 0 10px 0",
  },
  left: {
    marginRight: 6,
  },
  right: {
    marginLeft: 6,
  },
  select: {
    "& .MuiFormLabel-root": {
      color: "#5b6c7b",
      zIndex: 10,
    },
    "& .MuiInputLabel-formControl": {
      transform: "translate(12px, 20px) scale(1)",
    },
    "& .MuiInputLabel-shrink": {
      transform: "translate(11px, 8px) scale(.75)",
      transformOrigin: "top left",
    },
  },
  feedback: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  feedback_icon: {
    marginRight: 10,
  },
  submit: {
    "& .Mui-disabled": {
      // backgroundColor: `${theme.palette.text.primary} !important`,
      backgroundColor: `#fff !important`,
      "& .MuiButton-label": {
        color: `${theme.palette.text.primary} !important`,
      },
    },
    "& svg": {
      marginRight: ".3rem",
    },
  },
  check_row: {
    marginTop: 15,
    marginBottom: 8,
    width: "100%",
    "& .MuiFormControl-root, legend": {
      width: "100%",
    },
    "& .MuiFormGroup-row": {
      justifyContent: "center",
      flexWrap: "wrap",
    },
    "& .MuiFormHelperText-root, .MuiFormLabel-root, .MuiRadio-root": {
      color: "#fff",
    },
    "& .Mui-focused, .Mui-checked": {
      color: `${theme.palette.secondary.main} !important`,
    },
    "& .MuiFormControlLabel-root": {
      marginLeft: 8,
      marginRight: 8,
      [theme.breakpoints.down("xs")]: {
        minWidth: 146,
      },
    },
  },
  form_label: {
    lineHeight: "1.5rem",
    marginBottom: ".5rem",
    textAlign: "center",
  },
  interested_text: {
    color: "#fff",
    marginBottom: 5,
    marginTop: -5,
    textAlign: "center",
  },
}));
