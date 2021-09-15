import Image from "next/image";
import { useScreenSize } from "@context/ScreenSize";

import { Container, Typography } from "@material-ui/core";
import useStyles from "./styles";
import useBackdrops from "@styles/backdrops";

const CertificationsBox = ({ backdrop }) => {
  const classes = useStyles();
  const screen = useScreenSize();
  const backdrops = useBackdrops();

  return (
    <section id="panels-select" className={classes.section}>
      <Container maxWidth="lg" style={{ padding: 0 }}>
        <div className={classes.badges}>
          {badges.map((badge) => (
            <div className={classes.badge}>
              <Image
                src={`/img/${badge}`}
                width={200}
                height={200}
                objectFit="contain"
                objectPosition="center"
              />
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

export default CertificationsBox;

const badges = [
  "cert-1.png",
  "cert-2.png",
  "cert-3.png",
  "cert-5.png",
  "cert-6.png",
  "cert-4.png",
];
