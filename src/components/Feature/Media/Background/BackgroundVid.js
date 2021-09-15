import { useState } from "react";
import ReactPlayer from "react-player";
import Image from "next/image";

import { useScreenSize } from "@context/ScreenSize";

import useStyles from "./styles";

const BackgroundVid = ({ vid }) => {
  const classes = useStyles();
  const screen = useScreenSize();

  const [loaded, setLoaded] = useState(false);

  const handleReady = () => {
    setLoaded(true);
  };

  return (
    <div className={classes.video}>
      <ReactPlayer
        url={`${process.env.VIDEOS}${vid.src}`}
        playsinline
        playing
        loop
        muted
        width="100%"
        height="100%"
        onStart={() => setLoaded(true)}
        className={`${
          vid?.fit === "right" ? classes.fit_right : classes.fit_center
        }`}
      />
      <div
        className={`${classes.overlay} ${
          loaded ? classes.overlay_unblur : classes.overlay_blur
        }`}
      />
      <Image
        src={vid.blur64}
        layout="fill"
        className={`${classes.thumbnail} ${
          loaded ? classes.hide : classes.show
        } ${vid?.fit === "right" ? classes.fit_right : classes.fit_center}`}
      />
    </div>
  );
};

export default BackgroundVid;
