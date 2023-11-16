"use client"
import React from "react";
import './globals.css'


import Investment from "./Investment/page";
import Target from "./Target/page";



import { useState } from "react";

const app = () => {

  const [ShowInvest, setShowInvest] = useState(true);
  const [ShowTarget, setShowTarget] = useState(false);







  const TargetHandler = () => {
    setShowTarget(!ShowTarget);
    setShowInvest(!ShowInvest);
  };

  const INVESTMENT= () => {
    setShowInvest(!ShowInvest);
  };

  return <>
  <div className="app"> 
  <div>
    <div className="button_container">
     
     <div ><button className="button_slide " onClick={TargetHandler} >Target</button></div>
     <div ><button className="button_slide " onClick={INVESTMENT} >Invetment</button></div>
     </div>
     
  
   
    <div >
 
   {ShowInvest? (<Investment/>):
    (<Target/>)}

    </div>
    </div>
   
  </div>
  </>


};

export default app;
