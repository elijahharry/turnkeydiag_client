import { useScreenSize } from "@context/ScreenSize";

import { Stepper, Step, StepLabel } from "@material-ui/core";
import useStyles from "./styles";

const Guide = ({ step }) => {
  const classes = useStyles();
  const screen = useScreenSize();

  const steps = ["Fill out the form", "Schedule consultation"];

  return (
    <Stepper
      activeStep={step}
      alternativeLabel={true}
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
