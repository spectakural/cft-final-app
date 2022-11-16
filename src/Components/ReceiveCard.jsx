import React from "react";
import { useState } from "react";
import { FaCloudDownloadAlt } from "react-icons/fa";
import firebase from "firebase/app";

import storage from "../firebase-config";
import {
  ref,
  getDownloadURL,
  listAll,
  connectStorageEmulator,
} from "firebase/storage";
import {
  ref as ref_db,
  set,
  query,
  equalTo,
  getDatabase,
  get,
  child,
  onValue,
} from "firebase/database";
import { useEffect } from "react";
import { doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "../firebase-config";

const ReceiveCard = () => {
  const [dlCode, setDlCode] = useState("");

  const handleDownload = async () => {
    let data = await getDoc(doc(db, "cftdata", dlCode));
    console.log(data.data());
    let url = data.data().url;

    // window.open(url,"_blank")

    const a = document.createElement("a");
    a.href = url;
    a.download = url.split("/").pop();
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div style={styles} className="receiveBox">
      <div>
        <h3 className="receiveText">Receive</h3>
      </div>
      <div className="container1recv">
        <input
          type="text"
          name="Input key"
          id="downloadCode"
          placeholder="Enter key"
          value={dlCode}
          onChange={(e) => setDlCode(e.target.value)}
        />
        <button onClick={handleDownload}>Download</button>
        {/* <FaCloudDownloadAlt color='#FF7527' size={26} /> */}
      </div>
    </div>
  );
};

const styles = {
  marginTop: "20px",
  borderRadius: "10px",
  border: "2px solid #FF7527",
  background: "#EEEDDE",
  padding: "0px 10px 20px",
  width: "250px",
};

export default ReceiveCard;
