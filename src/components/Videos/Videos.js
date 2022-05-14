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
  const Video = () => {
    const { createClassDialog, setCreateClassDialog } = useLocalContext();
    const [check, setChecked] = useState(false);
    const [showForm, setShowForm] = useState(false);
    return (
        <div className="main" >
            <div className="main__wrapper"> 
            <h3 style={{padding: 10 }}>Introduction of Accounting</h3>        
            <ul class="list-unstyled video-list-thumbs row" style={{whiteSpace:"nowrap", overflow:"hidden" ,display: "flex",
  flexWrap: "wrap"}}>
            {[{"href":"https://www.youtube.com/embed/ABjCVTBnO_U", "title":"What is Accounting?"},
      {"href":"https://www.youtube.com/embed/yYX4bvQSqbo", "title":"Basics concepts of Accounting"},
      {"href":"https://www.youtube.com/embed/hNXQnu8Yt2k" ,"title":"Difference between Accounting and Accountancy"},
      {"href":"https://www.youtube.com/embed/fCB8WMup9Qg", "title":"Types of Accounting"},
      {"href":"https://www.youtube.com/embed/GEZZftO_VrE", "title":"Methods of Accounting(cash and accural)"}].map((anchor) => (
                <li class="col-lg-3 col-sm-4 col-xs-6 item" style={{display: "inline-block", paddingLeft:"5px"
                    }}>
                    <a href={anchor.href} title="What is Accounting?">
                        <img src="https://previews.123rf.com/images/arhimicrostok/arhimicrostok1707/arhimicrostok170700150/81208152-video-icon-flat-design-style-movie-premiere-live-video-calendar-.jpg" alt="Barca" class="img-responsive" height="120px" />
                        <h2>{anchor.title}</h2>
                        <span class="glyphicon glyphicon-play-circle"></span>
                        <span class="duration">Unkown</span>
                    </a>
                </li>
            ))}
              
            </ul>           
            <h3 style={{padding: 10 }}>Accounting Concepts</h3>        
            <ul class="list-unstyled video-list-thumbs row" style={{whiteSpace:"nowrap", overflow:"hidden" ,display: "flex",
  flexWrap: "wrap"}}>
            {[{"href":"https://www.youtube.com/embed/ZMQeISu7wdE", "title":"Separate Business entity concept"},
      {"href":"https://www.youtube.com/embed/EibibVFEkvk", "title":"Double Entry concept"},
      {"href":"https://www.youtube.com/embed/n0A6H-4Y0x4" ,"title":"Going concern concept"},
      {"href":"https://www.youtube.com/embed/e71V1rx4IIU" ,"title":"Matching concept"},
    
      {"href":"https://www.youtube.com/embed/EibibVFEkvk", "title":"Double Entry concept"},
      {"href":"https://www.youtube.com/embed/n0A6H-4Y0x4" ,"title":"Going concern concept"},
      {"href":"https://www.youtube.com/embed/e71V1rx4IIU" ,"title":"Matching concept"}
    ].map((anchor) => (
                <li class="col-lg-3 col-sm-4 col-xs-6 item" style={{display: "inline-block", paddingLeft:"5px"
                
                    }}>
                    <a href={anchor.href} title="What is Accounting?">
                        <img src="https://previews.123rf.com/images/arhimicrostok/arhimicrostok1707/arhimicrostok170700150/81208152-video-icon-flat-design-style-movie-premiere-live-video-calendar-.jpg" alt="Barca" class="img-responsive" height="120px" />
                        <h2>{anchor.title}</h2>
                        <span class="glyphicon glyphicon-play-circle"></span>
                        <span class="duration">Unkown</span>
                    </a>
                </li>))}
            </ul>
            </div>
        </div>
    );
  };
  
  export default Video;