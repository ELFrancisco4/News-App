import React from "react";

function InputComponent({ placeHolder, inputClass, inputType }) {
  return (
    <input type={inputType} className={inputClass} placeholder={placeHolder} />
  );
}

export default InputComponent;
