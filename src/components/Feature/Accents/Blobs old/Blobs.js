import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import useStyles from "./styles";
import useBackdrops from "@styles/backdrops";

const Blobs = ({ blobs }) => {
  const classes = useStyles();
  const backdrops = useBackdrops();

  const determineVisibility = (blob, chance) => {
    if (blobs?.static) {
      if (blobs.static.includes(blob)) {
        return true;
      } else {
        const results = checkRandom(chance);
        return results;
      }
    } else {
      const results = checkRandom(chance);
      return results;
    }
  };
  const checkRandom = (chance) => {
    const random = Math.random();
    if (random < chance) {
      return true;
    } else {
      return false;
    }
  };
  const [showBlobs, setShowBlobs] = useState({
    bottom_center: determineVisibility("bottom_center", 1),
    top_right: determineVisibility("top_right", 1),
    center_right: determineVisibility("center_right", 1),
    bottom_right: determineVisibility("bottom_right", 1),
    bottom_left: determineVisibility("bottom_left", 1),
  });
  const [blobSizes, setBlobSizes] = useState({
    // bottom_right:
    //   Math.floor(Math.random() * 40) + Math.floor(Math.random() * 40) + 30,
    // top_right:
    //   Math.floor(Math.random() * 50) + Math.floor(Math.random() * 50) + 15,
    // center_right:
    //   Math.floor(Math.random() * 70) + Math.floor(Math.random() * 70) + 30,
    // bottom_left:
    //   Math.floor(Math.random() * 100) + Math.floor(Math.random() * 100) + 150,
    // top_left:
    //   Math.floor(Math.random() * 80) + Math.floor(Math.random() * 80) + 30,
    // bottom_center:
    //   Math.floor(Math.random() * 50) + Math.floor(Math.random() * 50) + 15,
    bottom_right:
      Math.floor(Math.random() * 20) + Math.floor(Math.random() * 20) + 50,
    top_right:
      Math.floor(Math.random() * 20) + Math.floor(Math.random() * 20) + 120,
    center_right:
      Math.floor(Math.random() * 40) + Math.floor(Math.random() * 40) + 170,
    bottom_left:
      Math.floor(Math.random() * 60) + Math.floor(Math.random() * 60) + 150,
    top_left:
      Math.floor(Math.random() * 50) + Math.floor(Math.random() * 50) + 30,
    bottom_center:
      Math.floor(Math.random() * 40) + Math.floor(Math.random() * 40) + 120,
  });
  const [blobDivs, setBlobDivs] = useState([]);
  useEffect(() => {
    const importedIcons = blobs?.icons ? blobs.icons : null;
    const icons = importedIcons
      ? importedIcons.length > 8
        ? shuffle(importedIcons)
        : null
      : null;

    let blobElements = [];
    if ((blobs?.all || blobs.bottom_right) && showBlobs.bottom_right) {
      blobElements.push(
        <div
          className={`${classes.blob} ${classes.bottom_right}`}
          style={{
            width: blobSizes.bottom_right,
            height: blobSizes.bottom_right,
          }}
        >
          <div
            className={`${classes.blob_backdrop} ${backdrops[blobs.backdrop]}`}
            style={{
              opacity: blobs?.opacity ? blobs.opacity : 1,
            }}
          />
          <Image
            src="/img/panels/covid-19.jpg"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
          {icons && <img src={`/img/${icons[0]}`} className={classes.icon} />}
        </div>
      );
    }
    if (blobs?.all || blobs.center_right) {
      blobElements.push(
        <>
          <div
            className={`${classes.blob} ${classes.center_right}`}
            style={{
              width: blobSizes.center_right,
              height: blobSizes.center_right,
            }}
          >
            <div
              className={`${classes.blob_backdrop} ${
                backdrops[blobs.backdrop]
              }`}
              style={{
                opacity: blobs?.opacity ? blobs.opacity : 1,
              }}
            />
            {icons && <img src={`/img/${icons[1]}`} className={classes.icon} />}
          </div>
          <div
            className={`${classes.blob} ${classes.center_right}`}
            style={{
              width: blobSizes.center_right * 0.93,
              height: blobSizes.center_right * 0.93,
              marginRight: blobSizes.center_right * 0.038,
            }}
          >
            <Image
              src="/img/panels/covid-19.jpg"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </div>
        </>
      );
    }
    if (blobs?.all || blobs.top_right) {
      blobElements.push(
        <div
          className={`${classes.blob} ${classes.top_right}`}
          style={{
            width: blobSizes.top_right,
            height: blobSizes.top_right,
          }}
        >
          <div
            className={`${classes.blob_backdrop} ${backdrops[blobs.backdrop]}`}
            style={{
              opacity: blobs?.opacity ? blobs.opacity : 1,
            }}
          />
          <Image
            src="/img/panels/covid-19.jpg"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
      );
    }
    if ((blobs?.all || blobs.bottom_left) && showBlobs.bottom_left) {
      blobElements.push(
        <div
          className={`${classes.blob} ${classes.bottom_left}`}
          style={{
            width: blobSizes.bottom_left,
            height: blobSizes.bottom_left,
            bottom: (blobSizes.bottom_left / 3) * -1,
          }}
        >
          <div
            className={`${classes.blob_backdrop} ${backdrops[blobs.backdrop]}`}
            style={{
              opacity: blobs?.opacity ? blobs.opacity : 1,
            }}
          />
          {icons && <img src={`/img/${icons[3]}`} className={classes.icon} />}
        </div>
      );
    }
    if (blobs?.all || blobs.top_left) {
      blobElements.push(
        <div
          className={`${classes.blob} ${classes.top_left}`}
          style={{
            width: blobSizes.top_left,
            height: blobSizes.top_left,
          }}
        >
          <div
            className={`${classes.blob_backdrop} ${backdrops[blobs.backdrop]}`}
            style={{
              opacity: blobs?.opacity ? blobs.opacity : 1,
            }}
          />
          {icons && <img src={`/img/${icons[4]}`} className={classes.icon} />}
        </div>
      );
    }
    if ((blobs?.all || blobs.bottom_center) && showBlobs.bottom_center) {
      blobElements.push(
        <div
          className={`${classes.blob} ${classes.bottom_center}`}
          style={{
            width: blobSizes.bottom_center,
            height: blobSizes.bottom_center,
          }}
        >
          <div
            className={`${classes.blob_backdrop} ${
              backdrops[blobs.backdrop]
            } backdrop`}
            style={{
              opacity: blobs?.opacity ? blobs.opacity : 1,
            }}
          />
          {icons && <img src={`/img/${icons[5]}`} className={classes.icon} />}
        </div>
      );
    }
    setBlobDivs(blobElements);
  }, []);

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 1.5, type: "spring", delay: 0.2 }}
      className={classes.blobs}
    >
      {blobDivs}
    </motion.div>
  );
};

export default Blobs;

const shuffle = (array) => {
  let currentIndex = array.length;
  let randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
};
