import React, { useState } from "react";
import SignInLogo from "../assets/images/SignInLogo.png";
import LoginQuotes from "../assets/images/LoginQuotes.png";
import JoyStick from "../assets/images/JoyStick.png";
import { FcGoogle } from "react-icons/fc";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import { Link, useHistory } from "react-router-dom";

const LoginPage = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [emailValid, setEmailValid] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordValid, setPasswordValid] = useState("");

  const isFormValid = emailValid && passwordValid;

  const onSubmit = (e) => {
    e.preventDefault();
    history.push("/dashboard");
  };

  const isValidEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
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

  return (
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
              <FcGoogle />
            </div>
            <div className="social-icons">
              <FaTwitter />
            </div>
            <div className="social-icons">
              <FaLinkedin />
            </div>
            <div className="social-icons">
              <FaGithub />
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="login-form">
          <div className="login-form-inputs">
            <label className="login-form-label">Your email</label>
            <input
              className="login-form-input"
              type="text"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={onEmailChange}
            />
          </div>
          <div className="login-form-inputs">
            <label className="login-form-label-log">Password</label>
            <input
              className="login-form-input"
              type="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={onPasswordChange}
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
              Don't have an account? <Link to="/registration">Sign up</Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
