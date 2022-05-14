import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import "./style.css";
import Divider from "@material-ui/core/Divider";
import DocIcon from "@material-ui/icons/DockOutlined";
import CalIcon from "@material-ui/icons/Help";
import { Typography } from "@material-ui/core";
import { Header } from "..";
import { Menu } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";
import { useLocalContext } from "../../context/context";

//import Button from "@restart/ui/esm/Button";
//import YoutubePlayer from 'react-native-youtube-iframe';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});





export default function SwipeableTemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
  });
  const { loggedInUser} = useLocalContext();

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  
  
  

  const list = (anchor) => (
    
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
  
      <Typography variant="h4" className={classes.title}>     
      </Typography>
      
      
      <Divider />
      <List>
        
          <ListItem button onClick={() => window.open('/tutorials', '_blank')}>
            <ListItemIcon>
              <IconButton>
                <DocIcon />
              </IconButton>
            </ListItemIcon>
            <ListItemText primary="Accounting References" />
          </ListItem>
          <Divider />
          <ListItem button onClick={() => window.open('/calculator', '_blank')}>
            <ListItemIcon>
              <IconButton>
                <CalIcon />
              </IconButton>
            </ListItemIcon>
            <ListItemText primary="Calculator" />
          </ListItem>
      </List>
      <Divider />
      </div>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Header>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(anchor, true)}
            >
              <Menu />
            </IconButton>
          </Header>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}

