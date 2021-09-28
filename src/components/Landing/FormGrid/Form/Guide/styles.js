import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  stepper: {
    padding: 0,
    "& .MuiStepLabel-active, .MuiStepLabel-completed, .MuiStepIcon-active, .MuiStepIcon-completed":
      {
        color: `${theme.palette.primary.main} !important`,
      },
    "& .MuiStepIcon-root": {
      color: theme.palette.text.primary,
    },
    "& .MuiStepConnector-line": {
      borderColor: theme.palette.text.primary,
    },
    "& .MuiStepConnector-active": {
      "& .MuiStepConnector-line": {
        borderColor: theme.palette.primary.main,
      },
    },
  },
}));
