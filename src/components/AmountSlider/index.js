import React from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "./amountSlider.scss";

// eslint-disable-next-line react/prop-types
const AmountSlider = ({ init, final, isMoney, value, setValue }) => {
  const currencyFormatter = (v) => {
    if (isMoney) {
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(v);
    }

    return v;
  };

  return (
    <div className="amountSlider__slider-container">
      <Slider
        range
        allowCross={false}
        onChange={(value) => setValue(value)}
        min={init}
        max={final}
        value={value}
        step={1}
        included={false}
      />
      <div className="amountSlider__slider-values-container">
        <div className="amountSlider__slider-left">
          {currencyFormatter(init)}
        </div>
        <div className="amountSlider__slider-right">
          {currencyFormatter(final)}
        </div>
      </div>
    </div>
  );
};

export default AmountSlider;
