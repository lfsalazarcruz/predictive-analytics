import styled from "styled-components";

export const ListContainer = styled.div`
  width: 360px;
  background-color: #0f0f0f;
  color: #fff;
  margin: 0;
  padding: 0;
  padding-right: 10px;
  position: absolute;
  z-index: 90;
  height: 100vh;
  opacity: 0.95;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const ListTitle = styled.h3`
  font-weight: lighter;
`;

export const MonthsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 310px;
`;

export const MonthButton = styled.button`
  width: 40px;
  height: 40px;
  margin: 2px;
  border-radius: 4px;
  font-size: 20px;
  transition: all 0.3s;
  border: none;
  :hover {
    cursor: pointer;
    background-color: #27aed8;
    color: #fff;
  }
`;
