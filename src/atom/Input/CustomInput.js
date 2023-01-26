import React from "react";
import CustomInputStyle from "./CustomInput.module.css";

function CustomInput({ placeHolder, handleChange, value }) {
  return (
    <>
      <input
        className={CustomInputStyle.input}
        value={value}
        onChange={handleChange}
        placeholder={placeHolder}
      />
    </>
  );
}
export default CustomInput;
