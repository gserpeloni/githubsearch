import {useEffect, useState } from 'react';
import axios from 'axios';

import './App.css';
import Header from './components/Header';
import UserData from './components/UserData'


function App() {

  const [userInfo, setUserInfo] = useState();
  const [userName, setUserName] = useState('gserpeloni');

  const getUserByName = async () => {
      let response  = await axios.get(`https://api.github.com/users/${userName}`)
                        .then((res) => {return res} )
                        .catch(err => console.error(err));

      let data = JSON.parse(JSON.stringify(response)).data
      setUserInfo(data); 
}


 useEffect(() => {
   getUserByName();
   console.log('userinfo:',{userInfo});
 },[userName]);


  return (
    <div className="App">
      <Header />
      

      <div className="bodyData">
         <UserData />

        <div className="RepoData">
         <button onClick={() => setUserName('vuejs')}> 
           Search
         </button>
        </div>

      </div>
    </div>
  );
}

export default App;
