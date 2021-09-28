import { useState } from "react";
import { openPopupWidget } from "react-calendly";

import EventAvailableIcon from "@material-ui/icons/EventAvailable";
import useStyles from "./styles";
import { Typography } from "@material-ui/core";

export const openCalendly = () =>
  openPopupWidget({
    url: "https://calendly.com/turnkeytests/30min",
    pageSettings: pageSettings,
  });

const Calendly = () => {
  const classes = useStyles();
  const [hover, setHover] = useState(false);

  return (
    <a
      className={classes.widget}
      onClick={openCalendly}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <EventAvailableIcon />
      <Typography
        variant="body2"
        className={`${classes.text} ${
          hover ? classes.text_on : classes.text_off
        }`}
      >
        Get a free consultation
      </Typography>
    </a>
  );
};

const pageSettings = {
  backgroundColor: "ffffff",
  hideEventTypeDetails: false,
  hideGdprBanner: true,
  hideLandingPageDetails: false,
  primaryColor: "#caa45d",
  textColor: "#1B3752",
};

export default Calendly;
