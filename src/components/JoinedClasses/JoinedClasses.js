import React from "react";
import { FolderOpen, RemoveCircle } from "@material-ui/icons";
import { Avatar, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import "./style.css";
import db from "../../lib/firebase";
import { useLocalContext } from "../../context/context";


const JoinedClasses = ({ classData }) => {

  const { loggedInMail } = useLocalContext();

  
  const handleDelete = (e) => {
    e.preventDefault();
    var shouldDelete = window.confirm('Do you really want to delete this class?');
    if (shouldDelete) {
      console.log('Delete fired!');
      if(loggedInMail===classData.owner){

        //delete from createdclasses
        db.collection("CreatedClasses")
        .doc(loggedInMail)
        .collection("classes")
        .doc(classData.id)
        .get()
        .then((doc) => {
          if (doc.exists && doc.classCode === classData.classCode) {      
              doc.ref.delete();
              console.log('Deleted!');
          }
        });

        //delete from joinedclasses
        db.collection("JoinedClasses")
        .doc(loggedInMail)
        .collection("classes")
        .doc(classData.id)
        .get()
        .then((doc) => {
          if (doc.exists && doc.classCode === classData.classCode) {      
              doc.ref.delete();
              console.log('Deleted!');
          }
        });
      }
      else{
        db.collection("JoinedClasses")
        .doc(loggedInMail)
        .collection("classes")
        .doc(classData.id)
        .get()
        .then((doc) => {
          if (doc.exists && doc.classCode === classData.classCode) {      
              doc.ref.delete();
              console.log('Deleted!');
          }
        });
      }
      
    }
   
  };
  
 
  return (
    <li className="joined__list">
      <div className="joined__wrapper">
        <div className="joined__container">
          <div className="joined__imgWrapper" />
          <div className="joined__image" />
          <div className="joined__content">
            <Link className="joined__title" to={`/${classData.id}`}>
              <h2>{classData.className}</h2> 
            </Link>
            <p className="joined__owner">{classData.owner}</p>
          </div>
        </div>
        </div>
        
      
      <div className="joined__bottom">
      <Avatar
          className="joined__avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/330px-User_icon_2.svg.png"
        />
        
         
        {
          loggedInMail===classData.owner && <Button onClick={()=> window.open("https://docs.google.com/forms/u/0/?tgif=d", '_blank')}>CONDUCT TEST</Button>
        }
       <br/> <RemoveCircle color="secondary" onClick={handleDelete} />
      </div>
    </li>
  );
};

export default JoinedClasses;
