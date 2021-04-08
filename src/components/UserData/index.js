import {UserImage, UserDescription} from './styles.js'

export default function UserData(props){

    const imageURL = props.imageUrl;


    return(
        <div className="userData">
          <UserImage> 
              <img src={imageURL}  alt="Avatar" />
           </UserImage>
           <UserDescription>
               <h1>{props.name}</h1>
               <h3>{props.description}</h3>
               <h3>Public Repo:{props?.publicRepos}</h3>
            </UserDescription>
            
        </div>
    )
}
