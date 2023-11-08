"use client";
import React from "react";
import Graph from "./Graph/page";



import { useState } from "react";

const Investment = () => {
  const [futureValue, setFutureValue] = useState(0);
  const [YearlyDetails, setYearlyDetails] = useState([]); // To store yearly details
  const [Lumpsum, setLumpsum] = useState(0);
  const [ShowInvest, setShowInvest] = useState(true);
  const [ShowTarget, setShowTarget] = useState(true);
  const [fdReturn, setFdReturn] = useState(0);
  const [EarnAmount, setEarnAmount] = useState();
  const [Value, SetValue] = useState({
    Amount: "100000",
    Duration: "5",
    Interest: "6.5",
    option: "Monthly",
    TwoOption: "AsLumpsum",
  });
  const calculateYearlyDetails = () => {
    const principal = parseFloat(Value.Amount);
    const duration = parseFloat(Value.Duration);
    const interestRate = parseFloat(Value.Interest) / 100;
    let periodsPerYear = 12;

    if (Value.option === "Quarterly") {
      periodsPerYear = 4;
    } else if (Value.option === "Half yearly") {
      periodsPerYear = 2;
    } else if (Value.option === "Yearly") {
      periodsPerYear = 1;
    }
     // Convert the rate of interest from percentage to decimal


     // Calculate the future value using the formula
     const futureValue = principal * Math.pow(1 + interestRate, periodsPerYear);
 
     // Update the state with the calculated future value
   

    // let totalAmount = principal * Math.pow(1 + interestRate / periodsPerYear, periodsPerYear * duration);
    const yearlyDetails = [];

    let openingBalance = 0;

    for (let year = 1; year <= duration; year++) {
      const interestEarned = openingBalance * (interestRate / periodsPerYear);
      const closingBalance = openingBalance + principal + interestEarned;

      yearlyDetails.push({
        year,
        openingBalance: openingBalance.toFixed(),
        interestEarned: interestEarned.toFixed(),
        closingBalance: closingBalance.toFixed(),
      });

      openingBalance = closingBalance; // Set the opening balance for the next iteration
    }
    setFutureValue(futureValue);

    setYearlyDetails(yearlyDetails);
  };


  

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
  const totalAmount = principal* Math.pow(1 + interestRate / periodsPerYear, periodsPerYear * duration);



  const EarnAsInterest = totalAmount - Value.Amount;
 
  // if (Value.TwoOption === "AsLumpsum") {
  //   if (Value.option === "Quarterly") {
  //     periodsPerYear = 4;
  //   } else if (Value.option === "Half yearly") {
  //     periodsPerYear = 2;
  //   } else if (Value.option === "Yearly") {
  //     periodsPerYear = 1;
  //   }
  //   const na = periodsPerYear * duration;
  //   const ra = parseFloat(Value.Interest) / 100;
  //   const Ma = principal * Math.pow(1 + ra, na);
  //   console.log(Ma)
  //   console.log(principal)
  


    




    


  // }
  
 

  const HandleInputChange = (e) => {

    const { name, value } = e.target;

    SetValue((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));

  }; 




 
      

 


  const TargetHandler = () => {
    setShowTarget(!ShowTarget);
  };

  const AmountHanlder = () => {
    setShowInvest(!ShowInvest);
  };

  return (
    <>
      <div className="Container"   >
        <div className="btn">
          <button className="INVEST-BUTTON" onClick={AmountHanlder}>
            Investment Amount
          </button>

          <button className="INVEST-BUTTON" onClick={TargetHandler}>
            target Amount
          </button>
        </div>
        <div className="both">
          {ShowInvest ? (
            <div className="Investment-container">
              <div className="Amount">
                <div className="Invest">
                  <p> Invetment Amount</p>
                  <p className="text-color" >₹ {Value.Amount}</p>
                </div>

                <input
      
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
          ) : (
            <div className="Investment-container-Expect">
              <span className="Grey-Text">
                How do you like to receive your FD returns?
              </span>
              <select
                className="Regular"
                name="TwoOption"
                value={Value.TwoOption}
                onChange={HandleInputChange}
              >
                <option>AS Regular Income</option>
                <option>As Lumpsum</option>
              </select>

              <div className="Amount">
                <div className="Invest">
                  <p> Expected {Value.TwoOption}</p>
                  <p className="text-color">₹ {Value.Amount}</p>
                </div>

                <input
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
                <div>
                  <p>Compounding Period</p>
                  <select
                    className="Expect"
                    name="option"
                    value={Value.option}
                    onChange={HandleInputChange}
                  >
                    <option >Monthly</option>
                    <option>Quarterly</option>
                    <option >Half yearly</option>
                    <option >Yearly</option>
                  </select>
                </div>

                <div>
                  <p>Senior Citizen</p>
                  <select className="Citizen">
                    <option>No</option>
                    <option>Yes</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {ShowTarget ? (
            <div className="Container-invested" >
              <p id="Text">
                After <span className="text-color">{Value.Duration}</span>{" "}
                years, you will have
              </p>
              <p className="text-color" id="Text">
                ₹ {totalAmount.toFixed()}
              </p>
              <span id="Text">
                that’s ₹<span className="text-color">{EarnAsInterest.toFixed()} </span> earned
                as interest
              </span>
              <Graph />
            </div>
          ) : (
            <><div className="Container-invested">
                <p className="Text" id="Text">
                  Calculation of FD returns
                </p>
                <span>
                  that’s ₹<span className="text-color"> total gain{futureValue} </span> earned as
                  total
                </span>
       
                  <>
                  <table>
                    <tr>
                      <th>year</th>
                      <th>openingBalance</th>
                      <th>interestEarned</th>
                      <th>closingBalance</th>
                    </tr>
                    {YearlyDetails.map(data=>(
                      <tr>
                        <td>{data.year}</td>
                        <td>{data.openingBalance}</td>
                        <td>{data.interestEarned}</td>
                        <td>{data.closingBalance}</td>
                      </tr>

                    ))}
                  </table>
                 
                    </>
              
                
              



              </div><button onClick={calculateYearlyDetails}>
                Lumpsum
                </button></>
       
          )}
        </div>

      </div>
    </>
  );
};

export default Investment;
