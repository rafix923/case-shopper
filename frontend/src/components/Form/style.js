import styled from "styled-components";
import { primaryColor, secondaryColor, thirdColor } from "../../constants/colors/colors";

export const FormMainContainer = styled.form`
height: 100vh;
width: 100vw;
margin: 0;
padding: 0;
margin-top: 0;
background: ${primaryColor};

@media (max-width: 480px) { 
 #content{
display: flex;
justify-content: center;
align-items: center;
gap: 5px;
width: 100vw;
color: aliceblue;
border: solid 1px gray; 
border-radius: 50px;
padding: 10px 15px;
}
  }
`;

export const BoxClient = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin: 12px 0;
color: #fff;

input{
  margin: 0 0 0 12px;
}

 button{
    background-color: ${thirdColor};
    padding: 6px;
    margin: 0 10px;
    border: 1px solid grey;
    border-radius: 9px;
 }
`;

export const SelectedClient = styled.div`
display: flex;
justify-content: space-evenly;
background-color: aliceblue;
margin: 0;
`;

export const BoxProduct = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 10px;
width: 100vw;
margin: 0 auto;
padding: 10px 90px;
color: #fff;
background: ${secondaryColor} ;
padding: 60px;

#select-product{
 display: inline-flex;
 justify-content: space-evenly;
 width: 50vw;
 align-items: center;
}

@media (max-width: 480px) { 
width: fit-content;
/* flex-direction: column; */
/* flex-wrap: wrap;
justify-content: center; */
/* align-items: center; */
/* gap: 5px; */
/* width: 100vw; */
/* color: aliceblue;
border: solid 1px gray; 
border-radius: 50px;
padding: 10px 15px; */

  }
`;
