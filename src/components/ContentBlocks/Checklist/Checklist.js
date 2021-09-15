import DoneIcon from "@material-ui/icons/Done";
import { Container, Typography } from "@material-ui/core";
import useStyles from "./styles";
import useBackdrops from "@styles/backdrops";

const Checklist = ({
  overline,
  title,
  desc,
  id,
  backdrop,
  checklist,
  color,
  size,
}) => {
  const classes = useStyles();
  const backdrops = useBackdrops();

  let colorClass = classes.secondary_light;
  let backdropClass = backdrops.secondary_light;
  let circleClass = backdrops.secondary;
  switch (color) {
    case "secondary_light":
      backdropClass = backdrops.secondary_light;
      circleClass = backdrops.secondary;
      colorClass = classes.secondary_light;
      break;
    case "secondary":
      backdropClass = backdrops.secondary;
      circleClass = backdrops.secondary_light;
      colorClass = classes.secondary;
      break;
    case "primary":
      backdropClass = backdrops.primary;
      circleClass = backdrops.primary_darker;
      colorClass = classes.primary;
      break;
  }

  return (
    <section
      id={id ? id : "checklist"}
      className={"padding " + classes.section}
    >
      <Container maxWidth="lg" className={classes.container}>
        <Typography
          variant="overline"
          className={colorClass}
          align="center"
          gutterBottom
        >
          {overline}
        </Typography>
        <Typography
          variant={size === "lg" ? "h2" : "h3"}
          className={`${classes.text_default}`}
          align="center"
        >
          {title}
        </Typography>
        <Typography
          variant={size === "lg" ? "body1" : "body2"}
          className={`${classes.text_default} ${classes.desc}`}
          align="center"
        >
          {desc}
        </Typography>
        <div className={classes.checks}>
          {checklist.map((check, i) => (
            <div
              className={`
                  ${classes.check} ${backdropClass}
                `}
              key={Math.random() + i}
            >
              <Typography
                variant={size === "lg" ? "body1" : "body2"}
                align="left"
                className="text-flex"
              >
                <DoneIcon /> {check}
                <div className={`${classes.arrow_circle} ${circleClass}`} />
              </Typography>
            </div>
          ))}
        </div>
      </Container>
      {backdrop && (
        <div
          className={`${classes.background} ${
            backdrop?.backdrop && backdrops[backdrop.backdrop]
          }`}
          style={{
            opacity: backdrop?.opacity ? backdrop.opacity : 0,
          }}
        />
      )}
    </section>
  );
};

export default Checklist;
