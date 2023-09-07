import axios from "axios";
import React, { useState, useEffect } from "react";
import { HOST } from "./Home";
import "./login.css";
import Header from "./Header";
export const Createuser = () => {
  const [userReg, setuserReg] = useState({
    useremail: "",
    password: "",
  });
  // console.log("userReg", userReg);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`${HOST}/api/auth/register`, userReg);
    setuserReg({ useremail: "", password: "" });
  };

  return (
    <div>
      <Header />
      <div
        className="row"
        style={{ justifyContent: "center", alignItems: "center" }}
      >
        <div className="col-md-6">
          <div className="card ">
            <div class="card-body bodyclass1">
              <h4>USER REGISTRATION</h4>
              <form onSubmit={(e) => handleSubmit(e)}>
                <div>
                  <div>
                    <label className=" mt-2" style={{ fontWeight: "bold" }}>
                      USER EMAIL:
                    </label>
                    &nbsp;
                    <input
                      type="text"
                      name="useremail"
                      value={userReg.useremail}
                      onChange={(e) => {
                        const { name, value } = e.target;
                        setuserReg({ ...userReg, [name]: value });
                      }}
                      className="textbx"
                      placeholder=" enter user email"
                      autoComplete="off"
                    />{" "}
                  </div>
                  <div className="mt-2">
                    <label style={{ fontWeight: "bold" }}>PASSWORD:</label>
                    &nbsp;
                    <input
                      type="text"
                      name="password"
                      value={userReg.password}
                      onChange={(e) => {
                        const { name, value } = e.target;
                        setuserReg({ ...userReg, [name]: value });
                      }}
                      className="textbx"
                      placeholder="enter password "
                    />
                  </div>
                </div>
                <button className="btn btn-secondary mt-2">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
