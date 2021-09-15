import BackgroundImg from "./Background/BackgroundImg";
import BackgroundVid from "./Background/BackgroundVid";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import parse from "html-react-parser";
import { useScreenSize } from "@context/ScreenSize";

import { Container, Typography, Button } from "@material-ui/core";
import useGradients from "@styles/gradients";
import useBackdrops from "@styles/backdrops";
import useStyles from "./styles";

const Hero = ({ content, background, style, badges, button1, button2 }) => {
  const classes = useStyles();
  const gradients = useGradients();
  const backdrops = useBackdrops();
  const screen = useScreenSize();
  const router = useRouter();

  const colorClass = classes.lightblue;

  let height = "100vh";
  if (style?.size === "lg") {
    screen.height && (height = screen.height);
  } else {
    screen.height ? (height = screen.height * 0.85) : (height = "85vh");
  }

  return (
    <section
      id={content?.id + "-hero"}
      className={classes.section}
      style={{
        height: height,
      }}
      key={content?.id + "-hero"}
    >
      <Container
        maxWidth="lg"
        className={`${classes.container} ${classes.text_white}`}
      >
        <Typography align="center" variant="overline" className={colorClass}>
          {content?.overline.toUpperCase()}
        </Typography>
        <Typography variant="h1" className={classes.title} align="center">
          {content?.title && parse(content.title)}
        </Typography>
        {content?.subtitle && (
          <Typography variant="body1" align="center">
            {content.subtitle}
          </Typography>
        )}
        <div className={classes.buttons}>
          {button1 && (
            <Link href={button1.link} passHref>
              <Button
                className={classes.button + " " + gradients.primary_flipped}
                variant="contained"
                size="large"
                color="primary"
              >
                {button1.text}
              </Button>
            </Link>
          )}
          {button2 && (
            <Link href={button2.link} passHref>
              <Button className={classes.button_transparent} size="large">
                {button2.text}
              </Button>
            </Link>
          )}
        </div>
      </Container>
      {background.vid && <BackgroundVid vid={background.vid} />}
      <div className={classes.overlay}>
        <div
          className={classes.overlay_fill + " " + gradients.secondary_dark}
        />
      </div>
    </section>
  );
};

export default Hero;
