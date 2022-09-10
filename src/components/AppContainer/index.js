import React, { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

import "../../assets/main.scss";

export const defaultValues = {
  creditAmount: 0,
  creditInterval: 0,
};

const AppContext = createContext(defaultValues);

// eslint-disable-next-line react/prop-types
const AppContextProvider = ({ value, children }) => {
  const [state, setState] = useState(value);
  return (
    <AppContext.Provider value={{ state, setState }}>
      {children}
    </AppContext.Provider>
  );
};

const AppContainer = ({ children }) => {
  return (
    <div className="AppContainer__container">
      <div className="AppContainer__container-box">
        <div>
          <h1>Simulá tu crédito</h1>
        </div>
        {children}
      </div>
    </div>
  );
};

AppContainer.propTypes = { children: PropTypes.node.isRequired };

const useAppState = () => useContext(AppContext);

export { AppContextProvider, useAppState };

export default AppContainer;
