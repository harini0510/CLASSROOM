import { Button } from "@material-ui/core";
import React from "react";
import { useLocalContext } from "../../context/context";
import "./style.css";
import logo from "../../images/image3.jpeg";
import image from "../../images/image1.png"

const Login = () => {
  const { login, loggedInUser } = useLocalContext();

  console.log(loggedInUser);
  
  return (
    <div className="login">
    <img className="login__logo" src={logo} alt="Classroom" />

    <Button variant="contained" color="default" onClick={() => login()}>
      Login
    </Button>
    </div>
    
  );
};

export default Login;
