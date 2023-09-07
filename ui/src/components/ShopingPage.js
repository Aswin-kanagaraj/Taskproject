import React, { useState } from "react";
import { Container, Row, Tabs, Tab } from "react-bootstrap";
import { Primarycardround } from "./roundcard";
import electronicsimg from "../images/electronicsimg.jpg";
import clothroundimg from "../images/clothrounimg.jpg";
import furnitureimg from "../images/furnitureimg.jpg";
import shoe from "../images/Shoe.jpg";
import Logout from "../images/Logout.png";
import axios from "axios";
import { useNavigate } from "react-router-dom/dist/umd/react-router-dom.development";
import { Shoeproduct } from "./shoes";
import { Electronics } from "./electronics";
import { Furniture } from "./furniture";
import { Cloth } from "./cloth";
import { HOST } from "./Home";
export const DashboarPage = () => {
  const navigate = useNavigate();
  const logout = () => {
    axios.post(`${HOST}/api/auth/logout`).then(()=>navigate("/"))
  };
const [cloths ,setCloths] = useState(false);
const [shoes ,setShoes] = useState(false);
const [electronics ,setElectronics] = useState(false);
const [chair ,setChair] = useState(false);
  return (
    <div
      className="mb-3"
      style={{
        backgroundColor: "lightgrey",
        padding: "20px 10px 20px 10px",
        marginTop: "20px",
      }}
    >
      <div style={{ float: "right" }}>
        <button className="btn btn-primary mt-2" onClick={() => logout()}>
          <img src={Logout} style={{ height: "30px" }} />
        </button>
      </div>
      <div className="col-md-12 col-lg-12 col-sm-12">
        <div className="row">
          <Primarycardround name="Cloth" img={clothroundimg} onclick={()=>{setCloths(true);setShoes(false);setChair(false);setElectronics(false)}} />
          <Primarycardround name="Electronics" img={electronicsimg} onclick={()=>{setElectronics(true);setShoes(false);setChair(false);setCloths(false)}}  />
          <Primarycardround name="Furniture" img={furnitureimg} onclick={()=>{setChair(true);setShoes(false);setElectronics(false);setCloths(false)}}  />
          <Primarycardround name="Shoes" img={shoe} onclick={()=>{setShoes(true);setChair(false);setElectronics(false);setCloths(false)}}/>
        </div>
      </div>
      <br />
      {
        <div className="col-md-12 col-lg-12 col-sm-12">
          <div className="row" style={{ marginTop: "50px" }}>
            {cloths?<Cloth/>:null}
           {shoes ?<Shoeproduct/>:null}
           {electronics? <Electronics/>:null}
            {chair?<Furniture/>:null}
          </div>
        </div>
      }
    </div>
  );
};
