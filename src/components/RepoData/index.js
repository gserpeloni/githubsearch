import { useState } from "react";
import './styles.css';


export default function RepoData(props){
    return(
        <div className="RepoData">
            {
             props.repos.map((elem, index)=>{
                 return(
                    <div className="repoItem">
                        <div className="divColor">{index+1}</div>
                        <div className="divRepoInfos"> 
                            <h5><a href={`${elem.url}` } >{elem.name} </a></h5>
                            <h5>{elem.description}</h5>
                        </div>
                    </div>
                );
             })

            }

        </div>
    );

};