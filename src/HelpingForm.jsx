import React, { useEffect, useRef, useState } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import LoadingOverlay from "react-loading-overlay";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { makeStyles } from "@material-ui/core";

function EmailValidation(enteredEmail) {
  const mail_format =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return enteredEmail.match(mail_format) ? true : false;
}

function PhoneValidation(enteredPhone) {
  const phone_format =
    /^\+{0,2}([\-\. ])?(\(?\d{0,3}\))?([\-\. ])?\(?\d{0,3}\)?([\-\. ])?\d{3}([\-\. ])?\d{4}/;
  return enteredPhone.match(phone_format) ? true : false;
}

const useStyles = makeStyles((theme) => ({
  cssLabel: {
    color: "rgba(255, 255, 255, 0.7)",
    "&.Mui-focused": {
      color: "rgba(255, 255, 255, 0.9)",
    },
  },
  textfieldinput: {
    color: "white",
  },
  cssOutlinedInput: {
    "&:hover $notchedOutline": {
      borderColor: "rgba(255, 255, 255, 0.9)",
    },
    "&$cssFocused $notchedOutline": {
      borderColor: "rgba(255, 255, 255, 0.9)",
    },
  },
  cssFocused: {},
  notchedOutline: {
    borderWidth: "1px",
    borderColor: "rgba(255, 255, 255, 0.7)",
  },
  grid: {
    padding: theme.spacing(1),
  },
  customCheckBox: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(1),
    "& input": {
      marginRight: theme.spacing(1),
    },
    "& label": {
      color: "white",
    },
  },
  textareaBox: {
    marginTop: theme.spacing(2),
    "& label": {
      color: "rgba(255, 255, 255, 0.7)",
      display: "block",
      marginBottom: theme.spacing(1),
    },
  },
  formContainer: {
    background: "rgba(0, 0, 0, 0.7)",
    padding: theme.spacing(4),
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
  },
}));

const CustomInputField = ({ ref, value, setValue, label }) => {
  const classes = useStyles();
  return (
    <TextField
      ref={ref}
      onChange={(e) => {
        e.preventDefault();
        setValue(e.target.value);
      }}
      value={value}
      label={label}
      variant="outlined"
      margin="dense"
      required
      fullWidth
      InputLabelProps={{ className: classes.cssLabel }}
      InputProps={{
        classes: {
          root: classes.cssOutlinedInput,
          focused: classes.cssFocused,
          notchedOutline: classes.notchedOutline,
        },
        className: classes.textfieldinput,
      }}
    />
  );
};
const companyTypes = {
  1: "Technology",
  2: "Healthcare",
  3: "Education",
  4: "Finance",
  5: "Manufacturing",
  6: "Retail",
};

const HelpingForm = React.forwardRef((props, ref) => {
  const classes = useStyles();
  const [firstname, setFirstname] = useState("");
  const [email, setEmail] = useState("");
  const [lastname, setLastname] = useState("");
  const [contact, setContact] = useState("");
  const [CompanyName, setCompanyName] = useState("");
  const [cntryName, setCntryName] = useState("");
  const [businessChallenge, setBusinessChallenge] = useState("");
  const [loading, setLoading] = useState(false);
  const fnameInput = useRef(null);
  const lnameInput = useRef(null);
  const emailInput = useRef(null);
  const contactInput = useRef(null);
  const companyNameInput = useRef(null);
  const cntryNameInput = useRef(null);
  const [checkbox, setCheckBox] = useState(0);

  const toggle = (index) => {
    setCheckBox(index);
  };

  const clearForm = () => {
    setFirstname("");
    setEmail("");
    setLastname("");
    setContact("");
    setCompanyName("");
    setCntryName("");
    setBusinessChallenge("");
    setCheckBox(0);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (EmailValidation(email) && PhoneValidation(contact)) {
      const data = {
        email: email,
        business_phone: contact,
        first_name: firstname,
        last_name: lastname,
        company_name: CompanyName,
        country_name: cntryName,
        message: businessChallenge,
      };
      setLoading(true);
      fetch("https://prodserver.skylarklabs.ai/skylarklabsblog/contact/", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => {
          clearForm();
          setLoading(false);
          toast.success("Request sent.");
        })
        .catch((err) => {
          toast.error("Something went wrong. Try again...");
          setLoading(false);
        });
    } else {
      toast.error("Invalid Email or Phone Number.");
    }
  };

  return (
    <section ref={ref} id="contact" className="helpingwith_section modalbox-helpingwith" >
      <div className="container">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <div className="helpingwith_dis">
              <h2>Helping with security in your industry</h2>
            </div>
          </Grid>
          <Grid item xs={12}>
            <LoadingOverlay active={loading} spinner text="Sending Request...">
              <div className={classes.formContainer}>
                <form autoComplete="off" onSubmit={handleOnSubmit}>
                  <Grid container spacing={3}>
                    {/* Input fields for email, phone, names, etc. */}
                    <Grid item xs={12} sm={6} className={classes.grid}>
                      <CustomInputField ref={emailInput} value={email} setValue={setEmail} label="Email" />
                    </Grid>
                    <Grid item xs={12} sm={6} className={classes.grid}>
                      <CustomInputField ref={contactInput} value={contact} setValue={setContact} label="Enter your phone" />
                    </Grid>
                    {/* Checkbox options */}
                    {Object.keys(companyTypes).map((key) => (
                      <Grid item xs={12} sm={6} key={key} className={classes.grid}>
                        <div className={classes.customCheckBox}>
                          <input
                            checked={checkbox == key}
                            onChange={() => toggle(key)}
                            type="checkbox"
                            id={`company_type_${key}`}
                          />
                          <label htmlFor={`company_type_${key}`}>{companyTypes[key]}</label>
                        </div>
                      </Grid>
                    ))}
                    {/* Textarea for business challenge */}
                    <Grid item xs={12}>
                      <div className={classes.textareaBox}>
                        <label>Tell us more about your business challenge</label>
                        <TextField
                          onChange={(e) => setBusinessChallenge(e.target.value)}
                          variant="outlined"
                          multiline
                          rows={4}
                          value={businessChallenge}
                          required
                          fullWidth
                          InputLabelProps={{ className: classes.cssLabel }}
                          InputProps={{
                            classes: {
                              root: classes.cssOutlinedInput,
                              focused: classes.cssFocused,
                              notchedOutline: classes.notchedOutline,
                            },
                            className: classes.textfieldinput,
                          }}
                        />
                      </div>
                    </Grid>
                    {/* Submit button */}
                    <Grid item xs={12}>
                      <button type="submit" className="submitButton">Submit</button>
                    </Grid>
                  </Grid>
                </form>
              </div>
            </LoadingOverlay>
          </Grid>
        </Grid>
        <ToastContainer />
      </div>
    </section>
  );
});

export default HelpingForm;
