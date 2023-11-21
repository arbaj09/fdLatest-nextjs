"use client"
import React from "react";
import './globals.css'


import Investment from "./Investment/page";
import Target from "./Target/page";



import { useState } from "react";

const app = () => {
  const [showInvest, setShowInvest] = useState(true);
  const [showTarget, setShowTarget] = useState(false);

  const showTargetTab = () => {
    setShowTarget(true);
    setShowInvest(false);
  };

  const showInvestmentTab = () => {
    setShowInvest(true);
    setShowTarget(false);
  };

  return <>
  <div>
  <div className="Container bg-white" >
    <div>
      <h2 className="mb-6 text-lg font-semibold font-sans text-gray-700 leading-5">Calculate FD Returns</h2>
    </div>



    <div className="button_container">
     
     <div ><button className="button_slide " onClick={showInvestmentTab} >Investment Amount</button></div>
     <div ><button className="button_slide " onClick={showTargetTab} >Target Amount</button></div>
   
    </div >

 
<div className="both">
    {showTarget && <Target />}
      {showInvest && <Investment />}
      </div>
      </div>
      </div>

  


  </>


};

export default app;
