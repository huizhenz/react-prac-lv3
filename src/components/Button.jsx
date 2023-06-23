import React from "react";
import { styled } from "styled-components";

const BtnTitle = styled.h2`
  font-size: 30px;
  margin: 20px 0px 10px 10px;
`;

const BtnBox = styled.div``;

const LargeBtn = styled.button`
  width: 200px;
  height: 50px;
  border: 3px solid ${(props) => props.borderColor};
  border-radius: 10px;
  background-color: white;
  font-weight: bold;
  color: ${(props) => props.color};
  margin: 10px 5px 10px 10px;
  cursor: pointer;

  // wow
  &:active {
    background-color: #e8e8e8;
  }
`;

const MediumBtn = styled.button`
  width: 150px;
  height: 45px;
  border: none;
  border-radius: 10px;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  margin: 5px;
  cursor: pointer;

  // wow
  &:active {
    background-color: ${(props) => props.darkColor};
  }
`;

const SmallBtn = styled.button`
  width: 100px;
  height: 40px;
  border: none;
  border-radius: 10px;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  margin: 5px;
  cursor: pointer;

  // wow
  &:active {
    background-color: ${(props) => props.darkColor};
  }
`;

function Button() {
  return (
    <>
      <BtnTitle>Button</BtnTitle>
      <BtnBox>
        <LargeBtn
          borderColor="#00e3ae"
          color="black"
          onClick={() => {
            alert("버튼을 만들어보세요");
          }}
        >
          Large Primary Button
        </LargeBtn>
        <MediumBtn backgroundColor="#00e3ae" darkColor="#3dac98" color="black">
          Medium
        </MediumBtn>
        <SmallBtn backgroundColor="#00e3ae" darkColor="#3dac98" color="black">
          Small
        </SmallBtn>
      </BtnBox>
      <BtnBox>
        <LargeBtn
          borderColor="#ffc2a1"
          color="red"
          onClick={() => {
            prompt("어렵나요?");
          }}
        >
          Large Negative Button
        </LargeBtn>
        <MediumBtn backgroundColor="#ffc2a1" darkColor="#d97338" color="red">
          Medium
        </MediumBtn>
        <SmallBtn backgroundColor="#ffc2a1" darkColor="#d97338" color="red">
          Small
        </SmallBtn>
      </BtnBox>
    </>
  );
}

export default Button;
