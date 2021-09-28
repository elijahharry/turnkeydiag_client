import Link from "next/link";

import useStyles from "./styles";
import { Hidden, Button } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import FeedbackIcon from "@material-ui/icons/Feedback";

const Brand = () => {
  const classes = useStyles();
  return (
    <nav id="brand">
      <div className={`container ${classes.nav}`}>
        <Link href="/" passHref>
          <a>
            <img src="/img/logo-dark.svg" className={classes.nav__brand} />
          </a>
        </Link>
        <div className={classes.nav__links}>
          <Hidden xsDown>
            <Link href="/" passHref>
              <Button className={classes.links_default}>
                <HomeIcon /> Home
              </Button>
            </Link>
          </Hidden>
          <Link href="#testimonials" passHref>
            <Button
              variant="contained"
              className={classes.links_contained}
              color="primary"
              size="large"
            >
              <FeedbackIcon /> Testimonials
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
export default Brand;
