import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ReactPlayer from "react-player";

import useBackdrops from "@styles/backdrops";
import useStyles from "./styles";

const FloatingVid = ({ vid, blobs, flipped, size }) => {
  const [loaded, setLoaded] = useState(false);

  const classes = useStyles();
  const backdrops = useBackdrops();
  return (
    <motion.div
      // initial={{ scale: 0, x: "-60%" }}
      // animate={{ scale: 1, x: 0 }}
      // transition={{ duration: 1.4, type: "spring", delay: 0.2 }}
      className={`${classes.vid_holder} ${
        size === "large" ? classes.holder_lg : classes.holder_default
      }`}
    >
      <div className={classes.vid}>
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
        {/* <div
          className={`${classes.overlay} ${
            loaded ? classes.overlay_unblur : classes.overlay_blur
          }`}
        /> */}
        <Image
          src={vid.blur64}
          layout="fill"
          className={`${classes.thumbnail} ${
            loaded ? classes.img_hide : classes.img_show
          } ${vid?.fit === "right" ? classes.fit_right : classes.fit_center}`}
        />
      </div>
      {(blobs?.feature_vid || blobs?.all) && (
        <div
          className={`${classes.blob} ${classes.blob_lg} ${
            flipped ? classes.blob_flipped : classes.blob_default
          }`}
        >
          <div
            className={`${classes.blob_backdrop} ${
              backdrops[
                blobs?.feature_vid ? blobs.feature_vid.backdrop : blobs.backdrop
              ]
            }`}
            style={{
              opacity: blobs.feature_vid?.opacity
                ? blobs.feature_vid.opacity
                : 1,
            }}
          />
        </div>
      )}
    </motion.div>
  );
};

export default FloatingVid;
