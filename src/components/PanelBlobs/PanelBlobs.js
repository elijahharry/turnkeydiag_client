import { useState, useEffect } from "react";
import panels from "@constants/panels";

import PanelBlob from "./PanelBlob/PanelBlob";

import { Container } from "@material-ui/core";
import useStyles from "./styles";

const PanelBlobs = () => {
  const classes = useStyles();

  return (
    <section id="panel-blobs">
      <Container maxWidth="lg" className={classes.panels}>
        {panels.map((panel, index) => (
          <PanelBlob panel={panel} index={index} />
        ))}
      </Container>
    </section>
  );
};

export default PanelBlobs;
