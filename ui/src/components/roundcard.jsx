import React from "react";
export const Primarycardround = ({ img, name, onclick }) => {
  //     border-radius: 50%; /* Make the card round */
  //   width: 200px; /* Adjust the width as needed */
  //   height: 200px; /* Adjust the height as needed */
  //   background-color: #007bff; /* Change the background color as desired */
  //   color: white; /* Text color */
  //   display: flex;
  //   justify-content: center;
  //   align-items: center;
  return (
    <div className="col-md-4 col-lg-3 col-sm-6 mt-2">
      <div
        style={{
          borderRadius: "50%",
          width: "80%",
          height: "100%",
          backgroundColor: "white",
          border: "2px solid black",
        }}
      >
        <img
          src={img}
          style={{ height: "100%" }}
          className="card-img-top rounded-circle"
          onClick={onclick}
        />
        <button
          onClick={onclick}
          style={{
            fontSize: "20px",
            fontWeight: "bold",
            border: "none",
            background: "transparent",
          }}
        >
          {name}
        </button>
      </div>
    </div>
  );
};
