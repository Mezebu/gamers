import React, { useState, useEffect } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Link, useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";
import axios from "axios";
import cx from "classnames";

import Console from "../assets/images/Console.png";
import Rectangle from "../assets/images/Rectangle.png";
import Logo from "../assets/images/Logo.png";
import Group from "../assets/images/Group.png";
import Quotes from "../assets/images/Quotes.png";
import LeftIcon from "../assets/images/LeftIcon.png";
import { isValidEmail } from "../utils/email";

const RegistrationPage = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [emailValid, setEmailValid] = useState("");
  const [canDisplayEmailError, setCanDisplayEmailError] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordValid, setPasswordValid] = useState(false);
  const [canDisplayPasswordError, setCanDisplayPasswordError] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordValid, setConfirmPasswordValid] = useState(false);
  const [
    canDisplayConfirmPasswordError,
    setCanDisplayConfirmPasswordError,
  ] = useState(false);
  const [signInError, setSignInError] = useState("");

  const [agreeToTerms, setAgreeToTerms] = useState(false);

  const isFormValid =
    emailValid && passwordValid && confirmPasswordValid && agreeToTerms;

  const onSubmit = (e) => {
    e.preventDefault();

    axios
      .post("https://603bb33df4333a0017b66d36.mockapi.io/api/v1/registration", {
        username: email,
        password,
      })
      .then(function (response) {
        localStorage.setItem("user", "home");
        history.push("/success");
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
    setEmailValid(isValidEmail(value));
  };

  const onPasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setPasswordValid(value.length > 6);
  };

  const onPasswordRepeat = (e) => {
    const value = e.target.value;
    setConfirmPassword(value);
    setConfirmPasswordValid(password === value);
  };

  useEffect(() => {
    const validSession = !!localStorage.getItem("user");
    if (validSession) {
      history.push("/dashboard");
    }
  });

  return (
    <>
      <div className="reg-container">
        <div className="reg-page">
          <div className="reg-content-left">
            <img src={Console} alt="img" className="left-image" />
            <img src={Rectangle} alt="img" className="left-image" />
            <div className="content-left">
              <img src={Logo} alt="logo" />
              <div className="dots">
                <img src={Group} alt="group" />
              </div>
              <div className="content-text">
                <img src={Quotes} alt="quotes" />
              </div>
              <p>
                He who asks is a fool for five minutes, but he who does not ask
                remains a fool forever.
              </p>
              <p className="proverb-author">Chinese Proverb</p>
              <div className="left-icon">
                <img src={LeftIcon} alt="icon" />
              </div>
            </div>
          </div>
          <div className="reg-content-right">
            <div>
              <Link to="/" className="right-nav-icon">
                <IoIosArrowBack />
                <p className="icon-text">Back</p>
              </Link>
            </div>
            <form onSubmit={onSubmit} className="form">
              <div className="form-text" style={{ color: "black" }}>
                <h3>Register Individual Account!</h3>
                <p>
                  For the purpose of gamers regulation, your
                  <br /> details are required
                </p>
              </div>

              <div className="form-inputs">
                <label className="form-label">
                  Email address
                  {!emailValid && canDisplayEmailError && (
                    <div className="reg-input-error-message">Invalid email</div>
                  )}
                </label>
                <input
                  className={cx("form-input", {
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
              <div className="form-inputs">
                <label className="form-label">
                  Create password
                  {!passwordValid && canDisplayPasswordError && (
                    <div className="reg-input-error-message">
                      Invalid password
                    </div>
                  )}
                </label>
                <input
                  className={cx("form-input", {
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
              <div className="form-inputs">
                <label className="form-label">
                  Repeat password{" "}
                  {!confirmPasswordValid && canDisplayConfirmPasswordError && (
                    <div className="reg-input-error-message">
                      Your passwords don't match
                    </div>
                  )}
                </label>
                <input
                  className={cx("form-input", {
                    "error-input":
                      !confirmPasswordValid && canDisplayConfirmPasswordError,
                  })}
                  type="password"
                  name="confirmpassword"
                  placeholder="Repeat password"
                  value={confirmPassword}
                  onChange={onPasswordRepeat}
                  onBlur={() =>
                    !canDisplayConfirmPasswordError &&
                    setCanDisplayConfirmPasswordError(true)
                  }
                />
              </div>
              <div className="form-inputs">
                <div className="check-btn">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value={agreeToTerms}
                      id="flexCheckDefault"
                      onChange={() => {
                        setAgreeToTerms(!agreeToTerms);
                      }}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      I agree to terms & conditions
                    </label>
                  </div>
                </div>
              </div>
              <div className="form-inputs">
                <Button
                  type="submit"
                  variant="primary"
                  className="form-btn-primary"
                  disabled={!isFormValid}
                >
                  <p className="btn-text"> Register Account</p>
                </Button>
                {signInError && (
                  <div className="reg-network-error-message">{signInError}</div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegistrationPage;
