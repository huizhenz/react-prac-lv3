import React from "react";
import { styled } from "styled-components";

const SelectContainer = styled.div`
  height: 200px;
  border: 3px solid #cfcfcf;
  margin: 10px;
`;

const SelectTitle = styled.h1`
  font-size: 35px;
`;

function Select() {
  return (
    <SelectContainer>
      <SelectTitle>Select</SelectTitle>
      <div style={{ display: "flex" }}>
        <div>
          <select
            style={{
              width: "200px",
              height: "30px",
              borderRadius: "10px",
              padding: "5px",
            }}
            name="choice"
          >
            <option key="react" value="react">
              리액트
            </option>
            <option key="java" value="java">
              자바
            </option>
            <option key="spring" value="spring">
              스프링
            </option>
            <option key="reactNative" value="reactNative">
              리액트네이티브
            </option>
          </select>
        </div>
        <div>
          <select name="choice">
            <option key="react" value="react">
              리액트
            </option>
            <option key="java" value="java">
              자바
            </option>
            <option key="spring" value="spring">
              스프링
            </option>
            <option key="reactNative" value="reactNative">
              리액트네이티브
            </option>
          </select>
        </div>
      </div>
    </SelectContainer>
  );
}

export default Select;
