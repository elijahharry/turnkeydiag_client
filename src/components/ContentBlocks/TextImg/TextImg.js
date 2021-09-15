import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useScreenSize } from "@context/ScreenSize";
import { openCalendly } from "@components/Calendly/Calendly";
import parse from "html-react-parser";

import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import { Container, Grid, Typography, Button } from "@material-ui/core";
import useStyles from "./styles";
import useBackdrops from "@styles/backdrops";
import useGradients from "@styles/gradients";

const TextImg = ({
  id,
  overline,
  title,
  desc,
  cta,
  color,
  backdrop,
  img,
  flipped,
  border,
  padding,
  ul_flex,
  ul_height,
  lg,
}) => {
  const classes = useStyles();
  const backdrops = useBackdrops();
  const gradients = useGradients();
  const screen = useScreenSize();

  let colorClass = classes.primary;
  let descClass = classes.desc_primary;
  let imgClass = gradients.primary_vert;
  let buttonClass = classes.button_primary;
  let shadowClass;
  switch (color) {
    case "primary":
      colorClass = classes.primary;
      descClass = classes.desc_primary;
      imgClass = gradients.primary_vert;
      buttonClass = classes.button_primary;
      flipped
        ? (shadowClass = classes.shadow_primary__flipped)
        : (shadowClass = classes.shadow_primary);
      break;
    case "secondary":
      colorClass = classes.secondary;
      descClass = classes.desc_secondary;
      imgClass = gradients.secondary_vert;
      buttonClass = classes.button_secondary;
      flipped
        ? (shadowClass = classes.shadow_secondary__flipped)
        : (shadowClass = classes.shadow_secondary);
      break;
    case "secondary_light":
      colorClass = classes.secondary_light;
      descClass = classes.desc_secondary_light;
      imgClass = gradients.secondary_vert_light;
      buttonClass = classes.button_secondary_light;
      flipped
        ? (shadowClass = classes.shadow_secondary_light__flipped)
        : (shadowClass = classes.shadow_secondary_light);
      break;
  }

  if (img?.type === "transparent") {
    shadowClass = "no-shadow";
  }

  const [imgHeight, setImgHeight] = useState(0);
  useEffect(() => {
    const box = document.getElementById(`${id}-text`).getBoundingClientRect();
    screen.width > 960 ? setImgHeight(box.height + 30) : setImgHeight(350);
  }, [screen]);

  let ul_style = { margin: 0 };
  if (ul_height) {
    ul_style = {
      margin: 0,
      maxHeight: ul_height,
    };
  }

  const handleClick = () => {
    if (cta?.text === "Start with a free consult") {
      openCalendly();
    }
  };

  const [imgLoaded, setImgLoaded] = useState(false);

  useEffect(() => {
    console.log(imgLoaded);
  }, [imgLoaded]);

  return (
    <section id={id} className={classes.section}>
      <Container maxWidth="lg" className={classes.container}>
        <Grid
          container
          alignItems="stretch"
          justifyContent="center"
          spacing={0}
          className={`${flipped ? classes.grid_flipped : classes.grid} ${
            border && classes.grid_border
          } ${
            img.type !== "transparent"
              ? classes.padding_equal
              : classes.padding_normal
          }`}
        >
          <Grid
            item
            xs={12}
            md={6}
            className={`${
              img.type === "transparent" && classes.padding_bottom
            }`}
          >
            <div className={`${classes.text_col} `} id={`${id}-text`}>
              <Typography
                variant="overline"
                align={screen.width > 960 ? "left" : "center"}
                className={colorClass}
                gutterBottom
              >
                {overline}
              </Typography>
              <Typography
                align="left"
                variant={lg ? "h2" : "h3"}
                className={`${classes.title}`}
                align={screen.width > 960 ? "left" : "center"}
              >
                {title}
              </Typography>
              {Array.isArray(desc) ? (
                desc.map((p, i) => (
                  <Typography
                    variant={lg ? "body1" : "body2"}
                    className={`${classes.desc}${
                      ul_flex === "sm"
                        ? " " + classes.ul_flex_sm
                        : ul_flex
                        ? " " + classes.ul_flex
                        : ""
                    }`}
                    align={screen.width > 960 ? "left" : "center"}
                    key={`${id}-p-${i}`}
                  >
                    {Array.isArray(p) ? (
                      <ul
                        style={ul_style}
                        className={`${
                          ul_flex === "sm" ? classes.ul_nomargin : ""
                        }`}
                      >
                        {p.map((li) => (
                          <li
                            className={
                              ul_flex === "sm"
                                ? "MuiTypography-root MuiTypography-body2"
                                : ""
                            }
                          >
                            {li}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      parse(p)
                    )}
                  </Typography>
                ))
              ) : (
                <Typography
                  variant={lg ? "body1" : "body2"}
                  className={`${classes.desc}${
                    ul_flex ? " " + classes.ul_flex : ""
                  }`}
                  align={screen.width > 960 ? "left" : "center"}
                >
                  {desc}
                </Typography>
              )}
              <Link
                href={
                  cta?.link
                    ? cta.link
                    : cta?.text === "Start with a free consult"
                    ? id
                      ? `#${id}`
                      : "#"
                    : "#quick-contact"
                }
                passHref
              >
                <a onClick={handleClick}>
                  {lg ? (
                    <Button
                      variant="contained"
                      size="large"
                      className={`${classes.button} ${buttonClass}`}
                    >
                      {cta?.text ? cta.text : "Contact us today"}{" "}
                      <ArrowRightAltIcon fontSize="large" />
                    </Button>
                  ) : (
                    <Typography
                      variant="body1"
                      align="left"
                      className={`${classes.cta} ${colorClass} text-flex`}
                    >
                      {cta?.text ? cta.text : "Contact us today"}{" "}
                      <ArrowRightAltIcon fontSize="large" />
                    </Typography>
                  )}
                </a>
              </Link>
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            className={`${classes.img_col} ${lg && classes.img_col_lg} ${
              img.type === "transparent" && !imgLoaded
                ? classes.img_hide
                : classes.img_show
            }`}
          >
            {img.type === "transparent" ? (
              <Image
                src={`${
                  img?.folder === "main" ? "/img/" : "/img/panels/page-content/"
                }${img.src}`}
                layout="fill"
                objectFit="contain"
                objectPosition="bottom center"
                blurDataURL={img?.blur ? img.blur : false}
                placeholder={img?.blur ? "blur" : "empty"}
                onLoad={() => setImgLoaded(true)}
              />
            ) : (
              <div className={classes.img_half_mobile}>
                <Image
                  src={`${
                    img?.folder === "main"
                      ? "/img/"
                      : "/img/panels/page-content/"
                  }${img?.mobile_src ? img.mobile_src : img.src}`}
                  layout="fill"
                  objectFit="cover"
                  blurDataURL={img?.blur ? img.blur : false}
                  placeholder={img?.blur ? "blur" : "empty"}
                  className={classes.animate_position}
                />
              </div>
            )}
          </Grid>
          <div className={classes.bottom_shadow} />
        </Grid>
      </Container>
      <div
        className={`${classes.background} ${classes.background_overlay} ${
          backdrop?.backdrop && backdrops[backdrop.backdrop]
        }`}
        style={{
          opacity: backdrop?.opacity ? backdrop.opacity : 0,
        }}
      />
      {img.type !== "transparent" && (
        <div
          className={`${classes.img_half} ${
            flipped ? classes.left : classes.right
          }`}
        >
          <Image
            src={`${
              img?.folder === "main" ? "/img/" : "/img/panels/page-content/"
            }${img.src}`}
            layout="fill"
            objectFit="cover"
            objectPosition={`center ${flipped ? "right" : "left"}`}
            blurDataURL={img?.blur ? img.blur : false}
            placeholder={img?.blur ? "blur" : "empty"}
          />
        </div>
      )}
    </section>
  );
};

export default TextImg;
