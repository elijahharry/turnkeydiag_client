import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import panels from "@constants/panels";
import Chart from "@components/Svgs/Chart";
import Analyze from "@components/Svgs/Analyze";

import ReactPlayer from "react-player";

import {
  Container,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Icon,
  SvgIcon,
} from "@material-ui/core";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

import useBackdrops from "@styles/backdrops";
import useGradients from "@styles/gradients";
import useStyles from "./styles";
import { useScreenSize } from "@context/ScreenSize";

const PanelsCTA = ({ color, backdrop }) => {
  const classes = useStyles();
  const backdrops = useBackdrops();
  const gradients = useGradients();
  const screen = useScreenSize();

  const [selected, setSelected] = useState(panels[0].slug);
  const [vid, setVid] = useState(panels[0].vid);
  const [loaded, setLoaded] = useState(false);

  const handleChange = (e) => {
    setSelected(e.target.value);
    setLoaded(false);
  };

  useEffect(() => {
    const filtered = panels.filter((panel) => panel.slug === selected);
    filtered.length > 0 && setVid(filtered[0].vid);
  }, [selected]);

  return (
    <section id="panels-select" className={classes.section}>
      <Container maxWidth="lg" style={{ padding: 0 }}>
        <div className={`${classes.cta}`}>
          <div className={classes.cta_content}>
            {!screen.sm && (
              <div className={classes.content_item}>
                <SvgIcon className={classes.icon} color="primary">
                  <Chart />
                </SvgIcon>
                <div className={classes.item_col}>
                  <Typography variant="h5">Full Suite of Services</Typography>
                  <Typography variant="body1" className={classes.col_1_text}>
                    Offering a wide variety of tests & panels.
                  </Typography>
                </div>
              </div>
            )}
            <div className={classes.content_item}>
              {!screen.xs && (
                <SvgIcon className={classes.icon} color="primary">
                  <Analyze />
                </SvgIcon>
              )}
              <div className={classes.item_col}>
                <Typography
                  variant="body2"
                  className={classes.dropdown_label + screen.xs && " text-flex"}
                >
                  {screen.xs && (
                    <SvgIcon className={classes.icon_xs} color="primary">
                      <Analyze />
                    </SvgIcon>
                  )}{" "}
                  Learn about our:
                </Typography>
                <Select
                  value={selected}
                  onChange={handleChange}
                  className={`${classes.dropdown}`}
                  MenuProps={{
                    className: classes.cta_dropdown__root,
                  }}
                  disableUnderline
                  labelId="panels-label"
                  variant="outlined"
                >
                  {panels.map((panel) => (
                    <MenuItem value={panel.slug}>{panel.title}</MenuItem>
                  ))}
                </Select>
              </div>
            </div>
            <Link href={`/panels/${selected}`} passHref>
              <a className={`${classes.cta_arrow} ${backdrops.secondary}`}>
                <ArrowForwardIcon />
              </a>
            </Link>
          </div>
          {vid && (
            <div
              className={classes.cta_media}
              id="cta-media"
              key={selected + "-cta-img"}
            >
              <div className={classes.vid_overlay}>
                <div
                  className={`${classes.overlay_gradient} ${gradients.primary}`}
                />
              </div>
              <div
                className={`${classes.vid_blur} ${
                  loaded ? classes.hide : classes.show
                }`}
              >
                <Image
                  src={vid.blur}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  className={classes.blur}
                />
              </div>
              <div className={classes.video}>
                <ReactPlayer
                  url={`${process.env.VIDEOS}${vid.src}`}
                  playsinline
                  playing
                  loop
                  muted
                  width="100%"
                  height="100%"
                  onStart={() => setLoaded(true)}
                />
              </div>
            </div>
          )}
        </div>
      </Container>
      <div
        className={`${classes.background} ${classes.background_overlay} ${
          backdrop?.backdrop && backdrops[backdrop.backdrop]
        }`}
        style={{
          opacity: backdrop?.opacity ? backdrop.opacity : 0.5,
        }}
      />
    </section>
  );
};

export default PanelsCTA;
