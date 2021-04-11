import styled from 'styled-components'

export const DivApp = styled.div`
  text-align: center;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  background-image: linear-gradient(to right, whitesmoke 0%, white 100%);
`;

export const HeaderForms = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  z-index: 1;

  .textField{
  margin-right: 5rem;
  color: white;
 }
 
`;


export const BodyData=styled.div`
   display: flex;
   width: 100%;  
   
  .userData{
    width: 25%;
    background-image: linear-gradient(to top, #09203f 0%, #537895 100%); 
    border-radius: 8rem 1rem 8rem;
    margin-left: 1rem;
    display: grid;
    grid-template-rows: 1fr 0.8fr;
    height: 80vh;
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
