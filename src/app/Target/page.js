"use client";
import React from "react";
import { useState } from "react";
import '../globals.css'

const Target = () => {
  const [TotalInterest, setTotalInterest] = useState(0);
  const [YearlyDetails, setYearlyDetails] = useState([]); // To store yearly details
  const [Lumpsum, setLumpsum] = useState(0);
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

  const ExceptedHanler = () => {
    if(Value.TwoOption==="As Lumpsum"){
         let periodsPerYear = 12; // Default to monthly compounding
  if (Value.option === "Quarterly") {
    periodsPerYear = 4;
  } else if (Value.option === "Half yearly") {
    periodsPerYear = 2;
  } else if (Value.option === "Yearly") {
    periodsPerYear = 1;
  }
   
    
   const r = interestRate / periodsPerYear;
    const nt = duration * periodsPerYear;
    const compoundAmount = principal / Math.pow(1 + r, nt);
    const TotalEarnInterest = compoundAmount - principal;

    const yearlyDetails = [];
    let openingBalance = compoundAmount;
    for (let year = 1; year <= duration; year++) {

      let interestEarned = 0; 
      

      for (let period = 1; period <= periodsPerYear; period++) {
        const compoundAmount = openingBalance * Math.pow(1 + interestRate / periodsPerYear, 1);
        const interest = compoundAmount - openingBalance;
        interestEarned += interest;
        openingBalance = compoundAmount;
      }
      

      const closingBalance = openingBalance;

      yearlyDetails.push({
        year,
        openingBalance: (openingBalance - interestEarned).toFixed(),
        interestEarned: interestEarned.toFixed(),
        closingBalance: closingBalance.toFixed(),
      });
    
    }

    // Ensure the correct state updates here with yearlyDetails

    setYearlyDetails(yearlyDetails);
    setLumpsum(compoundAmount);
    setTotalInterest(TotalEarnInterest);
  }}

 


  const HandleInputChange = (e) => {
    const { name, value } = e.target;

    SetValue((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };





  return (
    <>
      <div className="Container" onClick={ExceptedHanler}>
        
        <div className="both">
     
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
                  <option>Monthly</option>
                  <option>Quarterly</option>
                  <option>Half yearly</option>
                  <option>Yearly</option>
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
 
      
       
            
              <div className="Container-invested" >
                <p className="Text" id="Text">
                  Calculation of FD returns
                </p>
                <div className="Traget-Amount-container">
                  you need to invest
                  <div>
                    <span className="text-color" id="lumpsum-text">
                      {" "}
                      ₹{Lumpsum.toFixed()}{" "}
                    </span>
                    
                  </div>
                  <div>
                    Once For <span className="text-color">{duration} </span>year
                    you earn{" "}
                    <span className="total-interest-text">
                      ₹{TotalInterest.toFixed()}
                    </span>{" "}
                    as interest
                  </div>
                </div>

                <>
                <div className="Table-conatiner">
                  <table className="Table">
                    <tr >
                      <th>year</th>
                      <th>openingBalance</th>
                      <th>interestEarned</th>
                      <th>closingBalance</th>
                    </tr>
                    {YearlyDetails.map((data) => (
                      <tr className="Data" key={data.id}>
                        <td>{data.year}</td>
                        <td>₹ {data.openingBalance}</td>
                        <td>₹ {data.interestEarned}</td>
                        <td>₹ {data.closingBalance}</td>
                      </tr>
                    ))}
                  </table></div>
                </>
              </div>
              
        
       
        </div>
      </div>
    </>
  );
};

export default Target;
