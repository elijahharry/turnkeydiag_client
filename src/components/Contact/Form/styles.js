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
  background_text: {},
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
    overflow: "hidden",
    borderRadius: 6,
    color: theme.palette.text.primary,
    border: `2px solid ${theme.palette.grey.dark}`,
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
    },
    [theme.breakpoints.down("sm")]: {
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
      backgroundColor: theme.palette.grey.light,
      borderRadius: 5,
    },
    "& .MuiSelect-root": {
      width: 300,
    },
  },
  fields_row: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "stretch",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  input: {
    margin: "0 0 20px 0",
  },
  left: {
    marginRight: 10,
    [theme.breakpoints.down("xs")]: {
      marginRight: 0,
    },
  },
  notes: {
    "& .MuiFormLabel-root": {
      maxWidth: "90%",
    },
  },
  right: {
    marginLeft: 10,
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
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
    // "& .Mui-disabled": {
    //   backgroundColor: `${theme.palette.primary} !important`,
    //   // border: `1px solid ${theme.palette.secondary.main}`,
    //   // "& span": {
    //   //   color: "#fff",
    //   // },
    // },
    "& .MuiButton-label": {
      color: `#fff`,
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
    "& .Mui-focused, .Mui-checked": {
      color: `${theme.palette.secondary.main} !important`,
    },
    "& .MuiFormControlLabel-root": {
      color: theme.palette.text.primary,
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
    marginBottom: 5,
    marginTop: -5,
    textAlign: "center",
  },
}));
