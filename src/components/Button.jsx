import React from "react";
import { styled } from "styled-components";

function Button() {
  return (
    <>
      <BtnTitle>Button</BtnTitle>
      <div>
        <LargeBtn
          bordercolor="#00e3ae"
          color="black"
          onClick={() => {
            alert("버튼을 만들어보세요");
          }}
        >
          Large Primary Button >
        </LargeBtn>
        <MediumBtn backgroundcolor="#24e8bb" darkcolor="#48b09d" color="black">
          Medium
        </MediumBtn>
        <SmallBtn backgroundcolor="#24e8bb" darkcolor="#48b09d" color="black">
          Small
        </SmallBtn>
      </div>
      <div>
        <LargeBtn
          bordercolor="#ffc2a1"
          color="#c51919"
          onClick={() => {
            prompt("어렵나요?");
          }}
        >
          Large Negative Button
        </LargeBtn>
        <MediumBtn
          backgroundcolor="#fab2a4"
          darkcolor="#d97338"
          color="#c51919"
        >
          Medium
        </MediumBtn>
        <SmallBtn backgroundcolor="#fab2a4" darkcolor="#d97338" color="#c51919">
          Small
        </SmallBtn>
      </div>
    </>
  );
}

export default Button;

const BtnTitle = styled.p`
  font-size: 32px;
  font-weight: 600;
  margin: 30px 0px 20px 10px;
`;

const LargeBtn = styled.button`
  width: 200px;
  height: 50px;
  border: 3px solid ${(props) => props.bordercolor};
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
  background-color: ${(props) => props.backgroundcolor};
  color: ${(props) => props.color};
  margin: 5px;
  cursor: pointer;

  // wow
  &:active {
    background-color: ${(props) => props.darkcolor};
  }
`;

const SmallBtn = styled.button`
  width: 100px;
  height: 40px;
  border: none;
  border-radius: 10px;
  background-color: ${(props) => props.backgroundcolor};
  color: ${(props) => props.color};
  margin: 5px;
  cursor: pointer;

  // wow
  &:active {
    background-color: ${(props) => props.darkcolor};
  }
`;
