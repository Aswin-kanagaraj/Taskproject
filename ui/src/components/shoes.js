import React from "react";
import { Productcard } from "./Card";
import gensshoe from '../images/boyshoe.jpg'
import girlshoe from '../images/womenshoe.jpg'
import kidsshoe from '../images/kidsshoe.jpg'
export const  Shoeproduct =()=>{


    return(
        <div className=" row">
             <Productcard productname="For Boys" productimg={gensshoe} />
             <Productcard productname="For Girls" productimg={girlshoe} />
             <Productcard productname="For Kids" productimg={kidsshoe} />
        </div>
    )


}