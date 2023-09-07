import React, { useState } from "react";

import { Redirect } from "react-router-dom";
import "./login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { HOST } from "./Home";
import { BiSolidUserCircle } from "react-icons/bi";
import { Productcard } from "./Card";
import Header from "./Header";
export const Loginpage = () => {
  const navigate = useNavigate();
  const [loginvalue, setloginvalue] = useState({ useremail: "", password: "" });
  const [alert, setAlert] = useState(false);
  const loginDatails = (e) => {
    e.preventDefault();
    axios.post(`${HOST}/api/auth/login`, loginvalue).then((response) => {
            if(response.data && response.data.success===true){
             navigate('./Dashboard')
            }else{
      setAlert(true);
            }
    });
    setloginvalue({ useremail: "", password: "" });
  };

  return (
    <div>
      <Header/>
      <div
        className="row"
        style={{ justifyContent: "center", alignItems: "center" }}
      >
        <div className="col-md-6">
          <div className="card ">
            <div class="card-body bodyclass1">
              <h4 className="">LOGIN !</h4>
              <form
                onSubmit={(e) => {
                  loginDatails(e);
                }}
              >
                {alert ? (
                  <div className="text-danger">Invalid Credential</div>
                ) : null}
                <div>
                  <div className=" mt-3">
                    <b style={{ fontSize: "15px" }}>USER NAME</b> : &nbsp;
                    {/* <BiSolidUserCircle className="iconstyle" />{" "} */}
                    <input
                      className="textbx"
                      type="text"
                      value={loginvalue.useremail}
                      onChange={(e) =>
                        setloginvalue({
                          ...loginvalue,
                          [e.target.name]: e.target.value,
                        })
                      }
                      name="useremail"
                      placeholder="enter useremail"
                    />
                  </div>
                  <div className=" mt-3">
                    <b style={{ fontSize: "15px" }}>POSSWORD</b> : &nbsp;
                    <input
                      className="textbx"
                      type="password"
                      placeholder="enter password"
                      value={loginvalue.password}
                      onChange={(e) =>
                        setloginvalue({
                          ...loginvalue,
                          [e.target.name]: e.target.value,
                        })
                      }
                      name="password"
                    />
                  </div>
                  <div>
                    <button className="btn btn-secondary mt-2" type="submit">
                      Login
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
