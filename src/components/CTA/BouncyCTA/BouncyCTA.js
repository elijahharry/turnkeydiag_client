import { Container, Typography } from "@material-ui/core";
import HelpIcon from "@material-ui/icons/Help";

import useGradients from "@styles/gradients";
import useStyles from "./styles";

const BouncyCTA = ({ color, content }) => {
  const classes = useStyles();
  const gradients = useGradients();

  let gradientsClass = gradients.primary;
  let textClass = classes.text_light;
  let selectClass = classes.dropdown_default;
  switch (color) {
    case "primary":
      gradientsClass = gradients.primary;
      break;
    case "secondary":
      gradientsClass = gradients.secondary;
      break;
    case "blue":
      gradientsClass = gradients.blue;
      break;
    case "lightblue":
      gradientsClass = gradients.lightblue;
      break;
    case "white":
      gradientsClass = gradients.white;
      textClass = classes.text_dark;
      selectClass = classes.dropdown_lightblue;
      break;
    case "primary_light":
      gradientsClass = gradients.primary_light;
      textClass = classes.text_dark;
      selectClass = classes.dropdown_transparent;
      break;
  }
  return (
    <div className={`${gradientsClass} ${textClass}`}>
      <Container maxWidth="lg" className={classes.cta_content}>
        <HelpIcon />
        <Typography variant="h6">
          Drop your turnaround times for diagnostic tests by ~2 days
        </Typography>
      </Container>
    </div>
  );
};

export default BouncyCTA;
