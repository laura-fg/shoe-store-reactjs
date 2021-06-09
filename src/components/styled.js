import styled from 'styled-components'

export const UL = styled.ul`
list-style-type: none;
display: flex;
margin: 0px;


`;

export const LI = styled.li`
  color: white !important;
margin: 10px;

font-size:18px;

&:hover{
    text-decoration:underline;
}
`;

export const LOGO = styled.div`
background: white;
height: 170px;
display: flex;
justify-content:center;
align-items:center;


`;


export const ANUNCIO = styled.div`

display: flex;
justify-content:center;
align-items:center;
margin-top: 40px;
height: 520px;
    img{
      width: 300px;
      height:300px;
      
    }


`;

export const INFO = styled.div`
margin-left: 20px;
font-size:24px;
text-align:left;

p:nth-child(2){
  font-size:18px;
}
p:nth-child(3){
  color: #1d1bb5;
}

button{
  background: #1d1bb5;
  border: 1px solid #1d1bb5;
  border-radius:20px;
  color: white;
  height:50px;
  width: 250px;
  &:hover{
    background:white ;
    color: #1d1bb5 ;
    
   
  }
}

`;