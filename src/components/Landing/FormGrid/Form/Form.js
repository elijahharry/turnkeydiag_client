import { useState, useEffect } from "react";

import axios from "axios";
import * as regex from "@constants/regex";
import {
  Paper,
  TextField,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  FormHelperText,
  RadioGroup,
  Radio,
  Checkbox,
  FormGroup,
  InputLabel,
  Select,
  MenuItem,
  Typography,
} from "@material-ui/core";

import useStyles from "./styles";

import LockIcon from "@material-ui/icons/Lock";
import LockOpenIcon from "@material-ui/icons/LockOpen";

import Guide from "./Guide/Guide";

const Form = ({ setCalendly, success, saveSuccess }) => {
  const classes = useStyles();
  const [step, setStep] = useState(0);
  const notRequired = ["interestedIn"];
  const [contact, setContact] = useState({
    firstName: "",
    lastName: "",
    company: "",
    state: "",
    email: "",
    phone: "",
    interestedIn: {
      all: "",
      "COVID-19": true,
      Influenza: true,
      PGX: true,
      Toxicology: true,
      "Blood Wellness": true,
      UTI: true,
      "Nail Fungus": true,
      Autoimmune: true,
      Allergy: true,
      "Cardiac (Genetic)": true,
      "Cancer (Genetic)": true,
      "Parkinson's/Alzheimer's/Dementia": true,
      "Wound Pathogen": true,
    },
    abandoned: "Filled-out completely.",
  });
  const [error, setError] = useState({
    firstName: false,
    lastName: false,
    company: false,
    email: false,
    phone: false,
    state: false,
    interestedIn: false,
  });
  const [submit, setSubmit] = useState(false);

  useEffect(() => {
    const empties = checkEmpties(error, notRequired, contact);
    const hasErrors = !Object.values(empties).every((o) => o === false);
    if (!hasErrors) {
      step !== 2 && setStep(1);
      setSubmit(true);
    } else if (hasErrors) {
      if (step !== 2) {
        setStep(0);
      }
      setSubmit(false);
    }
  }, [contact]);

  useEffect(() => {
    window.onbeforeunload = function () {
      if (!success) {
        if (contact.company || contact.email || contact.phone) {
          axios.post(process.env.FORMSPREE, {
            Name: `${contact.firstName} ${contact.lastName}`,
            Company: contact.company,
            State: contact.state,
            Email: contact.email,
            Phone: contact.phone,
            "Submitted Normally?": "User abandoned form.",
          });
          return "Don't you want to save before leaving this page?";
        }
      }
    };
  }, [contact, success]);

  const handleChange = (e) => {
    const input = e.target.name;
    let value = e.target.value;
    setContact({ ...contact, [input]: value });
    if ([e.target.value] !== "") {
      setError({ ...error, [input]: false });
    }
    if (input == "phone") {
      value = value.replace("+1", "");
      value = value.replace(" ", "-");
    }
    if (input == "email") {
      value = value.replace(" ", "");
    }
    if (regex[input]) {
      if (value !== "") {
        const result = regex[input].test(value);
        if (!result) {
          setError({ ...error, [input]: true });
        } else {
          setError({ ...error, [input]: false });
        }
      }
    }
    setContact({ ...contact, [input]: value });
  };

  const sentenceFormatter = new Intl.ListFormat("en", {
    style: "short",
    type: "conjunction",
  });

  const handleChecks = (e) => {};

  const checkOnClick = () => {
    const empties = checkEmpties(error, notRequired, contact);
    setError({ ...empties });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(process.env.FORMSPREE, {
      Name: `${contact.firstName} ${contact.lastName}`,
      Company: contact.company,
      State: contact.state,
      Email: contact.email,
      Phone: contact.phone,
      "Submitted Normally?": "User filled out and submitted form.",
    });
    setCalendly({
      name: `${contact.firstName} ${contact.lastName}`,
      email: contact.email,
      phone: contact.phone,
      company: contact.company,
      state: contact.state,
    });
    saveSuccess(true);
  };

  return (
    <>
      <Paper className={classes.paper} elevation={10}>
        <form
          className={classes.form}
          onSubmit={handleSubmit}
          id="consultation"
        >
          <div className={classes.fields_row}>
            <TextField
              label="First name"
              name="firstName"
              id="firstName"
              value={contact.firstName}
              onChange={handleChange}
              fullWidth
              className={`${classes.input} ${classes.left}`}
              error={error.firstName}
              variant="filled"
              required
            />
            <TextField
              label="Last name"
              name="lastName"
              id="lastName"
              value={contact.lastName}
              onChange={handleChange}
              fullWidth
              className={`${classes.input} ${classes.right}`}
              error={error.lastName}
              variant="filled"
              required
            />
          </div>
          <div className={classes.fields_row}>
            <TextField
              label="Company"
              name="company"
              id="company"
              value={contact.company}
              onChange={handleChange}
              fullWidth
              className={`${classes.input} ${classes.left}`}
              error={error.company}
              variant="filled"
              required
            />
            <FormControl
              className={`${classes.input} ${classes.right}`}
              error={error.state}
              variant="filled"
            >
              <InputLabel id="state-label">State</InputLabel>
              <Select
                labelId="state-label"
                value={contact.state}
                name="state"
                id="state"
                onChange={handleChange}
                className={classes.select}
              >
                {states.map((state) => (
                  <MenuItem value={state}>{state}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <div className={classes.fields_row}>
            <TextField
              label={error.email ? "Invalid email" : "Email"}
              name="email"
              id="email"
              value={contact.email}
              onChange={handleChange}
              fullWidth
              className={`${classes.input} ${classes.left}`}
              error={error.email}
              variant="filled"
              required
            />
            <TextField
              label={error.phone ? "Invalid phone" : "Phone"}
              name="phone"
              id="phone"
              value={contact.phone}
              onChange={handleChange}
              fullWidth
              className={`${classes.input} ${classes.right}`}
              error={error.phone}
              variant="filled"
              required
            />
          </div>
          <div className={classes.submit} onClick={checkOnClick}>
            <Button
              type="submit"
              variant="contained"
              size="large"
              color={submit || success ? "secondary" : "inherit"}
              fullWidth
              disabled={!submit}
            >
              {success ? (
                "Thanks for your submission!"
              ) : submit ? (
                <>
                  <LockOpenIcon />
                  Schedule free consultation
                </>
              ) : (
                <>
                  <LockIcon />
                  Fill-out form to schedule
                </>
              )}
            </Button>
          </div>
        </form>
        <div className={classes.check_row}>
          <FormControl
            component="fieldset"
            className={classes.checks}
            error={error.interestedIn}
            style={{ color: "#fff" }}
          >
            <FormLabel
              component="legend"
              color="secondary"
              className={classes.form_label}
            >
              Diagnostic services and tests we offer include:
            </FormLabel>
            <FormGroup row name="interest">
              <FormControlLabel
                control={
                  <Checkbox
                    checked={contact.interestedIn["COVID-19"]}
                    name="COVID-19"
                    color="secondary"
                    onChange={handleChecks}
                  />
                }
                label="COVID-19"
                labelPlacement="end"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={contact.interestedIn["Influenza"]}
                    name="Influenza"
                    color="secondary"
                    onChange={handleChecks}
                  />
                }
                label="Influenza"
                labelPlacement="end"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={contact.interestedIn["PGX"]}
                    name="PGX"
                    color="secondary"
                    onChange={handleChecks}
                  />
                }
                label="PGX"
                labelPlacement="end"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={contact.interestedIn["Toxicology"]}
                    name="Toxicology"
                    color="secondary"
                    onChange={handleChecks}
                  />
                }
                label="Toxicology"
                labelPlacement="end"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={contact.interestedIn["Blood Wellness"]}
                    name="Blood Wellness"
                    color="secondary"
                    onChange={handleChecks}
                  />
                }
                label="Blood Wellness"
                labelPlacement="end"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={contact.interestedIn["UTI"]}
                    name="UTI"
                    color="secondary"
                    onChange={handleChecks}
                  />
                }
                label="UTI"
                labelPlacement="end"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={contact.interestedIn["Nail Fungus"]}
                    name="Nail Fungus"
                    color="secondary"
                    onChange={handleChecks}
                  />
                }
                label="Nail Fungus"
                labelPlacement="end"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={contact.interestedIn["Autoimmune"]}
                    name="Autoimmune"
                    color="secondary"
                    onChange={handleChecks}
                  />
                }
                label="Autoimmune"
                labelPlacement="end"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={contact.interestedIn["Allergy"]}
                    name="Allergy"
                    color="secondary"
                    onChange={handleChecks}
                  />
                }
                label="Allergy"
                labelPlacement="end"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={contact.interestedIn["Cardiac (Genetic)"]}
                    name="Cardiac (Genetic)"
                    color="secondary"
                    onChange={handleChecks}
                  />
                }
                label="Cardiac (Genetic)"
                labelPlacement="end"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={contact.interestedIn["Cancer (Genetic)"]}
                    name="Cancer (Genetic)"
                    color="secondary"
                    onChange={handleChecks}
                  />
                }
                label="Cancer (Genetic)"
                labelPlacement="end"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={
                      contact.interestedIn["Parkinson's/Alzheimer's/Dementia"]
                    }
                    name="Parkinson's/Alzheimer's/Dementia"
                    color="secondary"
                    onChange={handleChecks}
                  />
                }
                label="Parkinson's/Alzheimer's/Dementia"
                labelPlacement="end"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={contact.interestedIn["Wound Pathogen"]}
                    name="Wound Pathogen"
                    color="secondary"
                    onChange={handleChecks}
                  />
                }
                label="Wound Pathogen"
                labelPlacement="end"
              />
            </FormGroup>
          </FormControl>
        </div>
      </Paper>
      <div className={classes.guide}>
        <Guide step={step} />
      </div>
    </>
  );
};

export default Form;

const checkEmpties = (error, notRequired, contact) => {
  let errorEmpties = { ...error };
  Object.entries(contact).map((input) => {
    if (!notRequired.includes(input[0])) {
      if (input[0] !== "interestedIn" && !input[1]) {
        errorEmpties[input[0]] = true;
      } else if (input[0] === "interestedIn" && input[1].all === "") {
        errorEmpties.interestedIn = true;
      }
    }
  });
  return errorEmpties;
};

const states = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
];
