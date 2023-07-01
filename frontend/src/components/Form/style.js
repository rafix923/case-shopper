import styled from "styled-components";
import {
  primaryColor,
  secondaryColor,
  thirdColor,
} from "../../constants/colors/colors";

export const FormMainContainer = styled.form`
height: 100vh;
width: 100vw;
margin: 0;
padding: 0;
margin-top: 0;
background: ${primaryColor};
overflow: hidden;

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
  margin-left: 12px;
}

 button{
    background-color: ${thirdColor};
    padding: 6px;
    margin: 0 10px;
    border: 1px solid grey;
    border-radius: 9px;
    font-size: 1rem;
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
 display: flex;
 justify-content: center;
 align-items: center;
 width: 100vw;
 font-size: 1.2rem;
}

input{
  margin: 0 10px;
}

 button{
    background-color: ${thirdColor};
    margin-left: 10px;
    padding: 6px;
    border: 1px solid grey;
    border-radius: 9px;
 }
`;

export const DeliveryDate = styled.div`
display: flex;
justify-content: center;
margin-top: 30px;
padding: 20px;

label{
  font-size: 1.1rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  margin-right: 10px;
}

input{
  margin-right: 10px;

}

button{
    background-color: ${thirdColor};
    margin-left: 10px;
    padding: 6px;
    border: 1px solid grey;
    border-radius: 9px;
 }
`;
