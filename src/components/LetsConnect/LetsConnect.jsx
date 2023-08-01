import React from "react";
import { FaArrowRight } from "react-icons/fa";

const LetsConnect = () => {
  return (
    <div className="lets-connect">
      <div className="container">
        <div className="row">
          <div className="col-md-5 offset-md-1">
            <div className="lets-connect-item">
              <h3>Lets Connect !</h3>
              <p>
                Stay Upto Date With Restaurants Around you. Subscribe With
                Email.
              </p>
            </div>
          </div>
          <div className="col-md-5">
            <div className="input-group mt-3">
              <input
                type="text"
                className="form-control"
                placeholder="Your Email Address"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
              <span className="input-group-text" id="basic-addon1">
                <FaArrowRight />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LetsConnect;
