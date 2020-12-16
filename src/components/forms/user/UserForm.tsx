import React, { FC, useState, useEffect } from "react";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  Input,
  Button,
} from "@material-ui/core";

import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  formCenter: {
    margin: "auto",
    width: "50%;",
  },
  textFieldCenter: {
    width: "50%;",
    margin: "auto",
    display: "block",
  },
  buttonCenter: {
    margin: "auto",
    display: "block",
  },
}));

const UserForm: FC = () => {
  let [loginName, setLoginName] = useState("");
  let [name, setName] = useState("");
  let [nickName, setNickname] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  const classes = useStyles();

  return (
    <div>
      <form
        className={classes.formCenter}
        onSubmit={(event) => {
          event.preventDefault();
          console.log({ loginName, name, nickName, email, password });
        }}
      >
        <TextField
          id="loginName"
          label="Login Name"
          required
          fullWidth
          className={classes.textFieldCenter}
          onChange={(event) => setLoginName(event.target.value)}
        />
        <TextField
          id="name"
          label="Name"
          required
          fullWidth
          className={classes.textFieldCenter}
          onChange={(event) => setName(event.target.value)}
        />
        <TextField
          id="nickName"
          label="Nick Name"
          required
          fullWidth
          className={classes.textFieldCenter}
          onChange={(event) => setNickname(event.target.value)}
        />
        <TextField
          id="email"
          label="Email Address"
          type="email"
          required
          fullWidth
          className={classes.textFieldCenter}
          onChange={(event) => setEmail(event.target.value)}
        />
        <TextField
          id="password"
          label="Password"
          type="password"
          required
          fullWidth
          className={classes.textFieldCenter}
          onChange={(event) => setPassword(event.target.value)}
        />
        <br />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={classes.buttonCenter}
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default UserForm;
