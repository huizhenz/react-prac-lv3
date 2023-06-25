import React, { useState } from "react";
import { styled } from "styled-components";
import FirstSelect from "./select/FirstSelect";
import SecondSelect from "./select/SecondSelect";

function Select() {
  return (
    <>
      <SelectWrapper>
        <SelectTitle>Select</SelectTitle>
        <div style={{ display: "flex" }}>
          <FirstSelect />
          <SecondSelect />
        </div>
      </SelectWrapper>
    </>
  );
}

export default Select;

const SelectWrapper = styled.div`
  height: 220px;
  border: 3px solid #e4e4e4;
  margin: 50px 10px 10px 10px;
  overflow: hidden;
`;

const SelectTitle = styled.h2`
  font-size: 33px;
  font-weight: 600;
  margin: 20px 0px 20px 0px;
`;
