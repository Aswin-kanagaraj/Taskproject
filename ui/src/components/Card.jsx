import React from "react";
import clothimage from "../images/clothimage1.jpg";
export const Productcard = ({ productimg, productname }) => {
  return (
    <div className=" col-md-3 col-sm-6 col-md-4 mt-2">
      <div
        style={{
          borderRadius: "0px 0px 0px 0px",
          border: "2px solid #ff7300",
          backgroundColor: "transparent",
          color: "white",
          height: "170px",
          textAlign: "center",
          display: "flex",
          fontSize: "13px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src={productimg} style={{ height: "100%", width: "100%" }} />
      </div>
      <div
        style={{
          borderRadius: "0px 0px 20px 20px",
          border: "2px solid #ff7300",
          backgroundColor: "#1CA2AD",
          color: "white",
          height: "90px",
          textAlign: "center",
          display: "flex",
          fontSize: "13px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <span style={{ fontSize: "25px" }}> {productname}</span>
      </div>
    </div>
  );
};
