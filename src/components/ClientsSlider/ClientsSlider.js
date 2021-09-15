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

const Clients = () => {
  const classes = useStyles();
  const backdrops = useBackdrops();
  const gradients = useGradients();
  const screen = useScreenSize();

  const [mobile, setMobile] = useState(false);
  const [itemWidth, setItemWidth] = useState(0);
  const [delay, setDelay] = useState(5000);
  const [x, setX] = useState(0);
  const [clients, setClients] = useState([]);

  useEffect(() => {
    let clientImgs = [];
    for (let i = 1; i < 22; i++) {
      clientImgs.push(`client-${i}.png`);
    }
    setClients(clientImgs);
  }, []);

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

  return (
    <section
      id="panel-slider"
      style={{ maxWidth: "100vw", overflow: "hidden" }}
    >
      <Swipe onSwipeLeft={slideRight} onSwipeRight={slideLeft}>
        <div className={classes.section}>
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
                  {clients.map((client, i) => (
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
                      <div
                        className={`${classes.client} ${
                          x === indexes[i]
                            ? classes.client_active
                            : x === indexes[i] + itemWidth ||
                              x === indexes[i] - itemWidth
                            ? classes.client_inactive
                            : `${classes.client_offpage} ${
                                indexes[i] < x
                                  ? classes.offpage_left
                                  : classes.offpage_right
                              }`
                        }`}
                      >
                        <Image
                          src={`/img/${client}`}
                          layout="fill"
                          objectFit="contain"
                          objectPosition="center"
                          className={classes.img}
                        />
                      </div>
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
        </div>
      </Swipe>
    </section>
  );
};

export default Clients;
