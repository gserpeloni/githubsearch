import './styles.css';

export default function UserData(){

    return(
        <div className="userData">
           <div className="userImage"> 
            <h1>Logo</h1>
           </div>
           <div className="userDescription">
               <h3>Name:</h3>
               <h3>Description:</h3>
               <h3>Qntd Repo</h3>
               <h3></h3>
           </div>
        </div>
    )
}