import React, { useState } from "react";
import Console from "../assets/images/Console.png";
import Rectangle from "../assets/images/Rectangle.png";
import Logo from "../assets/images/Logo.png";
import Group from "../assets/images/Group.png";
import Quotes from "../assets/images/Quotes.png";
import LeftIcon from "../assets/images/LeftIcon.png";
import { IoIosArrowBack } from "react-icons/io";
import { Link, useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";

const RegistrationPage = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [emailValid, setEmailValid] = useState("");
  const [password, setPassword] = useState("");
  const [passwordValid, setPasswordValid] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordValid, setConfirmPasswordValid] = useState("");

  const isFormValid = emailValid && passwordValid && confirmPasswordValid;

  const onSubmit = (e) => {
    e.preventDefault();
    history.push("/success");
  };

  const isValidEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
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

  return (
    <>
      <div className="reg-container">
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
            <div className="form-text">
              <h3>Register Individual Account!</h3>
              <p>
                For the purpose of gamers regulation, your
                <br /> details are required
              </p>
            </div>

            <div className="form-inputs">
              <label className="form-label">Email address</label>
              <input
                className="form-input"
                type="text"
                name="email"
                placeholder="Enter your email"
                value={email}
                onChange={onEmailChange}
              />
            </div>
            <div className="form-inputs">
              <label className="form-label">Create password</label>
              <input
                className="form-input"
                type="password"
                name="password"
                placeholder="Enter your password"
                value={password}
                onChange={onPasswordChange}
              />
            </div>
            <div className="form-inputs">
              <label className="form-label">Repeat password</label>
              <input
                className="form-input"
                type="password"
                name="confirmpassword"
                placeholder="Repeat password"
                value={confirmPassword}
                onChange={onPasswordRepeat}
              />
            </div>
            <div className="form-inputs">
              <div className="radio">
                <input className="radio-btn" type="radio" />I agree to terms &
                conditions
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
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegistrationPage;
