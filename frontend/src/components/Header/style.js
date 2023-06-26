import styled from "styled-components";
import { secondaryColor, thirdColor } from "../../constants/colors/colors";



export const HeaderStyled = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: 9vh;
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
