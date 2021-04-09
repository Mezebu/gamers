import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import cx from "classnames";
import axios from "axios";
import { FcGoogle } from "react-icons/fc";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { Link, useHistory } from "react-router-dom";

import SignInLogo from "../assets/images/SignInLogo.png";
import LoginQuotes from "../assets/images/LoginQuotes.png";
import JoyStick from "../assets/images/JoyStick.png";
import { saveUserSession, isValidSession } from "../utils/sessions";
import { isValidEmail } from "../utils/email";

const LoginPage = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [emailValid, setEmailValid] = useState(false);
  const [canDisplayEmailError, setCanDisplayEmailError] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordValid, setPasswordValid] = useState(false);
  const [canDisplayPasswordError, setCanDisplayPasswordError] = useState(false);
  const [signInError, setSignInError] = useState("");

  const isFormValid = emailValid && passwordValid;

  const onSubmit = (e) => {
    e.preventDefault();

    axios
      .post("https://603bb33df4333a0017b66d36.mockapi.io/api/v1/login", {
        username: email,
        password,
      })
      .then(function (response) {
        saveUserSession("home");
        history.push("/dashboard");
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
        setSignInError(error.message);
      });
  };

  const onEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setEmailValid(isValidEmail(e.target.value));
  };

  const onPasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setPasswordValid(value.length > 6);
  };

  useEffect(() => {
    if (isValidSession()) {
      history.push("/dashboard");
    }
  });

  return (
    <div className="login-container">
      <div className="login-page">
        <div className="login-page-left">
          <img src={SignInLogo} alt="logo" />
          <div className="login-content-left">
            <div className="login-content-text">
              <img src={LoginQuotes} alt="quotes" />
            </div>
            <p>
              He who asks is a fool for five minutes, but he who does not ask
              remains a fool forever.
            </p>
            <p className="login-proverb-author">Chinese Proverb</p>
            <div className="joystick">
              <img src={JoyStick} alt="joystick" />
            </div>
          </div>
        </div>
        <div className="login-page-right">
          <div className="header-text">
            <h3>Join the game!</h3>
            <p>Go inside the best gamers social network!</p>
            <div className="socials">
              <div className="social-icons">
                <a
                  href="https://www.google.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FcGoogle />
                </a>
              </div>
              <div className="social-icons">
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaTwitter />
                </a>
              </div>
              <div className="social-icons">
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin />
                </a>
              </div>
              <div className="social-icons">
                <a
                  href="https://github.com/Mezebu"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
          <form onSubmit={onSubmit} className="login-form">
            <div className="login-form-inputs">
              <label className="login-form-label">
                Your email
                {!emailValid && canDisplayEmailError && (
                  <div className="input-error-message">Invalid email</div>
                )}
              </label>
              <input
                className={cx("login-form-input", {
                  "error-input": !emailValid && canDisplayEmailError,
                })}
                type="text"
                name="email"
                placeholder="Enter your email"
                value={email}
                onChange={onEmailChange}
                onBlur={() =>
                  !canDisplayEmailError && setCanDisplayEmailError(true)
                }
              />
            </div>
            <div className="login-form-inputs">
              <label className="login-form-label">
                Password
                {!passwordValid && canDisplayPasswordError && (
                  <div className="input-error-message">Invalid password</div>
                )}
              </label>
              <input
                className={cx("login-form-input", {
                  "error-input": !passwordValid && canDisplayPasswordError,
                })}
                type="password"
                name="password"
                placeholder="Enter your password"
                value={password}
                onChange={onPasswordChange}
                onBlur={() =>
                  !canDisplayPasswordError && setCanDisplayPasswordError(true)
                }
              />
            </div>
            <div className="check-box">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Remember me
                </label>
              </div>
            </div>
            {signInError && (
              <div className="network-error-message">{signInError}</div>
            )}
            <div className="login-form-inputs">
              <Button
                type="submit"
                variant="primary"
                className="login-form-btn-primary"
                disabled={!isFormValid}
              >
                Sign in
              </Button>
            </div>
            <div className="login-form-inputs">
              <span>
                Don't have an account?{" "}
                <Link to="/registration" className="link">
                  Sign up
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
