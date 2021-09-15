import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import InfoIcon from "@material-ui/icons/Info";
import Tooltip from "@material-ui/core/Tooltip";

import useStyles from "./styles";
import useBackdrops from "@styles/backdrops";
import { Typography } from "@material-ui/core";

const Blobs = ({ blobs }) => {
  const classes = useStyles();
  const backdrops = useBackdrops();

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
      Math.floor(Math.random() * 20) + Math.floor(Math.random() * 20) + 35,
    center_right:
      Math.floor(Math.random() * 40) + Math.floor(Math.random() * 40) + 50,
    bottom_left:
      Math.floor(Math.random() * 60) + Math.floor(Math.random() * 60) + 150,
    top_left:
      Math.floor(Math.random() * 50) + Math.floor(Math.random() * 50) + 50,
    bottom_center:
      Math.floor(Math.random() * 30) + Math.floor(Math.random() * 30) + 35,
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
    if (blobs?.all) {
      blobElements.push(
        <>
          <div
            className={`${classes.blob} ${classes.bottom_right}`}
            style={{
              width: blobSizes.bottom_right,
              height: blobSizes.bottom_right,
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
            {blobs?.factoids && blobs?.factoids[3] && (
              <Tooltip
                title={
                  <Typography variant="body1">{blobs.factoids[3]}</Typography>
                }
                placement="top-center"
                arrow
              >
                <InfoIcon className={classes.icon} />
              </Tooltip>
            )}
          </div>
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
            {blobs?.factoids && blobs?.factoids[0] && (
              <Tooltip
                title={
                  <Typography variant="body1">{blobs.factoids[0]}</Typography>
                }
                placement="top-center"
                arrow
              >
                <InfoIcon className={classes.icon} />
              </Tooltip>
            )}
          </div>
          <div
            className={`${classes.blob} ${classes.top_right}`}
            style={{
              width: blobSizes.top_right,
              height: blobSizes.top_right,
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
            {blobs?.factoids && blobs?.factoids[5] && (
              <Tooltip
                title={
                  <Typography variant="body1">{blobs.factoids[5]}</Typography>
                }
                placement="bottom-end"
                arrow
              >
                <InfoIcon className={classes.icon} />
              </Tooltip>
            )}
          </div>
          <div
            className={`${classes.blob} ${classes.bottom_left}`}
            style={{
              width: blobSizes.bottom_left,
              height: blobSizes.bottom_left,
              bottom: (blobSizes.bottom_left / 3) * -1,
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
            {blobs?.factoids && blobs?.factoids[4] && (
              <Tooltip
                title={
                  <Typography variant="body1">{blobs.factoids[4]}</Typography>
                }
                placement="bottom-end"
                arrow
              >
                <InfoIcon className={classes.icon} />
              </Tooltip>
            )}
          </div>
          <div
            className={`${classes.blob} ${classes.top_left}`}
            style={{
              width: blobSizes.top_left,
              height: blobSizes.top_left,
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
            {blobs?.factoids && blobs?.factoids[2] && (
              <Tooltip
                title={
                  <Typography variant="body1">{blobs.factoids[2]}</Typography>
                }
                placement="bottom-start"
                arrow
              >
                <InfoIcon className={classes.icon} />
              </Tooltip>
            )}
          </div>
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
            {blobs?.factoids && blobs?.factoids[1] && (
              <Tooltip
                title={
                  <Typography variant="body1">{blobs.factoids[1]}</Typography>
                }
                placement="top-center"
                arrow
              >
                <InfoIcon className={classes.icon} />
              </Tooltip>
            )}
          </div>
        </>
      );
    }
    setBlobDivs(blobElements);
  }, []);

  return (
    // <motion.div
    //   initial={{ scale: 0 }}
    //   animate={{ scale: 1 }}
    //   transition={{ duration: 1.5, type: "spring", delay: 0.2 }}
    //   className={classes.blobs}
    // >
    <>{blobDivs}</>
    // </motion.div>
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
