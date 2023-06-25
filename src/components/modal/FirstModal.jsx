import React, { useState } from "react";
import { styled } from "styled-components";

function FirstModal() {
  const [isOpen, setIsOpen] = useState(false);

  const clickOpenCloseModal = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <ModalBtn onClick={clickOpenCloseModal}>open modal</ModalBtn>
      {isOpen && (
        <ModalBox>
          <ModalContents>
            <ModalText>
              닫기와 확인 버튼 2개가 있고, 외부 영역을 눌러도 모달이 닫히지
              않아요.
            </ModalText>
            <CloseBtn onClick={clickOpenCloseModal}>닫기</CloseBtn>
            <CheckBtn>확인</CheckBtn>
          </ModalContents>
        </ModalBox>
      )}
    </>
  );
}

export default FirstModal;

const ModalBtn = styled.button`
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

const ModalBox = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #dededeb6;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContents = styled.div`
  position: relative;
  width: 65%;
  height: 45%;
  background-color: #ffffff;
  border-radius: 15px;
`;

const ModalText = styled.div`
  font-weight: 500;
  padding: 25px;
`;

const CloseBtn = styled.button`
  position: absolute;
  right: 22%;
  bottom: 3%;
  width: 100px;
  height: 40px;
  border: none;
  border-radius: 10px;
  background-color: #fab2a4;
  color: #c51919;
  cursor: pointer;

  &:active {
    background-color: #d97338;
  }
`;

const CheckBtn = styled.button`
  position: absolute;
  right: 2%;
  bottom: 3%;
  width: 100px;
  height: 40px;
  border: none;
  border-radius: 10px;
  background-color: #24e8bb;
  cursor: pointer;

  &:active {
    background-color: #48b09d;
  }
`;
