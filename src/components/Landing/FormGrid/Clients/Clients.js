import Image from "next/image";
import { useState, useEffect } from "react";

import SwipeableViews from "react-swipeable-views";

import useStyles from "./styles";

const Clients = ({ count }) => {
  const classes = useStyles();

  let clients = [[], [], [], []];

  let count4 = Math.floor(count / 4 + 1);

  for (let i = 1; i <= count + 1; i++) {
    let test = i <= count4 ? 0 : i <= count4 * 2 ? 1 : i <= count4 * 3 ? 2 : 3;
    clients[test].push(
      <div className={classes.client} key={"client-" + i}>
        <Image
          key={i}
          src={`/img/client-${i}.png`}
          layout="fill"
          objectFit="contain"
          objectPosition="center"
        />
      </div>
    );
  }

  const [index, setIndex] = useState(0);
  useEffect(() => {
    setTimeout(slide, 4500);
  }, [index]);

  const slide = () => {
    index === 3 ? setIndex(0) : setIndex(index + 1);
  };

  return (
    <aside id="awards">
      <SwipeableViews index={index}>
        <div className={classes.clients}>{clients[0]}</div>
        <div className={classes.clients}>{clients[1]}</div>
        <div className={classes.clients}>{clients[2]}</div>
        <div className={classes.clients}>{clients[3]}</div>
      </SwipeableViews>
    </aside>
  );
};

export default Clients;
