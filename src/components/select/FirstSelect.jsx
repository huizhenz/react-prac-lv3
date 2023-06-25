import React, { useState } from "react";
import { styled } from "styled-components";

const SelectField = styled.div`
  width: 300px;
  height: 40px;
  border: 1px solid #dcdcdc;
  border-radius: 10px;
  margin-right: 10px;
`;

const SelectHeader = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;
`;

const SelectList = styled.div`
  position: absolute;
  width: 300px;
  background-color: #ffffff;
  border: 1px solid #dcdcdc;
  border-radius: 10px;
  margin-top: 5px;
`;

const SelectItem = styled.div`
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: #eaeaea;
  }
`;

function FirstSelect() {
  const options = ["리액트", "자바", "스프링", "리액트 네이티브"];

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <>
      <SelectField>
        <SelectHeader
          onClick={() => {
            setIsOpen((prev) => !prev);
          }}
        >
          <span>{selectedOption || "선택하세요"}</span>
          <span>▼</span>
        </SelectHeader>
        {isOpen && (
          <SelectList>
            {options.map((option) => {
              return (
                <SelectItem
                  key={option}
                  onClick={() => handleOptionClick(option)}
                >
                  {option}
                </SelectItem>
              );
            })}
          </SelectList>
        )}
      </SelectField>
    </>
  );
}

export default FirstSelect;
