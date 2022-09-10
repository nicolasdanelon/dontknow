import React from "react";
import "./currencyInput.scss";

// eslint-disable-next-line react/prop-types
const AmountInput = ({ title, isMoney, value, setValue }) => {
  if (isMoney) {
    value = `$ ${value}`;
  }

  return (
    <div className="interval-input__interval--container">
      <div className="interval-input__interval--child-element interval-input__interval--title">
        <h2 className="interval-input__element--title">{title}</h2>
      </div>
      <div className="interval-input__interval--child-element interval-input__interval--input">
        <input
          className="interval-input__interval--input"
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          placeholder="1"
          size="2"
          maxLength={2}
          max="24"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
      </div>
    </div>
  );
};

export default AmountInput;
