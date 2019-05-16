import styled from "styled-components";

export const NavbarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 40px;
  z-index: 300;
  position: absolute;
`;

export const ViewHandler = styled.button`
  background: gray;
  border: none;
  border-top: 1px solid #fff;
  border-bottom: 1px solid #000;
  border-right: 1px solid #686868;
  color: #fff;
  width: 40px;
  height: 40px;
  outline: none;
  background-color: #494949;
  transition: all 0.3s;
  font-size: 16px;
  :hover {
    cursor: pointer;
    background-color: #686868;
  }
`;
