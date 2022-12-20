
import StepCounter from "./components/stepCounter/stepCounter";

import { Provider } from "react-redux";
import stepCounterStore from "./redux/stepCounterStore";

function App() {

  return (
    <Provider store={stepCounterStore}>
      <div className="app">
        <StepCounter />
      </div>
    </Provider>
  );
}

export default App;
