import { Avatar, Button, IconButton, TextField } from "@material-ui/core";
import React, { useState } from "react";
import db, { storage } from "../../lib/firebase";
import "./style.css";
import firebase from "firebase";
import { useLocalContext } from "../../context/context";
import { Announcment } from "..";
import { ReactCalculator } from "simple-react-calculator";

const Main = ({ classData }) => {
  const { loggedInMail } = useLocalContext();
  const [showInput, setShowInput] = useState(false);
  const [inputValue, setInput] = useState("");
  const [image, setImage] = useState(null);
  const [result, setResult] = useState("");
  const clickHandler = (event) => {
    setResult(result.concat(event.target.value))
  }
  const clearDisplay =()=>{
    setResult("");
  }

  const calculate = () => {
    setResult(eval(result).toString());
  }

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
   };
   

  const handleUpload = () => {
    console.log(image,'abc')
    if(image===null){
      db.collection("announcments")
            .doc("classes")
            .collection(classData.id)
            .add({
              timstamp: firebase.firestore.FieldValue.serverTimestamp(),
              text: inputValue,
              sender: loggedInMail,
      });
    }
    else{
      var dt=Date.now();
      const uploadImage = storage.ref(`images/${loggedInMail}-${dt}-${image.name}`).put(image);

      uploadImage.on("state_changed", () => {
        storage
          .ref("images")
          .child(`${loggedInMail}-${dt}-${image.name}`)
          .getDownloadURL()
          .then((url) => {
            db.collection("announcments")
              .doc("classes")
              .collection(classData.id)
              .add({
                timstamp: firebase.firestore.FieldValue.serverTimestamp(),
                imageUrl: url,
                text: inputValue,
                sender: loggedInMail,
                imageName: image.name,
              });
              
          });
      });
    }
  };
  
  return (
    <div className="main">
      <div className="main__wrapper">
      <div className="main__content">
          <div className="main__wrapper1">
            <div className="main__bgImage">
              <div className="main__emptyStyles" />
            </div>
            <div className="main__text">
              <h1 className="main__heading main__overflow">
                {classData.className}
              </h1>
              <div className="main__section main__overflow">
                {classData.section}
              </div>
              <div className="main__wrapper2">
                <em className="main__code">Class Code :</em>
                <div className="main__id">{classData.id}</div>
                <em className="main__code">Owner :</em>
                <div className="main__id">{classData.owner}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="main__announce">
          
          <div className="main__announcements">
            <div className="main__announcementsWrapper">
              <div className="main__ancContent">
                {showInput ? (
                  <div className="main__form">
                    <TextField
                      id="filled-multiline-flexible"
                      multiline
                      label="Announce Something to class"
                      variant="filled"
                      value={inputValue}
                      onChange={(e) => setInput(e.target.value)}
                    />
                    <div className="main__buttons">
                      <input
                        onChange={handleChange}
                        variant="outlined"
                        color="primary"
                        type="file"
                      />

                      <div>
                        <Button onClick={() => setShowInput(false)}>
                          Cancel
                        </Button>

                        <Button
                          onClick={handleUpload}
                          color="primary"
                          variant="contained"
                          
                        >
                          Post
                        </Button>
                        
                      </div>
                      
                    </div>
                  </div>
                ) : (
                  <div
                    className="main__wrapper100"
                    onClick={() => setShowInput(true)}
                  >
                    <Avatar />
                    <div>Announce Something to class</div>
                    
                  </div>
                )}
               
              </div>
            </div>
            
            <Announcment classData={classData} />
            
                  
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Main;
