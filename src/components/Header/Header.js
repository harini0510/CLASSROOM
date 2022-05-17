import {
  AppBar,
  Avatar, Button,
  Toolbar,
  Typography,
} from "@material-ui/core";

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CreateClass, JoinClass } from "..";
import { useLocalContext } from "../../context/context";
import { useStyles } from "./style";



const Header = ({ children }) => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const {
    setCreateClassDialog,
    setJoinClassDialog,
    loggedInUser,
    logoutUser,
  } = useLocalContext();
 
    function handleCreate() {
    handleClose();
    setCreateClassDialog(true);
  }

  const handleJoin = () => {
    handleClose();
    setJoinClassDialog(true);
  };

  const goToHomeScreen = () =>{

  }

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="static">
        <Toolbar className={classes.toolbar}>
          <div className={classes.headerWrapper}>
            {children}
            <Link className="toHome" to={`/`}>
              <Typography variant="h6" className={classes.title} onClick={goToHomeScreen()}>
                B O O K - K E E P E R
              </Typography>
            </Link>
            
          </div>
          <div className={classes.header__wrapper__right}> 
          <div className= "searchBox">
            <input type="text" placeholder="Search.." className="search" />

          </div>
          <Button onClick={handleJoin}>Join Class</Button>
              <Button onClick={handleCreate}>Create Class</Button>
              <Avatar
                
                src={loggedInUser?.photoURL}
                className={classes.icon}
              />
                 <p> <div className="name">
                    {loggedInUser?.displayName}</div>
                   <div className="emailid">
                    {loggedInUser?.email}
                    </div>
                    </p>
            
            <div>
              
               <Button style = {{marginLeft: 8 }}variant="outlined" color="orange" onClick={() => logoutUser()}>
                Logout
              </Button>
            </div>
          </div>
        </Toolbar>
      </AppBar>
      <CreateClass />
      <JoinClass />
    </div>
  );
};

export default Header;
