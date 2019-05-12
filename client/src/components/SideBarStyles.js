import styled from "styled-components";

export const Sidebar = styled.div`
  background-color: #212121;
  width: 46px;
  height: 100vh;
  position: absolute;
  z-index: 100;
`;

export const ButtonInfo = styled.div`
  width: auto;
  background-color: #686868;
  opacity: 0.9;
  border-radius: 5px;
  padding: 5px 10px;
  visibility: hidden;
  box-shadow: 0 8px 6px -6px #343434;
  position: absolute;
  z-index: 120;
  font-size: 12px;
  left: 50px;
  color: black;
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
  background-color: #969696;
  border-radius: 0 4px 4px 0;
  transition: all 0.3s;
  text-align: center;
  vertical-align: middle;
  :hover {
    cursor: pointer;
    background-color: #777777;
  }
`;

export const SelectedHandlerBar = styled.div`
  width: 46px;
  height: 5px;
  position: absolute;
  z-index: 100;
`;

export const ListContainer = styled.div`
  display: flex;
`;
