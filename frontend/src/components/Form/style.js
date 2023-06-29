import styled from "styled-components";
import { primaryColor } from "../../constants/colors/colors";

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
color: aliceblue;
`;
