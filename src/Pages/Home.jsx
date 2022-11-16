import React from 'react'
import Banner from '../Components/Banner';
import ReceiveCard from '../Components/ReceiveCard';
import SendCard from '../Components/SendCard';
import { useState } from 'react';

import storage from '../firebase-config'
import { ref , uploadBytesResumable, getDownloadURL } from 'firebase/storage';

const Home = () => {
  const [file, setFile] = useState("");
  
  return (
      <div style={styles}>
        <div>
          <SendCard file = {file} setFile = {setFile} />
          <ReceiveCard file = {file} setFile = {setFile}/>
        </div>
        <Banner />  
      </div>
  )
}

const styles = {
    marginTop: "40px",
    display: "flex",
    justifyContent: "space-between",
    padding: "80px"
  }

export default Home