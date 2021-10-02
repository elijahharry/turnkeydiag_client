import { InlineWidget, PopupWidget, openPopupWidget } from "react-calendly";
import Image from "next/image";

import InsertInvitationIcon from "@material-ui/icons/InsertInvitation";
import { Button } from "@material-ui/core";
import useStyles from "./styles";

const Calendly = ({ prefill, justButton }) => {
  const classes = useStyles();

  const prefillFormatted = {
    name: prefill.name,
    email: prefill.email,
    phone: `+1 ${prefill.phone}`,
    customAnswers: {
      a1: prefill.company,
      a2: prefill.state,
    },
  };

  const openCalendly = () =>
    openPopupWidget({
      url: "https://calendly.com/turnkeytests/30min",
      prefill: prefillFormatted,
      pageSettings: pageSettings,
    });

  const pageSettings = {
    backgroundColor: "ffffff",
    hideEventTypeDetails: false,
    hideGdprBanner: true,
    hideLandingPageDetails: false,
    primaryColor: "#caa45d",
    textColor: "#1B3752",
  };

  const widget = (
    <PopupWidget
      branding
      color="#caa45d"
      pageSettings={pageSettings}
      prefill={prefillFormatted}
      text="Click here to schedule!"
      textColor="#ffffff"
      url="https://calendly.com/turnkeytests/30min"
    />
  );

  return (
    <>
      {justButton ? (
        <>
          <Button
            variant="contained"
            color="primary"
            onClick={() => openCalendly()}
          >
            Schedule now
          </Button>
          {widget}
        </>
      ) : (
        <>
          <InlineWidget
            branding
            color="rgba(238,34,97,1)"
            pageSettings={pageSettings}
            prefill={prefillFormatted}
            text="Click here to schedule!"
            textColor="#ffffff"
            url="https://calendly.com/popshorts/social-consultation"
            styles={{
              height: "600px",
            }}
          />
          {widget}
        </>
      )}
    </>
  );
};

export default Calendly;
