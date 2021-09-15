import Image from "next/image";
import Link from "next/link";
import parse from "html-react-parser";
import { useEffect, useState } from "react";
import Chart from "@components/Svgs/Chart";

import ReactPlayer from "react-player";

import { Container, Typography, SvgIcon } from "@material-ui/core";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

import useBackdrops from "@styles/backdrops";
import useGradients from "@styles/gradients";
import useStyles from "./styles";
import { useScreenSize } from "@context/ScreenSize";

const BenefitCTA = ({ content, backdrop, img }) => {
  const classes = useStyles();
  const backdrops = useBackdrops();
  const gradients = useGradients();
  const screen = useScreenSize();

  const [mediaDim, setMediaDim] = useState({ height: 0, width: 0 });
  useEffect(() => {
    const box = document
      .getElementById("panel-benefit")
      .getBoundingClientRect();
    setMediaDim({ height: box.height, width: box.width });
  }, [screen]);

  console.log(screen);

  return (
    <section id="panels-select" className={classes.section}>
      <Container maxWidth="lg" style={{ padding: 0 }}>
        <div className={`${classes.cta}`}>
          <div className={classes.cta_content}>
            <div className={classes.content_item} id="panel-benefit">
              <SvgIcon className={classes.icon} color="primary">
                <Chart />
              </SvgIcon>
              <div id="benefit-text-col" className={classes.item_col}>
                <Typography
                  variant="h6"
                  className={classes.title}
                  align={screen.width > 600 ? "left" : "center"}
                >
                  {content?.title && content.title}
                </Typography>
                <Typography
                  variant="body2"
                  className={classes.desc}
                  align={screen.width > 600 ? "left" : "center"}
                >
                  {content?.desc && content.desc}
                </Typography>
              </div>
            </div>
            {screen.width > 600 && (
              <Link href="#quick-contact" passHref>
                <a className={`${classes.cta_arrow} ${backdrops.secondary}`}>
                  <ArrowForwardIcon />
                </a>
              </Link>
            )}
          </div>
          {screen.width > 600 && (
            <div
              className={classes.cta_media}
              style={{ height: screen.width > 960 ? "100%" : mediaDim.height }}
            >
              <div className={classes.media_overlay}>
                <div
                  className={`${classes.overlay_gradient} ${gradients.primary_tilt}`}
                />
              </div>
              <Image
                src={`/img/panels/${img.src}`}
                blurDataURL={img.blur}
                placeholder="blur"
                width={400}
                height={200}
                objectFit="cover"
                objectPosition="center"
                className={classes.img}
              />
            </div>
          )}
          {screen.width <= 600 && (
            <div className={classes.cta_media_mobile}>
              <div className={classes.media_mobile}>
                <div className={classes.media_overlay}>
                  <div
                    className={`${classes.overlay_gradient} ${gradients.primary}`}
                  />
                </div>
                <Image
                  src={`/img/panels/${img.src}`}
                  blurDataURL={img.blur}
                  placeholder="blur"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                />
              </div>
              <Link href="#quick-contact" passHref>
                <a
                  className={`${classes.cta_arrow_mobile} ${gradients.secondary_tilt}`}
                >
                  <ArrowForwardIcon />
                </a>
              </Link>
            </div>
          )}
        </div>
      </Container>
      <div
        className={`${classes.background} ${classes.background_overlay} ${
          backdrop?.backdrop && backdrops[backdrop.backdrop]
        }`}
        style={{
          opacity: backdrop?.opacity ? backdrop.opacity : 0,
        }}
      />
    </section>
  );
};

export default BenefitCTA;
