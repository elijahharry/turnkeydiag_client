import { useScreenSize } from "@context/ScreenSize";
import Form from "./Form/Form";
import Certifications from "./Certifications/Certifications";
import Clients from "./Clients/Clients";

import { Grid, Typography, Hidden } from "@material-ui/core";
import useStyles from "./styles";

const FormGrid = ({ setCalendly, setContact, success, saveSuccess }) => {
  const classes = useStyles();
  const screen = useScreenSize();
  return (
    <section id="form" className="container padding_default">
      <div className={classes.header}>
        <Typography variant="h5" align="center">
          <strong>
            In need of
            <span className="text_primary"> diagnostic services </span>
            but have unanswered questions or don't even know where to begin?
            Fill out the contact form below for a
            <span className="text_secondary"> free consultation! </span>We'll be
            happy to answer<span className="text_primary"> any and all </span>
            of your questions.
          </strong>
        </Typography>
      </div>
      {screen.width < 1280 ? (
        <Hidden lgUp>
          {/* mobile */}
          <Grid container justifyContent="center" alignItems="stretch">
            <Grid item xs={12}>
              <Typography variant="h2" align="center" color="primary">
                Free Consultation
              </Typography>
              <Form
                setCalendly={setCalendly}
                success={success}
                saveSuccess={saveSuccess}
              />
            </Grid>
            <Grid item xs={12} className="grid_padding">
              <Typography variant="h2" align="center">
                Our Partner's Accredidations
              </Typography>
              <Certifications count={6} />
            </Grid>
            <Grid item xs={12} className="grid_padding">
              <Typography variant="h2" align="center">
                Our Clients
              </Typography>
              <Clients count={22} />
            </Grid>
          </Grid>
        </Hidden>
      ) : (
        <Hidden mdDown>
          {/* desktop */}
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            spacing={3}
          >
            <Grid item xs={12} md={3}>
              <Typography variant="h3" align="center">
                <strong>Accredidations</strong>
              </Typography>
              <Typography variant="body1" align="center">
                Belonging to our partners and affiliated labs.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h2" align="center" color="primary">
                <strong>Free Consultation</strong>
              </Typography>
              <Typography variant="body1" align="center">
                30 minute diagnostics consult. Get all of your questions
                answered.
              </Typography>
            </Grid>
            <Grid item xs={12} md={3}>
              <Typography variant="h3" align="center">
                <strong>Trusted By</strong>
              </Typography>
              <Typography variant="body1" align="center">
                A wide variety of providers:
              </Typography>
            </Grid>
          </Grid>
          <Grid
            container
            justifyContent="center"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} md={3}>
              <Certifications count={6} />
            </Grid>
            <Grid item xs={12} md={6}>
              <Form
                setCalendly={setCalendly}
                success={success}
                saveSuccess={saveSuccess}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <Clients count={22} />
            </Grid>
          </Grid>
        </Hidden>
      )}
    </section>
  );
};

export default FormGrid;
