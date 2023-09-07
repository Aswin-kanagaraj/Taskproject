import React from "react";
import { Productcard } from "./Card";

import clothimage from "../images/clothimage1.jpg";
import clothimage1 from "../images/clothimage2.jpg";
import clothimage3 from "../images/kidscloth.jpg";

export const Cloth =()=>{
    return(
        <div className="row">
            
            <Productcard productname="For Men's" productimg={clothimage} />
            <Productcard productname="For Women's" productimg={clothimage1} />
            <Productcard productname="For Kids" productimg={clothimage3} />
        </div>
    )
}