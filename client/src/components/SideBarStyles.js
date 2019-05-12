import styled from "styled-components";

export const Sidebar = styled.div`
  background-color: #343434;
  width: 46px;
  height: 100vh;
  position: absolute;
  z-index: 100;
`;

export const ButtonInfo = styled.div`
  width: auto;
  background-color: #dbba00;
  opacity: 0.8;
  color: black;
  border-radius: 5px;
  padding: 5px;
  visibility: hidden;
  box-shadow: 0 8px 6px -6px #343434;
  position: absolute;
  z-index: 120;
  font-size: 12px;
  left: 50px;
`;

export const ViewHandlerContainer = styled.div`
  :hover ${ButtonInfo} {
    cursor: pointer;
    visibility: visible;
  }
`;

export const ViewHandler = styled.div`
  width: 30px;
  height: 30px;
  padding: 8.5px 8px;
  position: absolute;
  z-index: 100;
  color: black;
  font-size: 18px;
  background-color: #c4c4c4;
  transition: all 0.3s;
  text-align: center;
  vertical-align: middle;
  :hover {
    cursor: pointer;
  }
`;
