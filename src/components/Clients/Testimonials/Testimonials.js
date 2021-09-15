import { useState, useEffect } from "react";
import Image from "next/image";
import useInterval from "react-useinterval";
import testimonials from "@constants/testimonials";
import Swipe from "react-easy-swipe";
import { useScreenSize } from "@context/ScreenSize";

import { Container, Typography } from "@material-ui/core";
import InsertCommentIcon from "@material-ui/icons/InsertComment";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import useStyles from "./styles";

const Testimonials = () => {
  const classes = useStyles();
  const screen = useScreenSize();

  const [mobile, setMobile] = useState(false);
  const [itemWidth, setItemWidth] = useState(0);
  const [delay, setDelay] = useState(8000);
  const [x, setX] = useState(0);

  useEffect(() => {
    const box = document
      .getElementById("testimonials-container")
      .getBoundingClientRect();
    setItemWidth(box.width);
    setX(0);
  }, [screen]);

  const [indexes, setIndexes] = useState(0);
  useEffect(() => {
    const newIndexes = testimonials.map((t, i) => {
      if (i === 0) {
        return 0;
      } else {
        return Math.round(itemWidth * i);
      }
    });
    setIndexes(newIndexes);
  }, [itemWidth]);

  const handleSlide = () => {
    const maxWidth = (testimonials.length - 1) * itemWidth;
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

  return (
    <section id="testimonials" className={classes.section}>
      <Swipe onSwipeLeft={slideRight} onSwipeRight={slideLeft}>
        <Container
          maxWidth="lg"
          className={classes.container}
          id="testimonials-container"
        >
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
          <Typography
            variant="overline"
            align="center"
            className={classes.intro}
          >
            <InsertCommentIcon color="primary" /> Words from our clients
          </Typography>
          <div className={classes.caroseul_container} id="panels-container">
            <ul
              className={classes.caroseul_track}
              style={{
                transform: `translateX(-${x}px)`,
              }}
            >
              {testimonials.map((t, i) => (
                <li
                  className={classes.caroseul_item}
                  style={{ width: itemWidth }}
                >
                  <div
                    className={`${classes.testimonial} ${
                      x === indexes[i]
                        ? classes.testimonial_active
                        : x === indexes[i] + itemWidth ||
                          x === indexes[i] - itemWidth
                        ? `${classes.testimonial_inactive} ${
                            indexes[i] < x
                              ? classes.inactive_left
                              : classes.inactive_right
                          }`
                        : `${classes.testimonial_offpage} ${
                            indexes[i] < x
                              ? classes.offpage_left
                              : classes.offpage_right
                          }`
                    }`}
                  >
                    <div className={classes.imgs}>
                      <Image
                        src={`/img/${t.img}`}
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                      />
                      <div className={classes.logo_overlay}>
                        <Image
                          src={`/img/${t.logo}`}
                          width={180}
                          height={120}
                          objectFit="contain"
                          objectPosition="center"
                        />
                      </div>
                    </div>
                    <div className={classes.text}>
                      <Typography variant="body1" className={classes.body}>
                        <span className={classes.quote_1}>"</span>
                        {t.review}
                        <span className={classes.quote}>"</span>
                      </Typography>
                      <div className={classes.contact}>
                        <div className={classes.contact_info}>
                          <Typography variant="h6" className={classes.name}>
                            <strong>{t.name}</strong>
                          </Typography>
                          <Typography variant="body2" className={classes.title}>
                            {t.title}
                          </Typography>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className={classes.bullets}>
            {testimonials.map((t, i) => (
              <div
                className={`${classes.bullet}
                  ${
                    x === indexes[i]
                      ? classes.bullet_active
                      : classes.bullet_inactive
                  }`}
                id={`${t.name}-bullet`}
                onClick={() => handleClick(i)}
              />
            ))}
          </div>
        </Container>
      </Swipe>
      <div className={`${classes.backdrop} grey`} />
    </section>
  );
};

export default Testimonials;
