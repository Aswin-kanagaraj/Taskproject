import React from "react";
import { Productcard } from "./Card";
import Chairs from '../images/chairs.jpg'
import shofa from '../images/Shofa.jpg'
import DiningTable from '../images/Diningtaple.jpg'

export const Furniture = () =>{
return(
    <div className="row">
             <Productcard productname="Dining Table" productimg={DiningTable} />
             <Productcard productname="Chairs" productimg={Chairs} />
             <Productcard productname="Shofa" productimg={shofa} />
    </div>
)
}