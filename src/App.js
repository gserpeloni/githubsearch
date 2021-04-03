import React, {useEffect, useState } from 'react';
import axios from 'axios';
import {TextField, Button}  from '@material-ui/core';
import './App.css';
import Header from './components/Header';
import UserData from './components/UserData';
import RepoData from './components/RepoData/index.js';


function App() {

  const [userInfos, setUserInfos] = useState({});
  const [userRepo, setUserRepo] = useState([{name:'Initial State'}]);
  const [userName, setUserName] = useState('gserpeloni');


const getUserByName = async () => {
  await axios.get(`https://api.github.com/users/${userName}`)
             .then((res) => {setUserInfos(res.data)} )
             .catch(err => console.error(err));
}


const getRepos = async () => {
 let repos = await axios.get(`https://api.github.com/users/${userName}/repos`)
 let data = repos.data
 setUserRepo(data);
 console.log(data);
  
}

useEffect(() => {
  if(userName !== ''){
    getUserByName();
    getRepos();
    console.log('Name:', userName);
  }else console.log('Insert an valid User !');
},[userName, setUserName, setUserRepo]);


useEffect(() => {
  if(userInfos !== undefined){
    console.log({userInfos});
    console.log({userRepo});
  }else console.log('Nothing here!');
}, [userInfos]);



function getNameField(){
  let name = document.getElementById('fieldName').value;
  name ? setUserName(name) : console.log('Insert an valid name');
}


  return (
    <div className="App">
      <Header />
      
    <div className="divForm">
      <TextField className="textField" id="fieldName" label="Username" />
      <Button variant="contained" color="primary" onClick={getNameField}>
        Search
      </Button>
    </div>


      <div className="bodyData">
         <UserData
            name= {userInfos?.name}
            imageUrl= {userInfos?.avatar_url}
            description={userInfos?.bio}
            publicRepos={userInfos?.public_repos}
            
         />

      
         <RepoData
            repos = {userRepo}
         />
          


      </div>


    </div>
  );
}

export default App;