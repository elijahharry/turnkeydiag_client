import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import router, { useRouter } from "next/router";
import axios from "axios";
import Image from "next/image";
import * as regex from "@constants/regex";

import { Paper, TextField, Button, Stepper } from "@material-ui/core";
import { Container } from "@material-ui/core";
import useStyles from "./styles";
import { Typography } from "@material-ui/core";
import DoneAllIcon from "@material-ui/icons/DoneAll";
import ClearIcon from "@material-ui/icons/Clear";
import useBackdrops from "@styles/backdrops";
import useGradients from "@styles/gradients";

import Guide from "./Guide/Guide";

const Quick = ({ panel, img }) => {
  const classes = useStyles();
  const backdrops = useBackdrops();
  const gradients = useGradients();

  const router = useRouter();

  const [step, setStep] = useState(0);
  const [contact, setContact] = useState({
    phone: "",
    email: "",
    page: router.query.panel,
  });
  const [error, setError] = useState({
    email: false,
    phone: false,
  });
  const [errorMessage, setErrorMessage] = useState({
    email: "",
    phone: "",
  });
  const [submit, setSubmit] = useState(false);
  const [subtitle, setSubtitle] = useState(
    "Fill out our quick contact form and we'll be in touch within 24 hours."
  );
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (
      contact.phone !== "" &&
      contact.email !== "" &&
      !error.email &&
      !error.phone
    ) {
      if (step !== 2) {
        setStep(1);
        setSubtitle(
          "Thanks for filling out the form! Don't forget to click submit."
        );
      }
      setSubmit(true);
    }
    if (
      contact.phone === "" ||
      contact.email === "" ||
      error.email ||
      error.phone
    ) {
      if (step !== 2) {
        setStep(0);
        setSubtitle(
          "Fill out our quick contact form and we'll be in touch within 24 hours."
        );
      }
      setSubmit(false);
    }
  }, [contact]);

  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });

    if (e.target.value !== "") {
      const result = regex[e.target.name].test(e.target.value);

      if (!result) {
        setError({ ...error, [e.target.name]: true });
        setErrorMessage({
          ...errorMessage,
          [e.target.name]: `Invalid ${e.target.name}.`,
        });
      } else {
        setError({ ...error, [e.target.name]: false });
        setErrorMessage({ ...errorMessage, [e.target.name]: "" });
      }
    } else {
      setError({ ...error, [e.target.name]: false });
      setErrorMessage({ ...errorMessage, [e.target.name]: "" });
    }
  };

  const [res, setRes] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.set("email", contact.email);
    formData.set("phone", contact.phone);
    formData.set("sent-from", `panels/${contact.page}`);
    axios
      .post(
        `${process.env.WORDPRESS}wp-json/contact-form-7/v1/contact-forms/${process.env.C47_ID}/feedback`,
        formData,
        {
          headers: {
            "content-type": "multipart/form-data",
          },
        }
      )
      .then((res) => {
        if (res.data.status === "mail_sent") {
          setRes({
            type: "success",
            message: "✔️ Message recieved! We'll be in touch soon. Thanks!",
          });
          setStep(2);
          setSuccess(true);
          clear();
        } else {
          setRes({
            type: "error",
            message:
              "❌ Looks like we weren't able to recieve your message. Don't hesitate to call or email us anytime.",
          });
        }
      });
  };

  const clear = () => {
    setContact({
      phone: "",
      email: "",
      page: router.query.panel,
    });
  };

  useEffect(() => {
    if (res.message) {
      setSubtitle(res.message);
    }
  }, [res]);

  return (
    <section
      id="quick-contact"
      className={img ? classes.contact : `${classes.contact}`}
    >
      <Container maxWidth="lg" align="center">
        <Typography
          className={`sub-subheader ${img && classes.background_text}`}
          align="center"
          gutterBottom
        >
          <strong>Looking for a Supplier of {panel}?</strong>
        </Typography>
        <Typography
          className={img && classes.background_text}
          variant="body1"
          align="center"
          gutterBottom
        >
          {subtitle}
        </Typography>

        <Paper className={classes.paper} elevation={0}>
          <form className={classes.form} onSubmit={handleSubmit}>
            <div className={classes.fields}>
              <TextField
                label={errorMessage.email !== "" ? errorMessage.email : "Email"}
                name="email"
                id="email"
                value={contact.email}
                onChange={handleChange}
                fullWidth
                className={`${classes.input} ${classes.left}`}
                error={error.email}
                disabled={success}
              />
              <TextField
                label={errorMessage.phone !== "" ? errorMessage.phone : "Phone"}
                name="phone"
                id="phone"
                value={contact.phone}
                onChange={handleChange}
                fullWidth
                className={`${classes.input} ${classes.right}`}
                error={error.phone}
                disabled={success}
              />
            </div>
            <Button
              type="submit"
              variant="contained"
              fullWidth
              color="secondary"
              disabled={!submit}
              className={success && classes.button_success}
            >
              {success ? (
                <DoneAllIcon className={classes.feedback_icon} />
              ) : (
                "Submit"
              )}
            </Button>
          </form>
        </Paper>
        <Paper className={`${classes.paper} ${classes.guide}`} elevation={0}>
          <Guide step={step} />
        </Paper>
      </Container>
      {img && (
        <div className={classes.background}>
          <div className={`${classes.overlay}`}>
            <div
              className={`${classes.gradient} ${gradients.primary_dark_tilt}`}
            />
          </div>
          <Image
            src={`/img/panels/${img.src}`}
            layout="fill"
            objectFit="cover"
            className={classes.background_img}
          />
        </div>
      )}
    </section>
  );
};

export default Quick;
