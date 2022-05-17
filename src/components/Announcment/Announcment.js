import { Avatar, Button, Box } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useLocalContext } from "../../context/context";
import db, { storage } from "../../lib/firebase";
import "./style.css";
import { RemoveCircle } from "@material-ui/icons";
//import Button from "@restart/ui/esm/Button";

const Announcment = ({ classData }) => {
  const { loggedInMail } = useLocalContext();
  const [announcment, setAnnouncment, toDelete] = useState([]);
  useEffect(() => {
    if (classData) {
      let unsubscribe = db
        .collection("announcments")
        .doc("classes")
        .collection(classData.id)
        .onSnapshot((snap) => {
          setAnnouncment(snap.docs.map((doc) => doc.data()));
        });
      return () => unsubscribe();
    }
  }, [classData]);
  console.log(announcment);

  const handleDelete = (text) => {    
    var shouldDelete = window.confirm('Do you really want to delete this Announcement?');
    if (shouldDelete) {
      console.log('Delete fired!');
      db.collection("announcments")
      .doc("classes")
      .collection(classData.id)
      .onSnapshot((snap) => {
        snap.docs.map((doc) => {
          var temp= doc.data();  
          if(temp.sender === loggedInMail && temp.text === text){
            console.log(temp.imageUrl);
            if(temp.imageUrl!==undefined){
              let imageRef = storage.refFromURL(temp.imageUrl);
              imageRef.delete()
            }
            doc.ref.delete();
            console.log("Deleted!");
          }
        });
      });

    }
  }

  const onDownload = (item) =>{
    const link = document.createElement("a");
    link.download = item.imageName;
    link.href = item.imageUrl;
    link.click();
  }

  return (
    <div>
      {announcment.map((item) => (
        
        <div className="amt">
          <div className="amt__Cnt">
            <div className="amt__top">
              <Avatar />
              <div>{item.sender}</div>
              {(loggedInMail === item.sender) ?
              <RemoveCircle onClick={() =>handleDelete(item.text)} /> : null
              }
            </div>
            <p className="amt__txt">{item.text}</p>
            {item.imageUrl?
              <div>
                {(
                  item.imageUrl.split(/[#?]/)[0].split('.').pop().trim()==='jpeg' ||
                  item.imageUrl.split(/[#?]/)[0].split('.').pop().trim()==='png' ||
                  item.imageUrl.split(/[#?]/)[0].split('.').pop().trim()==='jpg' ||
                  item.imageUrl.split(/[#?]/)[0].split('.').pop().trim()==='svg'?
                  <Box sx={{ m: 4 }}>
                    <img className="amt__img" src={item.imageUrl} alt={item.text} />
                  </Box>:
                  null
                )}
                <Box sx={{ m: 2 }}>
                  <Button onClick={()=>onDownload(item)} variant="contained" color="secondary">
                    Download
                  </Button>
                </Box>
              </div>
              :null
            }
          </div>
        </div>
      ))}
    </div>
  );
};

export default Announcment;
