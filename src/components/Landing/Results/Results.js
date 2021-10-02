import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Head from "next/head";
import ReactPlayer from "react-player";

import Calendly from "./Calendly/Calendly";

import { Typography, Button, Grid } from "@material-ui/core";
import useStyles from "./styles";

const Results = ({ prefill }) => {
  const budget = true;
  const classes = useStyles();

  const [videoDimensions, setVideoDimensions] = useState({
    width: 640,
    height: 480,
  });
  const videoRef = useRef();
  useEffect(() => {
    const width = videoRef.current.clientWidth;
    const height = (width * 720) / 1280;
    setVideoDimensions({ width: width - 20, height: height - 20 });
  }, [videoRef]);

  return (
    <>
      <Head>
        <script>{`gtag('event', 'conversion', {'send_to': '${process.env.CONVERSION}'});`}</script>
      </Head>
      <section
        id="result"
        className={`container padding_default ${classes.results}`}
      >
        <Grid container alignItems="center" justifyContent="center">
          <Grid item xs={12} md={6} className="grid_padding">
            <Typography variant="h2" gutterBottom>
              Schedule Free Consult
            </Typography>
            <Typography
              variant="body1"
              className={classes.results_desc}
              gutterBottom
            >
              Use the calendar to schedule your free consultation. Then review
              some of our testimonials from a few of our highly-satisfied
              clients. We're looking forward to speaking with you!
            </Typography>
            {/* <div className={classes.results_buttons}>
            <Calendly prefill={prefill} justButton={true} />
            <Button className={classes.button_dark} href="#testimonials">
              Or read testimonials
            </Button>
          </div> */}
          </Grid>
          <Grid ref={videoRef} item xs={12} md={6}>
            <Calendly prefill={prefill} />
          </Grid>
        </Grid>
      </section>
    </>
  );
};

export default Results;
