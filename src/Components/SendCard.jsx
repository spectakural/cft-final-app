import React, { useEffect } from "react";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { v4 } from "uuid";
import storage from "../firebase-config";

import {
  ref as ref_storage,
  uploadBytesResumable,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import {
  getFirestore,
  doc,
  collection,
  getDocs,
  addDoc,
  setDoc,
} from "firebase/firestore";
import { getDatabase, ref as ref_db, set } from "firebase/database";
import { db } from "../firebase-config";


const SendCard = ({ file, setFile }) => {
  const [percent, setPercent] = useState(0);
  const [myURL, setMyURL] = useState("");
  const [txCode, setTxCode] = useState(v4().slice(0, 5));
  const [displayCode, setDisplayCode] = useState(false);

  const handleChange = (event) => {
    setFile(event.target.files[0]);
    setDisplayCode(true);
  };

  const handleUpload = async (event) => {
    //Check if any file is selected
    if (!file) {
      alert("Please choose a file first!");
    }

    var currentdate = new Date();
    var datetime = "Last Sync: " + currentdate.getDay() + "/" + currentdate.getMonth() 
    + "/" + currentdate.getFullYear() + " @ " 
    + currentdate.getHours() + ":" 
    + currentdate.getMinutes() + ":" + currentdate.getSeconds();

    //Set filename to code and upload to firebase
    let fileName = txCode;
    const storageRef = ref_storage(storage, `/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        //Calculate percentage uploaded
        const percent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setPercent(percent);
      },
      (err) => console.log(err),
      () => {
        //Download url
        getDownloadURL(uploadTask.snapshot.ref).then(async (url) => {
          setMyURL(url);
          await setDoc(doc(db, "cftdata", txCode), {
            url: url,
            timestamp: datetime
          })
          console.log(url);
        });
      }
    );

    // code : {url : ""}

    //To delete file after 2 minutes
    setTimeout(() => {
      deleteObject(storageRef).then(() => {
        console.log("File deleted successfully");
      });
    }, 1000 * 60 * 1);
  };

  //Use effect to trigger upload to realtime database
  // useEffect(() => {
  //   // const db = getDatabase()
  //   set(ref_db(db, `cftdata/${txCode}`), {
  //     code: txCode,
  //     url: myURL
  //   })
  // })

  return (
    <div style={styles}>
      <div>
        <h3 className="sendText">Send</h3>
      </div>
      <div className="container1">
        <FaPlus color="white" size={15} />
        <div>
          <input type="file" onChange={handleChange} accept="/image/*" />
          <button onClick={handleUpload}>Send</button>
          <p>{percent}%</p>
        </div>
      </div>
      {displayCode && <p className="tx-code">Code - {txCode}</p>}
    </div>
  );
};

const styles = {
  borderRadius: "10px",
  background: "#FF7527",
  padding: "10px 10px 20px 10px",
  width: "250px",
};

export default SendCard;
