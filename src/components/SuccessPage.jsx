import React from "react";
import { BsCheckCircle } from "react-icons/bs";
import { FaCheckCircle } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";

const SuccessPage = () => {
  const history = useHistory();

  const goToDashboard = () => {
    history.push("/dashboard");
  };
  return (
    <>
      <div className="success-page-container">
        <div className="success-page">
          <div className="success-items">
            <BsCheckCircle className="bs-check-icon" />
            <h3>Registration Successful</h3>
            <p className="success-text">
              <FaCheckCircle className="fa-check-icon" />
              Thank you.
              <br />
              Registration has been successfully completed.
            </p>
            <Button
              onClick={goToDashboard}
              className="btn-primary btn btn-primary"
            >
              Proceed
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SuccessPage;
