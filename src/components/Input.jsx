import React from "react";
import { useState } from "react";
import { styled } from "styled-components";

function Input() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);

  return (
    <div>
      <h1>Input</h1>
      <div>
        이름
        <input
          type="text"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        ></input>
        가격
        <input
          type="number"
          value={price}
          onChange={(event) => {
            setPrice(event.target.value);
          }}
        ></input>
        <button
          onClick={() => {
            alert(`{ name: ${name}, price: ${price} }`);
          }}
        >
          저장
        </button>
      </div>
    </div>
  );
}

export default Input;
