import React from "react";
import { useAppState } from "../AppContainer";
import AmountInput from "../AmountInput";
import AmountSlider from "../AmountSlider";

// eslint-disable-next-line react/prop-types
const Wrapper = ({ init, final, title, isMoney }) => {
  const { state, setState } = useAppState();

  return (
    <>
      <AmountInput
        isMoney={isMoney}
        title={title}
        value={state}
        setValue={setState}
      />
      <AmountSlider
        isMoney={isMoney}
        init={init}
        final={final}
        value={state}
        setValue={setState}
      />
    </>
  );
};

export default Wrapper;
