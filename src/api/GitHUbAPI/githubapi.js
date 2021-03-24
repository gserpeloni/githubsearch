import axios from 'axios';



const getUserByName = async () => {
       let response  = await axios.get('https://api.github.com/users/gserpeloni')
                         .then((res) => {return res} )
                         .catch(err => console.error(err));

       let data = JSON.parse(JSON.stringify(response)).data
       console.log('data', data);
    }


export  { getUserByName };