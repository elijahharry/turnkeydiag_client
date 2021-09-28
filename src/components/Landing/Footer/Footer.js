import Image from "next/image";
import Link from "next/link";

import { Typography } from "@material-ui/core";
import useStyles from "./styles";

const Footer = () => {
  const classes = useStyles();
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className={classes.footer_brand}>
        <img src="/img/logo-light.svg" width="400px" />
      </div>
      <nav className={`container ${classes.footer_links}`}>
        <Link href="/" passHref>
          <a>
            <Typography variant="body1" align="center" color="inherit">
              A turnkey solution for all your diagnostic needs.
            </Typography>
          </a>
        </Link>
        <Link href="/" passHref>
          <a>
            <Typography variant="body1" align="center" color="primary">
              Home
            </Typography>
          </a>
        </Link>
        <Link href="/about" passHref>
          <a>
            <Typography variant="body1" align="center" color="primary">
              About
            </Typography>
          </a>
        </Link>
        <Link href="/clients" passHref>
          <a>
            <Typography variant="body1" align="center" color="primary">
              Clients
            </Typography>
          </a>
        </Link>
        <Link href="/panels" passHref>
          <a>
            <Typography variant="body1" align="center" color="primary">
              Panels
            </Typography>
          </a>
        </Link>
      </nav>
      <div className={`${classes.footer_copyright} container`}>
        <Typography variant="body2" align="center" color="inherit">
          © TurnKey Diagnostics {year}. All rights reserved.
        </Typography>
      </div>
    </footer>
  );
};

export default Footer;
