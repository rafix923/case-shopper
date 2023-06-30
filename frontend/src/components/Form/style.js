import styled from "styled-components";
import { primaryColor, secondaryColor } from "../../constants/colors/colors";

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
gap: 10px;
width: 20vw;
margin: 0 auto;
padding: 10px 90px;
color: #fff;
`;

export const SelectedClient = styled.div`
display: flex;
justify-content: space-evenly;
background-color: aliceblue;
border: solid 1px gray;
border-radius: 30px;
margin-bottom: 20px;
`;

export const BoxProduct = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 10px;
width: 30vw;
margin: 0 auto;
padding: 10px 90px;
color: #fff;
background: ${secondaryColor} ;
padding: 60px;
border-radius: 30px;

#product}

`;
