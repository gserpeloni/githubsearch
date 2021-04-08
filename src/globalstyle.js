import styled from 'styled-components'

export const DivApp = styled.div`
  text-align: center;
  display: row;
  grid-template-rows: repeat(2, 1fr);
  background-image: linear-gradient(to right, whitesmoke 0%, white 100%);
`;

export const HeaderForms = styled.div`
  display: flex;
  flex-direction: row;
  justify-items: center;
  align-items: center;
  align-self: center;
  justify-content: center;
  margin-bottom: 1rem;
  z-index: 1;
  

 .textField{
  margin-right: 5rem;
  color: white;
 }
 
`;


export const BodyData=styled.div`
   display: grid;
   grid-template-columns: 0.5fr 1fr;
   height: 60%;
  
  .userData{
    background-image: linear-gradient(to top, #09203f 0%, #537895 100%); 
    border-radius: 8rem 1rem 8rem;
    margin-left: 1rem;
    display: grid;
    grid-template-rows: 1fr 0.8fr;
    height: 80vh;
    color: whitesmoke;
  } 
  .RepoData{
    display: grid;
    grid-template-columns: 1fr 1fr;
    overflow: auto;
    height: 78vh;
    margin-right: 2rem;
  }
`;


export const Header = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: inherit;
  align-items: center;
  justify-content: center;
  font-size: calc(1px + 5vmin);
  color: white;  
`;
