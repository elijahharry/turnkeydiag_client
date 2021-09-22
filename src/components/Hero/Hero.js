import BackgroundImg from "./Background/BackgroundImg";
import BackgroundVid from "./Background/BackgroundVid";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import parse from "html-react-parser";
import { useScreenSize } from "@context/ScreenSize";

import { Container, Typography, Button, Breadcrumbs } from "@material-ui/core";
import useGradients from "@styles/gradients";
import useBackdrops from "@styles/backdrops";
import useStyles from "./styles";

const Hero = ({
  content,
  background,
  style,
  badges,
  button1,
  button2,
  type,
}) => {
  const classes = useStyles();
  const gradients = useGradients();
  const backdrops = useBackdrops();
  const screen = useScreenSize();
  const router = useRouter();

  const colorClass = classes.lightblue;

  let height = "100vh";
  let minHeight = 750;
  if (style?.size === "lg") {
    height = "100vh";
  } else if (style?.size === "sm") {
    height = "70vh";
    minHeight = 630;
  } else {
    height = "85vh";
  }

  const slug = router?.query?.slug;

  return (
    <section
      id={content?.id + "-hero"}
      className={classes.section}
      style={{
        height: height,
        minHeight: minHeight,
      }}
      key={content?.id + "-hero"}
    >
      <Container
        maxWidth="lg"
        className={`${classes.container} ${classes.text_white}`}
        style={{ paddingTop: style?.paddingTop ? style.paddingTop : 50 }}
      >
        {/* {type !== "blog" ? (
          <Typography align="center" variant="overline" className={colorClass}>
            {content?.overline.toUpperCase()}
          </Typography>
        ) : (
          <Breadcrumbs color="primary">
            <Link href="/blog" passHref>
              <Typography variant="overline" className={classes.breadcrumb}>
                Blog
              </Typography>
            </Link>
            <Typography variant="overline" className={classes.breadcrumb_light}>
              {slug}
            </Typography>
          </Breadcrumbs>
        )} */}
        <Typography
          align="center"
          variant="overline"
          className={`${classes.overline} ${colorClass}`}
        >
          {content?.overline && parse(content.overline)}
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
      {background.img && <BackgroundImg img={background.img} />}
      <div className={classes.overlay}>
        <div
          className={classes.overlay_fill + " " + gradients.secondary_dark}
        />
      </div>
    </section>
  );
};

export default Hero;
