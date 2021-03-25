import React, {useEffect, useState } from 'react';
import axios from 'axios';
import {TextField, Button}  from '@material-ui/core'
import './App.css';
import Header from './components/Header';
import UserData from './components/UserData'


function App() {

  const [userInfo, setUserInfo] = useState();
  const [userName, setUserName] = useState('');

  const getUserByName = async () => {
      let response  = await axios.get(`https://api.github.com/users/${userName}`)
                        .then((res) => {setUserInfo(res.data)} )
                        .catch(err => console.error(err));
    return;
}

useEffect(() => {
  if(userName !== ''){
    getUserByName()
    console.log('Name:', userName);
  }else console.log('Insert an valid User !');
},[userName, setUserName]);


useEffect(() => {
  if(userInfo !== undefined){
    console.log({userInfo});
  }else console.log('Nothing here!');
}, [userInfo]);


function getNameField(){
  let name = document.getElementById('fieldName').value;
  name ? setUserName(name) : console.log('Insert an valid name');
}


  return (
    <div className="App">
      <Header />
      
    <div>
      <TextField id="fieldName" label="Standard" />
      <Button variant="contained" color="primary" onClick={getNameField}>
        Search
      </Button>
    </div>


      <div className="bodyData">
         <UserData />


        <div className="RepoData">

        </div>

      </div>

    </div>
  );
}

export default App;