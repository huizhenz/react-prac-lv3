import React, { useEffect } from "react";
import { useState } from "react";
import { styled } from "styled-components";

const InputTitle = styled.p`
  font-size: 33px;
  font-weight: 550;
  margin: 15px;
`;

const InputContainer = styled.div`
  margin: 10px;
`;

const InputField = styled.input`
  width: 210px;
  height: 20px;
  border: 1px solid black;
  border-radius: 10px;
  margin-right: 25px;
  padding: 10px;

  &:focus {
    outline: 1px solid black;
  }
`;

const InputBtn = styled.button`
  width: 100px;
  height: 40px;
  border: none;
  border-radius: 10px;
  background-color: #24e8bb;
  margin: 5px;
  cursor: pointer;

  &:active {
    background-color: #48b09d;
  }
`;

function Input() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  // comma 추가
  const addComma = (price) => {
    const returnString = price
      ?.toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return returnString === "" ? "0" : returnString;
  };

  // 숫자만 입력 받기
  const onChangeName = (event) => setName(event.target.value);
  const onChangePrice = (event) => {
    // 구조 분해 할당을 이용해서 event.target 객체에서 value 속성을 추출하여 value 변수에 할당
    const { value } = event.target;
    // console.log(event.target); // <input type="text" class="~~" value="입력한 값">
    // console.log({ value }); // {value: "입력한 값"}
    const onlyNumber = value.replace(/[^0-9]/g, "");
    const str = onlyNumber.replaceAll(",", "");
    setPrice(str);
  };

  const clickSaveHandler = () => {
    if (!name && !price) {
      return alert(`이름과 가격 모두 입력해주세요.`);
    } else {
      return alert(`{ name: ${name}, price: ${price} }`);
    }
  };

  return (
    <>
      <InputTitle>Input</InputTitle>
      <InputContainer>
        이름
        <InputField
          type="text"
          value={name}
          onChange={onChangeName}
        ></InputField>
        가격
        <InputField
          type="text"
          value={addComma(price) || ""}
          onChange={onChangePrice}
        ></InputField>
        <InputBtn onClick={clickSaveHandler}>저장</InputBtn>
      </InputContainer>
    </>
  );
}

export default Input;
