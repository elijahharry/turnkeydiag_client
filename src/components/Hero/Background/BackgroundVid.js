import { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import Image from "next/image";

import { useScreenSize } from "@context/ScreenSize";

import useStyles from "./styles";

const BackgroundVid = ({ vid }) => {
  const classes = useStyles();
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={classes.video} key={`${vid.src}-hero`}>
      {/* <div
        className={classes.vid_holder}
        dangerouslySetInnerHTML={{
          __html: `<video src="${process.env.VIDEOS + vid.src}" className="${
            vid?.fit === "right" ? classes.fit_right : classes.fit_center
          }" preload="auto" autoplay loop muted playsinline webkit-playsinline x5-playsinline onplay="${function test() {
            setLoaded(true);
          }}" style="width: 100%; height: 100%;"></video>`,
        }}
      ></div> */}
      <video
        src={`${process.env.VIDEOS + vid.src}`}
        className={`${
          vid?.fit === "right" ? classes.fit_right : classes.fit_center
        }`}
        preload="auto"
        autoPlay
        loop
        muted
        playsInline
        onPlay={() => {
          setLoaded(true);
        }}
        style={{ width: "100%", height: "100%" }}
      ></video>
      {/* <ReactPlayer
        url={`${process.env.VIDEOS}${vid.src}`}
        playsinline
        volume={null}
        playing
        loop
        width="100%"
        height="100%"
        onReady={() => setLoaded(true)}
        config={{ file: { forceVideo: true } }}
        className={`${
          vid?.fit === "right" ? classes.fit_right : classes.fit_center
        }`}
      /> */}
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
