import { useState, useEffect } from "react";
import Image from "next/image";
import parse from "html-react-parser";
import { useScreenSize } from "@context/ScreenSize";
import useInterval from "react-useinterval";
import { motion } from "framer-motion";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { withStyles } from "@material-ui/core/styles";
import {
  Container,
  Grid,
  Accordion as MuiAccordion,
  AccordionSummary as MuiAccordionSummary,
  AccordionDetails as MuiAccordionDetails,
  Typography,
} from "@material-ui/core";
import InfoIcon from "@material-ui/icons/Info";
import HelpIcon from "@material-ui/icons/Help";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import useStyles from "./styles";
import useBackdrops from "@styles/backdrops";

const Faq = ({ img, title, overline, desc, questions, backdrop, color }) => {
  const screen = useScreenSize();
  const backdrops = useBackdrops();
  const classes = useStyles();

  let colorClass = classes.secondary_light;
  let backdropClass = backdrops.secondary_light;
  let borderClass = classes.border_secondary_light;
  let fillClass = backdrops.secondary;
  switch (color) {
    case "secondary_light":
      backdropClass = backdrops.secondary_light;
      colorClass = classes.secondary_light;
      borderClass = classes.border_secondary_light;
      fillClass = backdrops.secondary;
      break;
    case "secondary":
      backdropClass = backdrops.secondary;
      colorClass = classes.secondary;
      borderClass = classes.border_secondary;
      fillClass = backdrops.secondary_light;
      break;
    case "primary":
      backdropClass = backdrops.primary;
      colorClass = classes.primary;
      borderClass = classes.border_primary;
      fillClass = backdrops.primary_darker;
      break;
  }

  const [selected, setSelected] = useState(0);
  const [selectedContent, setSelectedContent] = useState({
    q: questions[0].q,
    a: questions[0].a,
  });

  useEffect(() => {
    const newSelected = questions[selected];
    setSelectedContent({
      q: newSelected.q,
      a: newSelected.a,
    });
  }, [selected]);

  return (
    <section className={classes.section + " padding"} id="questions">
      <Container maxWidth="lg" className={classes.container}>
        {overline && (
          <Typography align="center" variant="overline" className={colorClass}>
            {overline}
          </Typography>
        )}
        <Typography align="center" className={classes.title} variant="h3">
          {title ? title : "FAQ"}
        </Typography>
        {/* <Typography align="center" variant="body2">
          {desc ? desc : "Click each question to learn more."}
        </Typography> */}
        <div className={classes.chips}>
          {questions.map((q, i) => (
            <div
              className={`
                  ${classes.chip} ${backdropClass} ${
                selected === i && classes.chip_selected
              }
                `}
              key={Math.random() + i}
              onClick={() => setSelected(i)}
              onMouseEnter={() => setSelected(i)}
            >
              <Typography variant="body2" align="left" className="text-flex">
                {selected === i ? <HelpIcon /> : <HelpOutlineIcon />} {q.q}
                <div className={`${classes.icon_fill} ${fillClass}`} />
              </Typography>
            </div>
          ))}
        </div>
        <motion.div
          key={`selected-${selected}`}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          className={`${classes.selected_content} ${borderClass}`}
        >
          <Typography
            variant="h5"
            className={"text-flex " + classes.selected_q}
          >
            <InfoIcon className={colorClass} /> {selectedContent.q}
          </Typography>
          {selectedContent.a.map((p, i) => (
            <Typography
              key={`selected-p-${i}`}
              align="center"
              variant="body2"
              className={classes.selected_desc}
              style={i === 0 ? { marginTop: 0 } : {}}
            >
              {parse(p)}
            </Typography>
          ))}
        </motion.div>
      </Container>
      <div
        className={`${classes.background} ${classes.background_overlay} ${
          backdrop?.backdrop && backdrops[backdrop.backdrop]
        }`}
        style={{
          opacity: backdrop?.opacity ? backdrop.opacity : 1,
        }}
      />
    </section>
  );
};

export default Faq;
