import React from "react";
import { styled } from "styled-components";
import FirstModal from "./modal/FirstModal";
import SecondModal from "./modal/SecondModal";

function Modal() {
  return (
    <>
      <ModalTitle>Modal</ModalTitle>
      <FirstModal />
      <SecondModal />
    </>
  );
}

export default Modal;

const ModalTitle = styled.div`
  font-size: 33px;
  font-weight: 600;
  margin: 10px;
`;
