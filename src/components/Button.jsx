import React from "react";
import { styled } from "styled-components";

const BtnTitle = styled.p`
  font-size: 32px;
  font-weight: 600;
  margin: 30px 0px 20px 10px;
`;

const LargeBtn = styled.button`
  width: 200px;
  height: 50px;
  border: 3px solid ${(props) => props.borderColor};
  border-radius: 10px;
  background-color: white;
  font-weight: bold;
  color: ${(props) => props.color};
  margin: 10px 5px 5px 10px;
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
      <div>
        <LargeBtn
          borderColor="#00e3ae"
          color="black"
          onClick={() => {
            alert("버튼을 만들어보세요");
          }}
        >
          Large Primary Button
        </LargeBtn>
        <MediumBtn backgroundColor="#24e8bb" darkColor="#48b09d" color="black">
          Medium
        </MediumBtn>
        <SmallBtn backgroundColor="#24e8bb" darkColor="#48b09d" color="black">
          Small
        </SmallBtn>
      </div>
      <div>
        <LargeBtn
          borderColor="#ffc2a1"
          color="red"
          onClick={() => {
            prompt("어렵나요?");
          }}
        >
          Large Negative Button
        </LargeBtn>
        <MediumBtn backgroundColor="#fab2a4" darkColor="#d97338" color="red">
          Medium
        </MediumBtn>
        <SmallBtn backgroundColor="#fab2a4" darkColor="#d97338" color="red">
          Small
        </SmallBtn>
      </div>
    </>
  );
}

export default Button;
