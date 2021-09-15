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
import { AnimatePresence, motion } from "framer-motion";

const template = {
  firstName: "",
  lastName: "",
  company: "",
  email: "",
  phone: "",
  state: "",
};
const Form = ({ setCalendly, success, saveSuccess }) => {
  const classes = useStyles();
  const notRequired = ["notes"];
  const [contact, setContact] = useState(template);
  const [error, setError] = useState({
    firstName: false,
    lastName: false,
    company: false,
    email: false,
    phone: false,
    state: false,
  });
  const [submit, setSubmit] = useState(false);
  const [res, setRes] = useState(false);

  useEffect(() => {
    const empties = checkEmpties(error, notRequired, contact);
    const hasErrors = !Object.values(empties).every((o) => o === false);
    if (!hasErrors) {
      setSubmit(true);
    } else if (hasErrors) {
      setSubmit(false);
    }
  }, [contact]);

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
    let formData = new FormData();
    formData.set("firstname", contact.firstName);
    formData.set("lastname", contact.lastName);
    formData.set("company", contact.company);
    formData.set("state", contact.state);
    formData.set("email", contact.email);
    formData.set("phone", contact.phone);
    formData.set("sent-from", "contact");
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
          setContact(template);
        } else {
          setRes({
            type: "error",
            message:
              "❌ Looks like we weren't able to recieve your message. Don't hesitate to call or email us anytime.",
          });
        }
      });
  };

  return (
    <>
      <Paper className={classes.paper} elevation={0}>
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
              required
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
          <div className={classes.fields_row}>
            <TextField
              label="If you any specific needs or notes, feel free to list them here."
              name="notes"
              id="notes"
              value={contact.notes}
              onChange={handleChange}
              fullWidth
              className={`${classes.input} ${classes.notes}`}
              multiline
              rows={3}
              variant="filled"
            />
          </div>
          <div className={classes.submit} onClick={checkOnClick}>
            <Button
              type="submit"
              variant="contained"
              size="large"
              color={submit ? "secondary" : "inherit"}
              fullWidth
              disabled={!submit}
            >
              {submit ? (
                <>
                  <LockOpenIcon />
                  Submit info
                </>
              ) : (
                <>
                  <LockIcon />
                  Fill-out form
                </>
              )}
            </Button>
          </div>
        </form>
      </Paper>
      <AnimatePresence>
        {res && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
          >
            <Typography variant="body1" align="center">
              {res.message}
            </Typography>
          </motion.div>
        )}
      </AnimatePresence>
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
