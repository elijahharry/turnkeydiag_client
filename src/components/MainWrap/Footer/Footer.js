import Link from "next/link";
import panels from "@constants/panels";
import { useScreenSize } from "@context/ScreenSize";
import { openCalendly } from "@components/Calendly/Calendly";

import { Container, Typography } from "@material-ui/core";
import PhoneIcon from "@material-ui/icons/Phone";
import RoomIcon from "@material-ui/icons/Room";
import EmailIcon from "@material-ui/icons/Email";
import useStyles from "./styles";

const Footer = () => {
  const classes = useStyles();
  const screen = useScreenSize();

  const year = new Date().getFullYear();

  const contact = [
    <div className={classes.contact}>
      <div className={classes.contact_item}>
        <div className={classes.avatar}>
          <PhoneIcon />
        </div>
        <Typography
          variant="body2"
          align="left"
          className={classes.contact_text}
        >
          (310) 344-4614
        </Typography>
      </div>
      <div className={classes.contact_item}>
        <div className={classes.avatar}>
          <EmailIcon />
        </div>
        <Typography
          variant="body2"
          align="left"
          className={classes.contact_text}
        >
          info@turnkeytests.com
        </Typography>
      </div>
      <div className={classes.contact_item}>
        <div className={classes.avatar}>
          <RoomIcon />
        </div>
        <Typography
          variant="body2"
          align="left"
          className={classes.contact_text}
        >
          9615 Jessica Ct
          <br />
          Reno, NV 89521
        </Typography>
      </div>
    </div>,
  ];

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <div className={classes.content}>
          <div className={classes.col + " " + classes.col_30}>
            <div className={`${classes.top_row} ${classes.top_brand}`}>
              <img src="/img/logo-light.svg" className={classes.logo} />
            </div>
            <Typography
              variant="body2"
              align={screen.width >= 600 ? "left" : "center"}
            >
              Turnkey Diagnostics is a laboratory testing marketplace solution
              for Consumers and Businesses. Our innovative approach bridges the
              gap between labs, patients and physicians
            </Typography>
            {screen.width >= 600 && contact}
          </div>
          <div
            className={`${classes.col} ${classes.col_30} ${classes.padding_left}`}
          >
            {screen.width > 600 && (
              <div className={`${classes.top_row} ${classes.top_text}`}>
                <Typography variant="body1" className={classes.subheader}>
                  Pages
                </Typography>
              </div>
            )}
            <ul className={classes.links}>
              <li className={classes.link}>
                <Link href="/" passHref>
                  <a>
                    <Typography
                      variant="body2"
                      align={screen.width >= 600 ? "left" : "center"}
                    >
                      Homepage
                    </Typography>
                  </a>
                </Link>
              </li>
              <li className={classes.link}>
                <Link href="/about" passHref>
                  <a>
                    <Typography
                      variant="body2"
                      align={screen.width >= 600 ? "left" : "center"}
                    >
                      About
                    </Typography>
                  </a>
                </Link>
              </li>
              <li className={classes.link}>
                <Link href="/contact" passHref>
                  <a>
                    <Typography
                      variant="body2"
                      align={screen.width >= 600 ? "left" : "center"}
                    >
                      Contact
                    </Typography>
                  </a>
                </Link>
              </li>
              <li className={classes.link}>
                <a onClick={openCalendly}>
                  <Typography
                    variant="body2"
                    align={screen.width >= 600 ? "left" : "center"}
                  >
                    Consultation
                  </Typography>
                </a>
              </li>
            </ul>
            {screen.width < 600 && contact}
          </div>
          {screen.width > 1100 && (
            <div className={`${classes.col} ${classes.col_40}`}>
              <div className={`${classes.top_row} ${classes.top_text}`}>
                <Typography variant="body1" className={classes.subheader}>
                  Panels
                </Typography>
              </div>
              <ul className={classes.links}>
                {panels.map((panel) => (
                  <li className={classes.link}>
                    <Link href={`/panels/${panel.slug}`} passHref>
                      <a>
                        <Typography variant="body2" align="left">
                          {panel.title}
                        </Typography>
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </Container>
      <div className={classes.copyright}>
        <Container maxWidth="lg">
          <Typography variant="body2">
            Copyright {year} TurnKey Diagnostics. All rights reserved.
          </Typography>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
