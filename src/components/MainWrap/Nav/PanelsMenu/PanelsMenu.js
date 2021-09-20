import panels from "@constants/panels";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useScreenSize } from "@context/ScreenSize";
import ReactPlayer from "react-player";
import Image from "next/image";
import Link from "next/link";

import { Typography, Container } from "@material-ui/core";
import useStyles from "./styles";
import useGradients from "@styles/gradients";

const PanelsMenu = ({ onHover, onLeave, hover, handleClick }) => {
  const classes = useStyles();
  const screen = useScreenSize();
  const gradients = useGradients();

  const [height, setHeight] = useState(0);
  useEffect(() => {
    const box = document
      .getElementById("panels-dropdown")
      .getBoundingClientRect();
    setHeight(box.height);
  }, [screen]);

  const [y, setY] = useState(0);
  useEffect(() => {
    if (hover > 0) {
      setY(0);
    } else {
      setY(`-${height}px`);
    }
  }, [hover, height]);

  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <section id="panels-menu" className={classes.container}>
      <Container
        maxWidth="lg"
        style={{ position: "relative", zIndex: 1, padding: 0 }}
      >
        <motion.div
          className={classes.dropdown}
          onMouseEnter={onHover}
          onMouseLeave={onLeave}
          initial={{ y: height > 0 ? `-${height}px` : -600 }}
          animate={{ y: y }}
          // exit={{ y: `-${height}px` }}
          transition={{ duration: 0.5 }}
          id="panels-dropdown"
          onClick={handleClick}
        >
          <div className={classes.dropdown_links}>
            {panels.map((panel) => (
              <Link href={`/panels/${panel.slug}`}>
                <a>
                  <Typography variant="body2" className={classes.link}>
                    <div className={classes.avatar}>
                      <Image
                        src={`/img/panels/vid-previews/${panel.vid.preview}`}
                        blurDataURL={panel.vid.blur}
                        placeholder="blur"
                        width={90}
                        height={90}
                        objectFit="cover"
                        objectPosition="center"
                      />
                      <div className={classes.avatar_overlay} />
                    </div>
                    {panel.short}
                  </Typography>
                </a>
              </Link>
            ))}
          </div>
          <Link href="/panels" passHref>
            <a className={classes.dropdown_cta}>
              <div className={classes.video}>
                <ReactPlayer
                  url={`${process.env.VIDEOS}microscope-diag.mp4`}
                  playsinline
                  playing
                  loop
                  width="100%"
                  height="100%"
                  muted
                  onStart={() => setVideoLoaded(true)}
                />
              </div>
              <div className={classes.cta_overlay}>
                <Typography
                  color="inherit"
                  variant="body1"
                  className={classes.cta_tagline}
                  align="center"
                >
                  Full Suite of Services
                </Typography>
                <Typography
                  color="inherit"
                  variant="button"
                  className={classes.cta_link}
                >
                  View all
                </Typography>
              </div>

              <div className={classes.video_overlay}>
                <div
                  className={gradients.secondary_vert}
                  id="cta-overlay-gradient"
                />
              </div>
            </a>
          </Link>
        </motion.div>
      </Container>
    </section>
  );
};

export default PanelsMenu;
