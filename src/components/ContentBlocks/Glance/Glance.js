import Image from "next/image";
import parse from "html-react-parser";

import { Container, Typography } from "@material-ui/core";
import InfoIcon from "@material-ui/icons/Info";
import DoneIcon from "@material-ui/icons/Done";
import useStyles from "./styles";
import useBackdrops from "@styles/backdrops";
import useGradients from "@styles/gradients";

const Glance = ({ title, desc, benefits, backdrop }) => {
  const classes = useStyles();
  const backdrops = useBackdrops();
  const gradients = useGradients();

  return (
    <section
      id="panel-desc"
      className="padding-lg"
      className={classes.section + " padding"}
    >
      <Container maxWidth="lg" className={classes.container}>
        <Typography
          variant="overline"
          className={"text-flex " + classes.overline}
          align="center"
          gutterBottom
        >
          <InfoIcon /> What you need to know
        </Typography>
        <Typography
          className={classes.title}
          variant="h3"
          align="center"
          gutterBottom
        >
          {title && parse(title)}
        </Typography>
        <Typography variant="body2" align="center" className={classes.desc}>
          {desc && parse(desc)}
        </Typography>
        <div className={classes.benefits}>
          {benefits &&
            benefits.map((benefit, i) => (
              <div
                className={`
                  ${classes.benefit} ${backdrops.secondary}
                `}
                key={Math.random() + i}
              >
                <Typography variant="body2" align="left" className="text-flex">
                  <DoneIcon /> {benefit}
                  <div
                    className={`${classes.arrow_circle} ${backdrops.secondary_light}`}
                  />
                </Typography>
              </div>
            ))}
        </div>
      </Container>
      <div
        className={`${classes.background} ${classes.background_overlay} ${
          backdrop?.backdrop && backdrops[backdrop.backdrop]
        }`}
        style={{
          opacity: backdrop?.opacity ? backdrop.opacity : 0,
        }}
      />
    </section>
  );
};

export default Glance;
