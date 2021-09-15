import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import { Typography, Chip } from "@material-ui/core";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import useStyles from "./styles";
import useBackdrops from "@styles/backdrops";

const PanelBlob = ({ panel, index }) => {
  const classes = useStyles();
  const backdrops = useBackdrops();

  const thumbnail = panel.thumbnail;
  const [loaded, setLoaded] = useState(false);

  let animationClass;
  switch (index % 3) {
    case 0:
      animationClass = classes.blob_animation__1;
      break;
    case 1:
      animationClass = classes.blob_animation__2;
      break;
    case 2:
      animationClass = classes.blob_animation__3;
      break;
  }

  return (
    <Link href={`/panels/${panel.slug}`} passHref>
      <a className={classes.panel}>
        <div className={`${classes.panel_blob} ${animationClass}`}>
          <Image
            src={`/img/panels/${panel.img.src}`}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            onLoad={() => setLoaded(true)}
            blurDataURL={panel.img.blur}
            placeholder="blur"
          />
        </div>
        <div className={classes.panel_desc}>
          <Typography variant="body1" className={classes.desc_title}>
            {panel.title}
          </Typography>
          {panel?.turnaround && (
            <div className={`${classes.desc_chip} ${backdrops.secondary}`}>
              <WatchLaterIcon />
              <Typography variant="button">{panel.turnaround}</Typography>
            </div>
          )}
        </div>
      </a>
    </Link>
  );
};

export default PanelBlob;
