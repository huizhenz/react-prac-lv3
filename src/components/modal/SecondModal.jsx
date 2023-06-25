import { eventWrapper } from "@testing-library/user-event/dist/utils";
import React, { useState, useRef, useEffect } from "react";
import { styled } from "styled-components";

function SecondModal() {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef();

  const clickOpenCloseModal = () => {
    setIsOpen((prev) => !prev);
  };

  const clickOutSide = (event) => {
    console.log(modalRef.current);
    console.log(event.target);

    // modalRef.current와 event.target 같을 때만 clickOpenCloseModal 실행
    if (modalRef.current === event.target) {
      clickOpenCloseModal();
    }
  };

  useEffect(() => {
    // mousedown : 요소 위에서 마우스 왼쪽 버튼을 누를 때 발생
    // mousedown 이벤트가 발생하면 clickOutSide 실행
    document.addEventListener("mousedown", clickOutSide);
    return () => {
      // mousedown 이벤트가 발생하면 clickOutSide 제거
      document.removeEventListener("mousedown", clickOutSide);
    };
  }, []);

  return (
    <>
      <ModalBtn onClick={clickOpenCloseModal}>open modal</ModalBtn>
      {isOpen && (
        <ModalBox ref={modalRef}>
          <ModalContents>
            <ModalText>
              닫기 버튼 1개가 있고,
              <br />
              외부 영역을 누르면 모달이 닫혀요.
            </ModalText>
            <CloseBtn onClick={clickOpenCloseModal}>X</CloseBtn>
          </ModalContents>
        </ModalBox>
      )}
    </>
  );
}

export default SecondModal;

const ModalBtn = styled.button`
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
  width: 40%;
  height: 30%;
  background-color: #ffffff;
  border-radius: 15px;
`;

const ModalText = styled.div`
  font-weight: 500;
  padding: 25px;
`;

const CloseBtn = styled.button`
  position: absolute;
  right: 5%;
  top: 5%;
  width: 40px;
  height: 40px;
  border: 1px solid #d7d7d7;
  border-radius: 30px;
  background-color: #ededed;
  cursor: pointer;

  &:hover {
    border: 1px solid #000000;
  }
`;
