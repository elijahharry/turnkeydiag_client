import Link from "next/link";
import Image from "next/image";

import FloatingImg from "./Media/Floating/FloatingImg";
import FloatingVid from "./Media/Floating/FloatingVid";
import BackgroundImg from "./Media/Background/BackgroundImg";
import BackgroundVid from "./Media/Background/BackgroundVid";
import Blobs from "./Accents/Blobs/Blobs";

import { Container, Grid, Typography, Button } from "@material-ui/core";
import useBackdrops from "@styles/backdrops";
import useStyles from "./styles";
import { useState } from "react";

const Feature = ({ content, media, style }) => {
  const classes = useStyles();
  const backdrops = useBackdrops();
  const [randoms, setRandoms] = useState({ xs: Math.random() });

  let textColor = classes.text_primary;
  let buttonColor = classes.button_primary;
  switch (style.color) {
    case "primary":
      textColor = classes.text_primary;
      buttonColor = classes.button_primary;
      break;
    case "primary":
      textColor = classes.text_primary__dark;
      buttonColor = classes.button_primary__dark;
      break;
    case "secondary":
      textColor = classes.text_secondary + " " + classes.text_shadow__blue;
      buttonColor = classes.button_secondary;
      break;
    case "secondary_light":
      textColor = classes.text_secondary__light;
      buttonColor = classes.button_secondary__light;
      break;
    case "secondary_dark":
      textColor = classes.text_secondary__dark;
      buttonColor = classes.button_secondary__dark;
      break;
    case "secondary_primary":
      textColor = classes.text_secondary + " " + classes.text_shadow__blue;
      buttonColor = classes.button_primary;
      break;
    case "blue":
      textColor = classes.text_blue;
      buttonColor = classes.button_blue;
      break;
    case "lightblue":
      textColor = classes.text_lightblue;
      buttonColor = classes.button_lightblue;
      break;
  }

  const [hover, setHover] = useState(false);

  return (
    <section
      id={content.id}
      className={`${classes.block} ${
        style?.even_padding && classes.block_even_padding
      }`}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={0}
          className={`${classes.content} ${
            style.size === "large"
              ? classes.content_lg
              : style.size === "medium"
              ? classes.content_md
              : classes.content_default
          } ${style.flipped && classes.content_flipped} ${
            style.variant === "dark" && classes.content_dark
          }`}
        >
          <Grid
            item
            xs={12}
            md={style.text?.width ? style.text.width : 6}
            className={`${classes.content_column} ${classes.column_text} ${
              media.feature
                ? classes.column_normal
                : classes.column_full_mobile_center
            } ${
              style.text?.align === "center"
                ? classes.content_column__centered
                : classes.content_column__default
            } ${
              style.text?.padding &&
              (style.text.padding === "left"
                ? classes.content_column__left
                : classes.content_column__right)
            } ${
              media?.feature?.vid &&
              style?.flipped &&
              classes.content_column__left_xtra
            }`}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            <Typography
              variant="overline"
              gutterBottom
              className={`${classes.overline} ${textColor}`}
            >
              <strong>{content.overline}</strong>
            </Typography>
            <Typography
              variant="h3"
              gutterBottom
              className={
                style?.blobs?.main ? classes.title_blob : classes.title
              }
            >
              {content.title}
            </Typography>
            <Typography
              variant="body1"
              className={`${classes.description} 
                ${
                  style.flipped
                    ? classes.description_flipped
                    : classes.description_normal
                }`}
            >
              {content.desc}
            </Typography>
            <Link href={content.link} passHref>
              <Button
                variant="contained"
                size="large"
                className={`${classes.cta_button} ${buttonColor}`}
              >
                {content.cta}
              </Button>
            </Link>
          </Grid>
          <Grid
            item
            xs={!media.feature ? 0 : 12}
            md={style.text?.width ? 12 - style.text.width : 6}
            className={`${classes.content_column} ${classes.column_image}`}
          >
            {media.feature?.img && <FloatingImg img={media.feature.img} />}
            {media.feature?.vid && (
              <FloatingVid
                vid={media.feature.vid}
                blobs={style?.blobs}
                flipped={style?.flipped}
                size={style?.size}
              />
            )}

            {style?.blobs?.behind === "feature" && (
              <>
                {style.blobs?.feature && (
                  <div className={`${classes.blob} ${classes.blob_feature}`}>
                    <div
                      className={`${classes.blob_backdrop} ${
                        backdrops[style.blobs.feature.backdrop]
                      }`}
                      style={{
                        opacity: style.blobs?.feature?.opacity
                          ? style.blobs.feature.opacity
                          : 0.5,
                      }}
                    />
                  </div>
                )}
              </>
            )}
          </Grid>
        </Grid>
      </Container>
      <div
        className={`${classes.background} ${classes.background_overlay} ${
          style.overlay?.backdrop && backdrops[style.overlay.backdrop]
        }`}
        style={{
          opacity: style.overlay?.opacity ? style.overlay.opacity : 0.5,
        }}
      />
      <div className={`${classes.background} ${classes.background_media}`}>
        {media.background &&
          (media.background.vid ? (
            <BackgroundVid vid={media.background.vid} />
          ) : (
            <BackgroundImg img={media.background.img} />
          ))}
      </div>
      {style?.blobs && <Blobs blobs={style.blobs} />}
    </section>
  );
};

export default Feature;
