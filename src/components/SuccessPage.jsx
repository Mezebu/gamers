import React from "react";
import { BsCheckCircle } from "react-icons/bs";
import { FaCheckCircle } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";

const SuccessPage = () => {
  const history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();
    history.push("/");
  };
  return (
    <>
      <form onSubmit={onSubmit}>
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
                <br /> Proceed to login.
              </p>
              <Button type="submit" className="btn-primary btn btn-primary">
                Proceed
              </Button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default SuccessPage;
