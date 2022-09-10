import React from "react";
import AppContainer, {
  AppContextProvider,
  defaultValues,
} from "./components/AppContainer";
import ForecastCredit from "./components/ForecastCredit";
import ButtonsContainer from "./components/ButtonsContainer";
import Wrapper from "./components/Wrapper";

const App = () => (
  <AppContextProvider value={defaultValues}>
    <AppContainer>
      <Wrapper title="Monto total" init={5000} final={50000} isMoney />
      <Wrapper title="Plazo" init={3} final={24} isMoney={false} />
      <ForecastCredit />
      <ButtonsContainer />
    </AppContainer>
  </AppContextProvider>
);

export default App;
