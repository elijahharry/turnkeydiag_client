import Form from "./Form/Form";
import PhoneEmail from "@components/Svgs/PhoneEmail";
import Office from "@components/Svgs/Office";

import {
  Container,
  Grid,
  Typography,
  makeStyles,
  SvgIcon,
} from "@material-ui/core";
import useBackdrops from "@styles/backdrops";

const Contact = ({ backdrop }) => {
  const classes = useStyles();
  const backdrops = useBackdrops();
  return (
    <section className={classes.section + " padding"}>
      <Container maxWidth="lg" className={classes.container}>
        <Grid container alignItems="center" spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h3" gutterBottom>
              Call, email or fill out our form.
            </Typography>
            <Typography variant="body1">
              Reach out anytime to schedule a meeting for a quick consult. We
              respond same day for inquiries. We are confident we can bring
              value and look forward to speaking with you.
            </Typography>
            <div className={classes.contact}>
              <div className={classes.contact_item}>
                <div className={classes.avatar}>
                  <SvgIcon className={classes.icon}>
                    <PhoneEmail />
                  </SvgIcon>
                </div>
                <div>
                  <Typography variant="body2" gutterBottom>
                    info@turnkeytests.com
                  </Typography>
                  <Typography variant="body2">(310) 344-4614</Typography>
                </div>
              </div>
              <div className={classes.contact_item}>
                <div className={classes.avatar}>
                  <SvgIcon className={classes.icon_sm}>
                    <Office />
                  </SvgIcon>
                </div>
                <div>
                  <Typography variant="body2" gutterBottom>
                    9615 Jessica Ct
                  </Typography>
                  <Typography variant="body2">Reno, NV 89521</Typography>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <Form />
          </Grid>
        </Grid>
      </Container>
      <div
        className={`${classes.background} ${
          backdrop?.backdrop && backdrops[backdrop.backdrop]
        }`}
        style={{
          opacity: backdrop?.opacity ? backdrop.opacity : 0.5,
        }}
      />
    </section>
  );
};

export default Contact;

const useStyles = makeStyles((theme) => ({
  section: {
    position: "relative",
  },
  background: {
    position: "absolute",
    width: "100%",
    height: "105%",
    top: 0,
    left: 0,
    zIndex: -1,
  },
  container: {
    position: "relative",
    zIndex: 1,
  },
  icon: {
    width: "2.4rem",
    height: "2.4rem",
    color: "#fff",
    marginRight: theme.spacing(0.5),
    // color: theme.palette.secondary.dark,
  },
  icon_sm: {
    width: "2rem",
    height: "2rem",
    color: "#fff",
    // color: theme.palette.secondary.dark,
  },
  avatar: {
    width: "4rem",
    height: "4rem",
    backgroundColor: theme.palette.secondary.main,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
    overflow: "hidden",
    marginRight: theme.spacing(1),
  },
  contact: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginTop: theme.spacing(2),
  },
  contact_item: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    flexBasis: "50%",
  },
}));
