import React, { useState } from "react";
import Image from "next/image";

import useStyles from "./styles";

const FloatingImg = ({ img }) => {
  const [loading, setLoading] = useState(true);
  const classes = useStyles();

  let holder = classes.img_holder;
  let shadow = "";

  if (img.shadow) {
    holder = `${holder} ${classes.holder_has_shadow}`;
    if (img.shadow.color === "primary") {
      shadow = " " + classes.shadow_primary__right;
      if (img.shadow.position === "left") {
        shadow = " " + classes.shadow_primary__left;
      }
    } else if (img.shadow.color === "secondary") {
      shadow = " " + classes.shadow_secondary__right;
      if (img.shadow.position === "left") {
        shadow = " " + classes.shadow_secondary__left;
      }
    }
  }

  return (
    <div className={holder}>
      <Image
        src={`${process.env.IMAGES}${img.src}`}
        width={600}
        height={500}
        objectFit="contain"
        objectPosition="bottom center"
        onLoad={() => setLoading(false)}
        className={`${classes.img} ${
          loading ? classes.img_hide : classes.img_show
        }${shadow}`}
      />
    </div>
  );
};

export default FloatingImg;
