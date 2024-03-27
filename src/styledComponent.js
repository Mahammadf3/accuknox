import styled from "styled-components";

export const CustomPassage = styled.p`
  font-weight: ${(props) => props.size};
  color: ${(props) => props.colorChange};
  ${(props) => props.className && `.${props.className} {font-weight: bold;}`}
  ${(props) => props.italicData && `.${props.italicData} {font-style: italic;}`}
  ${(props) => props.underLineData && `.${props.underLineData} {text-decoration: underline;}`}
`;
