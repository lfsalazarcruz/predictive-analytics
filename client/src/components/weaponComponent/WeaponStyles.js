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
  @media (max-width: 400px) {
    width: 300px;
  }
`;

export const ListTitle = styled.h3`
  font-weight: lighter;
  @media (max-width: 400px) {
    width: 250px;
    font-size: 16px;
  }
`;

export const MonthsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 310px;
  @media (max-width: 400px) {
    width: 250px;
  }
`;

export const MonthButton = styled.button`
  width: 40px;
  height: 40px;
  margin: 2px;
  padding: 0;
  border-radius: 4px;
  font-size: 20px;
  transition: all 0.3s;
  border: none;
  color: #fff;
  background-color: #686868;
  outline: none;
  text-align: center;
  :hover {
    cursor: pointer;
    background-color: #27aed8;
  }
`;

export const MonthSpectrumContainer = styled.div`
  width: 310px;
  @media (max-width: 400px) {
    width: 250px;
    max-height: 40%;
    overflow: scroll;
  }
`;

export const JanSpectrum = styled.div`
  height: 5px;
  margin-bottom: 4px;
  background-image: linear-gradient(
    to right,
    #e035e0,
    #ad35e0,
    #6200ed,
    #3f00ff,
    #000000
  );
`;

export const FebSpectrum = styled.div`
  height: 5px;
  margin-bottom: 4px;
  background-image: linear-gradient(
    to right,
    #ffff00,
    #d8d800,
    #a3a304,
    #d69200,
    #000000
  );
`;

export const MarSpectrum = styled.div`
  height: 5px;
  margin-bottom: 4px;
  background-image: linear-gradient(
    to right,
    #f32100,
    #f32100,
    #f48500,
    #f6c200,
    #f8e400
  );
`;

export const AprSpectrum = styled.div`
  height: 5px;
  margin-bottom: 4px;
  background-image: linear-gradient(
    to right,
    #e3f4b2,
    #7dccbb,
    #2da2c2,
    #2357a5,
    #0c205f
  );
`;

export const MaySpectrum = styled.div`
  height: 5px;
  margin-bottom: 4px;
  background-image: linear-gradient(
    to right,
    #491c49,
    #9a1b5b,
    #e23442,
    #f58d64,
    #f8dcc6
  );
`;

export const JunSpectrum = styled.div`
  height: 5px;
  margin-bottom: 4px;
  background-image: linear-gradient(
    to right,
    #4436fb,
    #3effe9,
    #3efb27,
    #feff01,
    #fa2037
  );
`;

export const JulSpectrum = styled.div`
  height: 5px;
  margin-bottom: 4px;
  background-image: linear-gradient(
    to right,
    #ddecee,
    #83b3e3,
    #7393e1,
    #7762c6,
    #733c9a
  );
`;

export const AugSpectrum = styled.div`
  height: 5px;
  margin-bottom: 4px;
  background-image: linear-gradient(
    to right,
    #3df9d7,
    #a4fa3b,
    #faed01,
    #fa2037,
    #1427aa
  );
`;

export const SepSpectrum = styled.div`
  height: 5px;
  margin-bottom: 4px;
  background-image: linear-gradient(
    to right,
    #fced00,
    #f32100,
    #bb2700,
    #7803fb,
    #3a0053
  );
`;

export const OctSpectrum = styled.div`
  height: 5px;
  margin-bottom: 4px;
  background-image: linear-gradient(
    to right,
    #f6e621,
    #7ad151,
    #24a188,
    #2f6b8e,
    #482475
  );
`;

export const NovSpectrum = styled.div`
  height: 5px;
  margin-bottom: 4px;
  background-image: linear-gradient(
    to right,
    #790622,
    #d86251,
    #f5f4ef,
    #65a9cf,
    #0e4078
  );
`;

export const DecSpectrum = styled.div`
  height: 5px;
  margin-bottom: 4px;
  background-image: linear-gradient(
    to right,
    #0cff00,
    #00ffd0,
    #ffffff,
    #ff44ff,
    #6d04f7
  );
`;
