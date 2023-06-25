import React from "react";
import { styled } from "styled-components";

const ModalTitle = styled.div`
  font-size: 33px;
  font-weight: 600;
  margin: 10px;
`;

const ModalBox = styled.div`
  margin-bottom: 50px;
`;

const LeftModalBtn = styled.button`
  width: 100px;
  height: 40px;
  border: none;
  border-radius: 10px;
  background-color: #24e8bb;
  margin: 5px 5px 5px 10px;
  cursor: pointer;

  // wow
  &:active {
    background-color: #48b09d;
  }
`;

const RightModalBtn = styled.button`
  width: 200px;
  height: 50px;
  border: 3px solid #fab2a4;
  border-radius: 10px;
  background-color: white;
  font-weight: bold;
  color: #c51919;
  margin: 5px;
  cursor: pointer;

  // wow
  &:active {
    background-color: #e8e8e8;
  }
`;

function Modal() {
  return (
    <>
      <ModalTitle>Modal</ModalTitle>
      <ModalBox>
        <LeftModalBtn>open modal</LeftModalBtn>
        <RightModalBtn>open modal</RightModalBtn>
      </ModalBox>
    </>
  );
}

export default Modal;
