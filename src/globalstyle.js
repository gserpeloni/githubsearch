import styled from 'styled-components'

export const DivApp = styled.div`
  text-align: center;
  display: grid;
  grid-template-rows: 0.5 0.3 1fr ;
`;

export const HeaderForms = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;

  .textField{
    margin-right: 5rem;
    color: white;
    width: 20rem;
 }
 
`;


export const BodyData=styled.div`
   background-color: whitesmoke;
   display: flex;
   width: 100%;  
   height: 80vh;
  
  .userData{
    width: 25%;
    background-image: linear-gradient(to top, #09203f 0%, #537895 100%); 
    border-radius: 8vh 1vh 8vh;
    margin-left: 1rem;
    display: grid;
    grid-template-rows: 1fr 0.8fr;
    color: whitesmoke;
  } 
  .RepoData{
    width: 70%;
    display: grid;
    grid-template-columns: auto auto;
    overflow: auto;
  }
`;


export const Header = styled.div`
  display: flex;
  color: white;  
`;
