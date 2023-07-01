import styled from "styled-components";
import { thirdColor } from "../../constants/colors/colors";

export const SelectedProduct = styled.div`
 display: inline-flex;
 justify-content: center;
 width: 50vw;
 align-items: center;
 gap: 10px;

 button{
    background-color: ${thirdColor};
    padding: 6px;
    border: 1px solid grey;
    border-radius: 9px;
 }
`;
