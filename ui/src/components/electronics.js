import React from "react";
import { Productcard } from "./Card";
import Laptopimg from "../images/Laptopimage.jpg";
import Mobileimage from "../images/Mobileimage.jpg";
import Earphone from "../images/Earphoneimage.jpg";
export const Electronics = () => {
  return (
    <div className="row">
      <Productcard productname="Laptops" productimg={Laptopimg} />
      <Productcard productname="Mobiles" productimg={Mobileimage} />
      <Productcard productname="Head Phone" productimg={Earphone} />
    </div>
  );
};
