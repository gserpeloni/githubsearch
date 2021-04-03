import './styles.css';

export default function UserData(props){

    const imageURL = props.imageUrl;


    return(
        <div className="userData">
           <div className="userImage"> 
              <img src={imageURL}  alt="Avatar" />
           </div>
           <div className="userDescription">
               <h3>Name: {props.name}</h3>
               <h3>Description: {props.description}</h3>
               <h3>Public Repo: {props.publicRepos}</h3>
               <h3></h3>
           </div>
        </div>
    )
}