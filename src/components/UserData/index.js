import {UserImage} from './styles.js'

export default function UserData(props){

    const imageURL = props.imageUrl;


    return(
        <div className="userData">
          <UserImage> 
              <img src={imageURL}  alt="Avatar" />
           </UserImage>
           <div className="userDescription">
               <h3>Name: {props.name}</h3>
               <h3>Description: {props.description}</h3>
               <h3>Public Repo: {props?.publicRepos}</h3>
               <h3></h3>
           </div>
        </div>
    )
}