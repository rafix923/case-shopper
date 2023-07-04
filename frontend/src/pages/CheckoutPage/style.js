import styled from "styled-components";
import {
  secondaryColor,
  thirdColor,
  primaryColor,
} from "../../constants/colors/colors";

export const HeaderCheckoutStyled = styled.div`
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
      letter-spacing: 3px;
      font-family: 'Kablammo', cursive;
      font-weight: 600;
    }
  }
`;

export const CheckoutTitleContainer = styled.h1`
  font-family: 'Kablammo', cursive;
  font-weight: 600;
`;

export const CheckoutMessage = styled.div`
display: flex;
justify-content: center;
border: 12px double grey;
height: fit-content;
width: max-content;
margin: 12vh auto;
border-radius: 15px;
padding: 30px;
background-color: #fff;

// Smartphones
@media (max-width: 480px) { 
display: flex;
justify-content: center;
border: 1px solid grey;
width: 70vw;
margin: 12vh auto;
border-radius: 20px;
padding: 10px;
  }
`;

export const BodyCheckoutContainer = styled.div`
display: flex;
background: ${primaryColor};
width: 100vw;
height: 100vh;
`;
