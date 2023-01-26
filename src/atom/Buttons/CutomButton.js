import React from "react";
import ButtonStyle from './CustomButton.module.css'
function CustomButton({ buttontext, handleClick, className }) {
  return (
    <>
      <button id={ButtonStyle.allButton} className={className} onClick={handleClick}>
        {buttontext}
      </button>
    </>
  );
}
export default CustomButton;
