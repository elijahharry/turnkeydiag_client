import { useState, useEffect } from "react";
import ReactPlayer from "react-player/lazy";
import Image from "next/image";

import { useScreenSize } from "@context/ScreenSize";

import useStyles from "./styles";

const BackgroundVid = ({ vid }) => {
  const classes = useStyles();
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={classes.video} key={`${vid.src}-hero`}>
      <ReactPlayer
        url={`${process.env.VIDEOS}${vid.src}`}
        playsinline
        volume={0}
        playing
        loop
        muted={true}
        width="100%"
        height="100%"
        onReady={() => setLoaded(true)}
        config={{
          file: {
            attributes: { muted: true, crossOrigin: true },
          },
        }}
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
        src={vid.blur}
        priority={true}
        layout="fill"
        className={`${classes.thumbnail} ${
          loaded ? classes.hide : classes.show
        }`}
      />
    </div>
  );
};

export default BackgroundVid;
