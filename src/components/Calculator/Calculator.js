  import React from "react";
  import { ReactCalculator } from "simple-react-calculator";
  import "./style.css";
  const Calculator = () => {
    
    return (
        <div className="main" >
            <div className="main__wrapper"> 
                <h2 style={{paddingTop:"30px"}}>Calculator</h2>
                <ReactCalculator/>
            </div>
        </div>
    );
  };
  
  export default Calculator;