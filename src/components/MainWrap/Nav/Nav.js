import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import { useScreenSize } from "@context/ScreenSize";
import Link from "next/link";

import panels from "@constants/panels";

import PanelsMenu from "./PanelsMenu/PanelsMenu";
import MobileMenu from "./MobileMenu/MobileMenu";

import EmailIcon from "@material-ui/icons/Email";
import RoomIcon from "@material-ui/icons/Room";
import PhoneIcon from "@material-ui/icons/Phone";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { Container, Button, Typography } from "@material-ui/core";
import useGradients from "@styles/gradients";
import useBackdrops from "@styles/backdrops";
import useStyles from "./styles";

const Nav = () => {
  const classes = useStyles();
  const screen = useScreenSize();
  const gradients = useGradients();
  const backdrops = useBackdrops();
  const [buttonHover, setButtonHover] = useState(false);
  const [menuHover, setMenuHover] = useState(false);

  const handleMenuHover = () => {
    setMenuHover(true);
  };
  const handleMenuLeave = () => {
    setMenuHover(false);
  };

  const handleClick = () => {
    setButtonHover(false);
    setMenuHover(false);
  };

  return (
    <>
      <AnimatePresence>
        {buttonHover + menuHover > 0 && (
          <motion.div
            className={classes.blur_overlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, type: "tween" }}
          />
        )}
      </AnimatePresence>
      <motion.nav
        className={classes.nav}
        transition={{ duration: 0.2, type: "tween" }}
      >
        <Container maxWidth="lg" style={{ position: "relative", padding: 0 }}>
          <div className={`${classes.nav_primary}`}>
            {!screen.xs && (
              <div className={`${classes.contact_bar} ${backdrops.secondary}`}>
                <Typography variant="body2" className={classes.contact_item}>
                  <PhoneIcon /> (310) 344-4614
                </Typography>
                <Typography variant="body2" className={classes.contact_item}>
                  <EmailIcon /> info@turnkeytests.com
                </Typography>
                <Typography variant="body2" className={classes.contact_item}>
                  <RoomIcon /> {!screen.sm && "200 S Virgina St 8th Floor, "}
                  Reno, NV 89501
                </Typography>
                {!screen.md && (
                  <Typography variant="body2" className={classes.contact_item}>
                    <QueryBuilderIcon /> 8:00am - 7:00pm, Mon - Sunday
                  </Typography>
                )}
              </div>
            )}
            <div
              className={`${classes.nav_bar} ${classes.nav_bar_default} ${
                buttonHover + menuHover > 0 ? classes.nav_bar_no_radius : ""
              }
                `}
            >
              <Link href="/" passHref>
                <a>
                  <img
                    src="/img/logo-dark.svg"
                    className={`${classes.nav_brand} ${classes.nav_brand_default}`}
                  />
                </a>
              </Link>
              {!screen.sm ? (
                <>
                  <div className={classes.nav_links} size="medium">
                    <Link href="/panels" passHref>
                      <a>
                        <Typography
                          onMouseEnter={() => setButtonHover(true)}
                          onMouseLeave={() => setButtonHover(false)}
                          variant="button"
                          className={classes.tests_link + " text-flex"}
                        >
                          Test Menu <ArrowDropDownIcon />
                        </Typography>
                      </a>
                    </Link>
                    <Link href="/about" passHref>
                      <a>
                        <Typography
                          variant="button"
                          className={classes.nav_link}
                        >
                          About
                        </Typography>
                      </a>
                    </Link>
                    <Link href="/clients" passHref>
                      <a>
                        <Typography
                          variant="button"
                          className={classes.nav_link}
                        >
                          Clients
                        </Typography>
                      </a>
                    </Link>
                    <Link href="/blog" passHref>
                      <a>
                        <Typography
                          variant="button"
                          className={classes.nav_link}
                        >
                          Blog
                        </Typography>
                      </a>
                    </Link>

                    <Link href="/contact" passHref>
                      <Button
                        id="gradient-secondary"
                        variant="contained"
                        color="inherit"
                        className={classes.nav_link}
                        color="secondary"
                      >
                        Contact
                      </Button>
                    </Link>
                  </div>
                  <Link href="/panels" passHref>
                    <a
                      className={classes.tests_button_overlay}
                      onMouseEnter={handleMenuHover}
                      onMouseLeave={handleMenuLeave}
                    />
                  </Link>
                </>
              ) : (
                <MobileMenu />
              )}
            </div>
            {!screen.sm && (
              <PanelsMenu
                onHover={handleMenuHover}
                onLeave={handleMenuLeave}
                handleClick={handleClick}
                hover={buttonHover + menuHover}
              />
            )}
          </div>
        </Container>
      </motion.nav>
    </>
  );
};

export default Nav;
