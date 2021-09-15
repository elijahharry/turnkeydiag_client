import Link from "next/link";
import Image from "next/image";
import panels from "@constants/panels";

import { Container, Typography } from "@material-ui/core";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import WatchLaterIcon from "@material-ui/icons/WatchLater";

import useBackdrops from "@styles/backdrops";
import useStyles from "./styles";

const PanelsList = () => {
  const classes = useStyles();
  const backdrops = useBackdrops();

  return (
    <section className={classes.section}>
      <Container maxWidth="lg" className={classes.container}>
        <ul className={classes.panels}>
          {panels.map((panel, i) => (
            <li className={classes.panel_holder}>
              <Link href={`/panels/${panel.slug}`} passHref>
                <a
                  className={`${classes.panel} ${
                    i % 2 === 0
                      ? classes.panel_secondary
                      : classes.panel_primary
                  }`}
                >
                  <div className={classes.panel_media}>
                    <div className={classes.img_holder}>
                      <Image
                        src={`/img/panels/${panel.img.src}`}
                        blurDataURL={panel.img.blur}
                        placeholder="blur"
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                        className={classes.img}
                      />
                    </div>
                  </div>
                  <div className={classes.panel_content}>
                    <Typography
                      variant="body1"
                      className={classes.panel_title}
                      gutterBottom
                    >
                      <strong>{panel.title}</strong>
                    </Typography>
                    <Typography variant="body1">{panel.desc}</Typography>
                    <div className={classes.chip_block}>
                      <div
                        className={`${classes.content_chip} ${
                          i % 2 === 0
                            ? backdrops.secondary_light
                            : backdrops.primary_dark
                        }`}
                      >
                        <WatchLaterIcon />
                        <Typography variant="overline">
                          {panel?.turnaround ? panel.turnaround : "Varies"}
                        </Typography>
                      </div>
                      <ArrowForwardIosIcon className={classes.chip_arrow} />
                    </div>
                  </div>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default PanelsList;
