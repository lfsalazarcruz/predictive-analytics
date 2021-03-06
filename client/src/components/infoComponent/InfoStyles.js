import styled from "styled-components";

export const InfoContainer = styled.div`
  width: 80%;
  max-height: 80%;
  overflow: scroll;
  @media (max-width: 400px) {
    max-height: 70%;
  }
`;

export const InfoParagraph = styled.p`
  margin-bottom: 10px;
  font-size: 15px;
`;

export const Link = styled.a`
  color: #26a8ff;
  transition: all 0.3s;
  :hover {
    cursor: pointer;
    background-color: #494949;
  }
`;

export const Link2 = styled.a`
  color: #ffd400;
  transition: all 0.3s;
  :hover {
    cursor: pointer;
    background-color: #494949;
  }
`;
