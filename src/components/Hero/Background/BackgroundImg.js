import { useState } from "react";
import Image from "next/image";

import useStyles from "./styles";

const BackgroundImg = ({ img }) => {
  const classes = useStyles();
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <Image
        src={`/img/${img.src}`}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        className={`${classes.img} ${
          loaded ? `${classes.unblur} ${classes.zoom}` : classes.blur
        }`}
        onLoad={() => setLoaded(true)}
      />
      <Image
        src={`/img/landing/${img.blur}`}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        priority={true}
        quality={100}
        className={`${classes.thumbnail} ${
          loaded ? classes.hide : classes.show
        }`}
      />
    </>
  );
};

export default BackgroundImg;
