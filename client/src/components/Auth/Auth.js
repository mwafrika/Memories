import React, { useState } from "react";
import {
  Container,
  Paper,
  Button,
  Avatar,
  Typography,
  Grid,
} from "@material-ui/core";
import { useDispatch } from "react-redux";
import Icon from "./icon";
import useStyles from "./style";
import { LockOutlined } from "@material-ui/icons";
import Input from "./Input";
import { GoogleLogin } from "react-google-login";
import { AUTH } from "../../constants/actionTypes";
import { useHistory } from "react-router-dom";
import { signup, login } from "../../actions/auth";

const initialValues = {
  email: "",
  password: "",
  confirmPassword: "",
  firstName: "",
  lastName: "",
};

const Auth = () => {
  const classes = useStyles();
  const [isSignup, setIsSignup] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const [formData, setFormData] = useState(initialValues);

  const handleSumbit = (e) => {
    e.preventDefault();
    if (isSignup) {
      dispatch(signup, formData);
    } else {
      dispatch(login, formData);
    }
    console.log(formData);
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const [Showpassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword((prevState) => !prevState);
  const switchMode = () => {
    setIsSignup((prevState) => !prevState);
    handleShowPassword(false);
  };
  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;

    try {
      dispatch({
        type: AUTH,
        data: { result, token },
      });
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };
  const googleError = () => {
    console.log("Google Sign In was unsuccessful. Try again later");
  };
  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlined />
        </Avatar>
        <Typography component="main" variant="h5">
          {isSignup ? "Sign Up" : "Sign In"}
        </Typography>
        <form className={classes.form} onSubmit={handleSumbit}>
          <Grid container spacing={2}>
            {isSignup && (
              <>
                <Input
                  name="firstName"
                  label="First Name"
                  handleChange={handleChange}
                  half
                />

                <Input
                  name="lastName"
                  label="Last Name"
                  handleChange={handleChange}
                  half
                />
              </>
            )}
            <Input
              name="email"
              label="Email Address"
              handleChange={handleChange}
              type="email"
            />
            <Input
              name="password"
              label="Password"
              handleChange={handleChange}
              type={Showpassword ? "text" : "password"}
              handleShowPassword={handleShowPassword}
            />
            {isSignup && (
              <Input
                name="confirmPassword"
                label="Repeat Password"
                type="password"
                handleChange={handleChange}
              />
            )}
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSumbit}
          >
            {isSignup ? "Sign Up" : "Sign In"}
          </Button>
          <GoogleLogin
            clientId="577898177642-v6gfmsmahtvvjduhvh1k057e9cls77ko.apps.googleusercontent.com"
            render={(renderProps) => (
              <Button
                className={classes.googleButton}
                color="primary"
                fullWidth
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                startIcon={<Icon />}
                variant="contained"
              >
                Google Sign In
              </Button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleError}
          />
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Button onClick={switchMode}>
                {isSignup
                  ? "Already have an account ? sign in"
                  : "Don't have an account ? sign up"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;
