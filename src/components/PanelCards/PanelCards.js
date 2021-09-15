import Image from "next/image";
import Link from "next/link";
import useInterval from "react-useinterval";
import { useState, useEffect } from "react";
import panels from "@constants/panels";
import Swipe from "react-easy-swipe";
import { useScreenSize } from "@context/ScreenSize";

import WatchLaterIcon from "@material-ui/icons/WatchLater";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { Container, Typography } from "@material-ui/core";
import useBackdrops from "@styles/backdrops";
import useGradients from "@styles/gradients";
import useStyles from "./styles";

const PanelCards = ({ backdrop, title, overline, desc, size }) => {
  const classes = useStyles();
  const backdrops = useBackdrops();
  const gradients = useGradients();
  const screen = useScreenSize();

  const [mobile, setMobile] = useState(false);
  const [itemWidth, setItemWidth] = useState(0);
  const [delay, setDelay] = useState(5000);
  const [x, setX] = useState(0);

  useEffect(() => {
    const box = document
      .getElementById("panels-container")
      .getBoundingClientRect();
    const width = box.width;
    if (width >= 960) {
      setItemWidth(Math.floor(width / 3));
      setMobile(false);
    } else if (width >= 600) {
      setItemWidth(Math.floor(width / 2));
      setMobile(true);
    } else {
      setItemWidth(Math.floor(width));
      setMobile(true);
    }
    setX(0);
  }, [screen]);

  const [indexes, setIndexes] = useState(0);
  useEffect(() => {
    const newIndexes = panels.map((panel, i) => {
      if (i === 0) {
        return 0;
      } else {
        return Math.round(itemWidth * i);
      }
    });
    setIndexes(newIndexes);
  }, [itemWidth]);

  const handleSlide = () => {
    const maxWidth = (panels.length - 1) * itemWidth;
    if (itemWidth > 100) {
      if (x < maxWidth) {
        setX(Math.round(x + itemWidth));
      } else {
        setX(0);
      }
    }
  };
  useInterval(handleSlide, delay);

  const handleClick = (i) => {
    setDelay(undefined);
    setX(indexes[i]);
  };

  const slideRight = () => {
    setDelay(undefined);
    const currentIndex = indexes.indexOf(x);
    if (currentIndex === indexes.length - 1) {
      setX(indexes[0]);
    } else {
      setX(indexes[currentIndex + 1]);
    }
  };

  const slideLeft = () => {
    setDelay(undefined);
    const currentIndex = indexes.indexOf(x);
    if (currentIndex === 0) {
      setX(indexes[indexes.length - 1]);
    } else {
      setX(indexes[currentIndex - 1]);
    }
  };

  let colorClass = classes.secondary_light;

  return (
    <section
      id="panel-slider"
      style={{ maxWidth: "100vw", overflow: "hidden" }}
      className={"padding " + classes.section}
    >
      <Container maxWidth="lg" className={classes.text_section}>
        <Typography
          variant="overline"
          className={`overline ${colorClass}`}
          align="center"
        >
          {overline}
        </Typography>
        <Typography
          variant={size === "lg" ? "h2" : "h3"}
          className={classes.text_default}
          align="center"
        >
          {title}
        </Typography>
        <Typography
          variant={size === "lg" ? "body1" : "body2"}
          className={`${classes.text_default} ${classes.desc}`}
          align="center"
        >
          {desc}
        </Typography>
      </Container>
      <Swipe onSwipeLeft={slideRight} onSwipeRight={slideLeft}>
        <Container maxWidth="lg" className={classes.container}>
          <div
            className={classes.arrow + " " + classes.arrow_left}
            onClick={slideLeft}
          >
            <ArrowBackIosIcon />
          </div>
          <div
            className={classes.arrow + " " + classes.arrow_right}
            onClick={slideRight}
          >
            <ArrowForwardIosIcon />
          </div>
          <div className={classes.caroseul_container} id="panels-container">
            <div
              style={{
                transform: `translateX(${mobile ? 0 : itemWidth}px)`,
              }}
            >
              <ul
                className={classes.caroseul_track}
                style={{
                  transform: `translateX(-${x}px)`,
                }}
              >
                {panels.map((panel, i) => (
                  <li
                    className={`${classes.caroseul_item} ${
                      x === indexes[i]
                        ? classes.item_active
                        : x === indexes[i] + itemWidth ||
                          x === indexes[i] - itemWidth
                        ? classes.item_inactive
                        : classes.item_offpage
                    }`}
                    style={{ width: itemWidth }}
                  >
                    <Link href={`/panels/${panel.slug}`} passHref>
                      <a
                        className={`${classes.panel} ${
                          x === indexes[i]
                            ? classes.panel_active
                            : x === indexes[i] + itemWidth ||
                              x === indexes[i] - itemWidth
                            ? `${classes.panel_inactive} ${
                                indexes[i] < x
                                  ? classes.inactive_left
                                  : classes.inactive_right
                              }`
                            : `${classes.panel_offpage} ${
                                indexes[i] < x
                                  ? classes.offpage_left
                                  : classes.offpage_right
                              }`
                        }`}
                      >
                        <div className={classes.panel_media}>
                          <div className={classes.img_holder}>
                            {/* <Image
                              src={`/img/panels/vid-previews/${panel.vid.preview}`}
                              blurDataURL={panel.vid.blur}
                              placeholder="blur"
                              layout="fill"
                              objectFit="cover"
                              objectPosition="center"
                              className={classes.img}
                            /> */}
                            <Image
                              src={`/img/panels/${panel.img.src}`}
                              blurDataURL={panel.img.blur}
                              placeholder="blur"
                              layout="fill"
                              objectFit="cover"
                              objectPosition="center"
                              className={classes.img}
                            />
                            <div className={classes.img_overlay}>
                              <div
                                className={`${classes.overlay_gradient} ${gradients.secondary_tilt}`}
                              />
                            </div>
                          </div>
                        </div>
                        <div className={classes.panel_content}>
                          <Typography variant="body1" gutterBottom>
                            <strong>{panel.title}</strong>
                          </Typography>
                          <Typography variant="body2">{panel.desc}</Typography>
                          <div className={classes.chip_block}>
                            <div
                              className={`${classes.content_chip} ${backdrops.secondary_light}`}
                            >
                              <WatchLaterIcon />
                              <Typography variant="overline">
                                {panel?.turnaround
                                  ? panel.turnaround
                                  : "Varies"}
                              </Typography>
                            </div>
                            <ArrowForwardIosIcon
                              className={classes.chip_arrow}
                            />
                          </div>
                        </div>
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className={classes.bullets}>
            {panels.map((panel, i) => (
              <div
                className={`${classes.bullet}
                  ${
                    x === indexes[i]
                      ? classes.bullet_active
                      : classes.bullet_inactive
                  }`}
                id={`${panel.slug}-bullet`}
                onClick={() => handleClick(i)}
              />
            ))}
          </div>
        </Container>
      </Swipe>
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

export default PanelCards;
