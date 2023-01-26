import React from "react";
import Datestyle from './DateInput.module.css'
function DateInput({ value, handleFunction }) {
  return (
    <>
      <input className={Datestyle.Date} type="date" value={value} onChange={handleFunction} />
    </>
  );
}
export default DateInput;
