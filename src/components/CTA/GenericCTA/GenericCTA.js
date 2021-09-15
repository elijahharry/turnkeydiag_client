import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import panels from "@constants/panels";
import Chart from "@components/Svgs/Chart";
import LocationMap from "@components/Svgs/LocationMap";

import ReactPlayer from "react-player";

import {
  Container,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Icon,
  SvgIcon,
} from "@material-ui/core";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

import useBackdrops from "@styles/backdrops";
import useGradients from "@styles/gradients";
import useStyles from "./styles";
import { useScreenSize } from "@context/ScreenSize";

const GenericCTA = ({ title, desc, img, backdrop, link, icon }) => {
  const classes = useStyles();
  const backdrops = useBackdrops();
  const gradients = useGradients();
  const screen = useScreenSize();

  let iconComponent = [];

  switch (icon) {
    case "location":
      iconComponent.push(<LocationMap />);
      break;
    case "panel":
      iconComponent.push(<Chart />);
      break;
  }

  return (
    <section id="panels-select" className={classes.section}>
      <Container maxWidth="lg" style={{ padding: 0 }}>
        <div className={`${classes.cta}`}>
          <div className={classes.cta_content}>
            <div className={classes.content_item}>
              {!screen.xs && iconComponent.length > 0 && (
                <SvgIcon className={classes.icon} color="primary">
                  {iconComponent}
                </SvgIcon>
              )}
              <div className={classes.item_col}>
                <Typography
                  variant="h5"
                  className={`${classes.title} ${screen.xs && "text-flex"}`}
                >
                  {title}{" "}
                </Typography>
                {screen.width > 600 && (
                  <Typography variant="body2" className={classes.desc}>
                    {desc}
                  </Typography>
                )}
              </div>
            </div>
            <Link href={link} passHref>
              <a className={`${classes.cta_arrow} ${backdrops.secondary}`}>
                <ArrowForwardIcon />
              </a>
            </Link>
          </div>
          <div className={classes.cta_media} id="cta-media">
            <Image
              src={`/img/${img.src}`}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              placeholder="blur"
              blurDataURL={img.blur}
            />

            <div className={classes.overlay}>
              <div
                className={`${classes.overlay_gradient} ${gradients.primary}`}
              />
            </div>
          </div>
        </div>
      </Container>
      <div
        className={`${classes.background} ${classes.background_overlay} ${
          backdrop?.backdrop && backdrops[backdrop.backdrop]
        }`}
        style={{
          opacity: backdrop?.opacity ? backdrop.opacity : 0.5,
        }}
      />
    </section>
  );
};

export default GenericCTA;
