import styled from "styled-components";

export const LoadImage = styled.div`
  height: calc(170px + 7px + 30px);
`;
export const Image = styled.img`
  width: 170px;
  height: 125px;
`;

export const FileContainer = styled.div`
  width: 170px;
  height: 30px;
  background: #fefefe;
  border: 1px solid #cccccc;
  box-sizing: border-box;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  label {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    cursor: pointer;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    display: flex;
    align-items: center;
    letter-spacing: 1.25px;
    color: rgba(63, 62, 62, 0.6);
  }
`;


export const FileInput = styled.input`
  width: 170px;
  height: 30px;
  position: absolute;
  z-index: -1;
  opacity: 0;
`;