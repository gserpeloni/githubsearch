import styled from 'styled-components'

export const RepoItens = styled.div`
    display: flex;
    flex-direction: initial;
    height: 70%;
    margin-left: 1.7rem;
    border-radius: 1rem;
    background-color: #1B1B1B;
    opacity: 90%;
    color: white;
    padding-top: 0;

    .divColor{
        padding-top: 0.5rem;
        padding-left: 2px;
        width: 5%;
        color: goldenrod;
        font-size: 0.9rem;
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
