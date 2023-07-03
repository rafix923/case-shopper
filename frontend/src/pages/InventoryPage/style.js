import styled from "styled-components";
import {
  primaryColor,
  secondaryColor,
  thirdColor,
} from "../../constants/colors/colors";

export const InventoryHeaderStyled = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: 12vh;
background: ${secondaryColor};
color: ${thirdColor};
text-transform: uppercase;
letter-spacing: 1px;
font-size: 1rem;

// Tablets
@media (max-width: 768px) { 
  h1 {
    font-size: 1.5rem;
  }
}

// Smartphones
@media (max-width: 480px) { 
    h1 {
      font-size: 1.3rem;
      letter-spacing: normal;
      font-family: 'Times New Roman', Times, serif;
    }
  }
`;

export const InventoryMainContainer = styled.div`
background: ${primaryColor};
font-size: 1.2rem;
font-weight: 400;
font-family: cursive;
color: #fff;
`;

export const InventorySubtitle = styled.h2`
display: flex;
justify-content: center;
margin-top: 45px;
margin-bottom: 45px;
font-size:1.6rem;
text-align: center;
font-family: cursive;
color: #fff;
`;

export const InventoryHeaderButton = styled.button`
   background-color: ${thirdColor};
    margin-right: 10px;
    padding: 6px;
    border: 1px solid grey;
    border-radius: 9px;
`;

export const OrderedListContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;

li{
    width: 50vw;
    margin: 0 auto;
    padding: 10px;
    border: #fff solid 1px;
}
`;
