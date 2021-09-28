import { useState, useEffect } from "react";
import Image from "next/image";

import useStyles from "./styles";
import { Grid, Typography } from "@material-ui/core";

import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import StarIcon from "@material-ui/icons/Star";

import SwipeableViews from "react-swipeable-views";

const Testimonials = () => {
  const classes = useStyles();

  const [shown, setShown] = useState(0);
  const [auto, setAuto] = useState(true);

  const handleChange = (mode) => {
    if (mode === "forward") {
      if (shown + 1 < testimonials.length) {
        setShown(shown + 1);
      }
    } else if (mode === "back") {
      if (shown - 1 >= 0) {
        setShown(shown - 1);
      }
    }
  };

  useEffect(() => {
    setTimeout(slide, 7000);
  }, [shown]);

  const slide = () => {
    if (auto) {
      if (shown === testimonials.length - 1) {
        setShown(0);
      } else {
        setShown(shown + 1);
      }
    }
  };

  return (
    <>
      <section
        id="testimonials"
        className={classes.testimonials}
        onClick={() => setAuto(false)}
      >
        <Image
          src="/img/testimonials.jpg"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
        <div className={classes.testimonials__content + ""}>
          <Grid container justifyContent="center" alignItems="center">
            <Grid item xs={1} className={classes.column_arrow}>
              <ArrowBackIosIcon
                className={`${classes.arrow} ${
                  shown > 0 ? classes.arrow_active : classes.arrow_inactive
                }`}
                onClick={() => handleChange("back")}
              />
            </Grid>
            <Grid item xs={10}>
              <SwipeableViews index={shown}>
                {testimonials.map((testimonial, index) => (
                  <div
                    className={classes.testimonial}
                    key={"testimonial-" + index}
                  >
                    <Typography
                      variant="h4"
                      align="center"
                      className={classes.testimonial_text}
                    >
                      "{testimonial.review}"
                    </Typography>
                    <div className={classes.contact}>
                      <div className={classes.contact_logo}>
                        <Image
                          src={"/img/" + testimonial.logo}
                          objectFit="contain"
                          layout="fill"
                          objectPosition="center"
                        />
                      </div>
                      <div className={classes.testimonial_contact}>
                        <Typography variant="h5" align="center">
                          {testimonial.name}
                        </Typography>
                        <Typography variant="body1" align="left">
                          {testimonial.title}
                        </Typography>
                      </div>
                    </div>
                  </div>
                ))}
              </SwipeableViews>
            </Grid>
            <Grid item xs={1} className={classes.column_arrow}>
              <ArrowForwardIosIcon
                className={`${classes.arrow} ${
                  shown + 1 < testimonials.length
                    ? classes.arrow_active
                    : classes.arrow_inactive
                }`}
                onClick={() => handleChange("forward")}
              />
            </Grid>
          </Grid>
          <div className={classes.content_controls}>
            {testimonials.map((bullet, index) => (
              <StarIcon
                key={bullet.name}
                className={
                  index === shown
                    ? classes.bullet_active
                    : classes.bullet_inactive
                }
                onClick={() => setShown(index)}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;

const testimonials = [
  {
    name: "Scott D.",
    title: "Director of Operations",
    logo: "neurowellness.png",
    type: "Wellness spa in Los Angeles, CA",
    review:
      "TurnKey Diagnostics was a great addition to our continuum of care. They provided us pharmacogenomics (PGX) testing to our patients receiving tms treatment that added extreme value to their overall progress. Amazing turn around times.",
  },
  {
    name: "Howard B.",
    title: "Community Liaison",
    logo: "client-17.png",
    review:
      "TurnKey Diagnostics has been an amazing vendor for us providing toxicology services. As a mental and behavioral health community we needed a team that works around the clock and could take calls whether it be early morning or late past business hours.",
  },
  {
    name: "Basel S.",
    title: "Founder/Owner",
    logo: "clarity.png",
    review:
      "Working with them has been a breath of fresh air. They are always available, they run more panels than other conventional labs, and always called us with concerns in any results.",
  },
  {
    name: "Brett L.",
    title: "Founder/Owner",
    logo: "sbsl.png",
    review:
      "TurnKey Diagnostics and their team have been a one stop inclusive testing resource for us. From COVID, to molecular, toxicology and genetic testing it has added immense value to my programs and the overall result of peoples lives we serve.",
  },
  {
    name: "Josh F.",
    title: "Director of Admissions",
    logo: "malibu.png",
    review:
      "As a treatment provider with a large amount of facilities we need to partner with someone that could handle our size and volume of testing. Turnkey diagnostics from start to finish understands lab partnerships and we’re always 3 steps ahead of our needs.",
  },
];
