import {
    Button,
    Checkbox,
    Dialog,
    DialogActions,
    DialogContent,
  } from "@material-ui/core";
  import React, { useState } from "react";
  import { useLocalContext } from "../../context/context";
  import "./style.css";
  const Test = () => {
  
    const iframe = '<iframe src="https://www.classmarker.com/online-test/start/?quiz=yba59c342adc8815" frameborder= "0" style="width:100%;max-width:700px;" height="800"></iframe>';

   
    const getFrame = () => {
        return {
            __html: iframe
          }
    }
    return (
        <div className="main" >
            <div className="main__wrapper"> 
            <h3 style={{padding: 10 }}>Online Test</h3> 
            <div dangerouslySetInnerHTML={ getFrame() } ></div>
            </div>
        </div>
    );
  };
  
  export default Test;