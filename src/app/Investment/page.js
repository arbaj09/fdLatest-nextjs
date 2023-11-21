"use client";
import React from "react";
import Graph from "../Graph/page";
import '../globals.css'


import { useState } from "react";

const Investment = () => {

  const [Value, SetValue] = useState({
    Amount: "100000",
    Duration: "5",
    Interest: "6.5",
    option: "Monthly",
    TwoOption: "As Lumpsum",
  });

  const principal = parseFloat(Value.Amount);
  const duration = parseFloat(Value.Duration);
  const interestRate = parseFloat(Value.Interest) / 100;
  let periodsPerYear = 12; // Default to monthly compounding
  if (Value.option === "Quarterly") {
    periodsPerYear = 4;
  } else if (Value.option === "Half yearly") {
    periodsPerYear = 2;
  } else if (Value.option === "Yearly") {
    periodsPerYear = 1;
  }
      // Ensure the correct state updates here with yearlyDetails
  const YearlyGroth = [];
  for (let year = 1; year <= duration; year++) {
    const totalAmount =
      principal *
      Math.pow(1 + interestRate / periodsPerYear, periodsPerYear * year);

    const EarnAsInterest = totalAmount - Value.Amount;
    YearlyGroth.push({
      year,
      totalAmount: totalAmount.toFixed(),
      EarnAsInterest: EarnAsInterest.toFixed(),
    });
  }

  const HandleInputChange = (e) => {
    const { name, value } = e.target;

    SetValue((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };


  return (
    <>
      <div  >
    
        <div className="both">
          <div className="Investment-container">
            <div className="Amount">
              <div className="Invest">
                <p> Invetment Amount</p>
                <p className="text-color">₹ {new Intl.NumberFormat('en-IN').format(Value.Amount)}</p>
              </div>

              <input
              step="20000"
                type="range"
                name="Amount"
                value={Value.Amount}
                min="0"
                max="800000"
                onChange={HandleInputChange}
              />
            </div>
            <div className="Duration">
              <div className="Invest">
                <p>Investment Duration</p>
                <p className="text-color">{Value.Duration} year</p>
              </div>

              <input
                type="range"
                name="Duration"
                value={Value.Duration}
                min="1"
                max="10"
                onChange={HandleInputChange}
              />
            </div>
            <div className="Interest-Rate">
              <div className="Invest">
                <p>Interest Rate</p>
                <p className="text-color">{Value.Interest}%</p>
              </div>
              <input
                type="range"
                name="Interest"
                value={Value.Interest}
                min="1"
                max="20"
                onChange={HandleInputChange}
              />
            </div>
            <div className="Period">
              <p>Compounding Period</p>
              <select
                className="Option"
                name="option"
                value={Value.option}
                onChange={HandleInputChange}
              >
                <option>Monthly</option>
                <option>Quarterly</option>
                <option>Half yearly</option>
                <option>Yearly</option>
              </select>
            </div>
          </div>

          <div className="Container-invested">
            <p id="Text" className="text-sm leading-4">
              After <span className="text-color">{Value.Duration}</span> years,
              you will have
            </p>
            <p className="text-color" id="Text" >
              ₹ {new Intl.NumberFormat('en-IN').format(YearlyGroth[YearlyGroth.length - 1].totalAmount)}
            </p>
            <span id="Text">
              that’s
              <span id="EarnAsInterest">
                {" "}
                ₹ {new Intl.NumberFormat('en-IN').format(YearlyGroth[YearlyGroth.length - 1].EarnAsInterest)}{" "}
              </span>
               earned as interest
            </span>
            <Graph YearlyGroth={YearlyGroth} />
          </div>

      
        
        </div>
      </div>
    </>
  );
};

export default Investment;
