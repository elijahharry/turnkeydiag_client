import { useScreenSize } from "@context/ScreenSize";

import { Stepper, Step, StepLabel } from "@material-ui/core";
import useStyles from "./styles";

const Guide = ({ step }) => {
  const classes = useStyles();
  const screen = useScreenSize();
  const vertical = screen.width >= 900 ? false : true;

  const steps = [
    "Fill out the form",
    "Submit your information",
    "Wait for response",
  ];

  return (
    <Stepper
      activeStep={step}
      alternativeLabel={vertical}
      className={classes.stepper}
    >
      {steps.map((label) => {
        const stepProps = {};
        return (
          <Step key={label} {...stepProps}>
            <StepLabel>{label}</StepLabel>
          </Step>
        );
      })}
    </Stepper>
  );
};

export default Guide;
