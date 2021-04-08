import styled from 'styled-components'

export const RepoItens = styled.div`
    display: flex;
    flex-direction: initial;
    margin-left: 2rem;
    margin-top: 1rem;
    border-radius: 25px;
    background-color: #1B1B1B;
    opacity: 90%;
    color: white;

    .divColor{
        padding-top: 10px;
        padding-left: 2px;
        width: 5%;
        font-size: 3vh;
        color: goldenrod;
        border-radius: 100%;
        font-weight: bolder;
    }

    .divRepoInfos{
        padding-left: 15px;
        width: 95%;
        font-size: 2.0vh;
        text-align: left;


        a{
            color: white;
            text-decoration: none;       
        }
        a:hover{
            color: gold ; 
        }
    }

`;
