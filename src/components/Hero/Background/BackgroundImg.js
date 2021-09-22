import Image from "next/image";
import useStyles from "./styles";

const BackgroundImg = ({ img }) => {
  const classes = useStyles();

  return (
    <Image
      src={img.src}
      layout="fill"
      objectFit="cover"
      objectPosition="center"
      className={`${classes.img}`}
      placeholder={img.blur ? "blur" : "empty"}
      blurDataURL={img.blur ? img.blur : ""}
    />
  );
};

export default BackgroundImg;
