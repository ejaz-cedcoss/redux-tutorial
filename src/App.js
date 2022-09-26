import { Provider } from "react-redux";
import "./App.css";
import CakeContainer from "./COMPONENTS/CakeContainer";
import HookCakeContainer from "./COMPONENTS/HookCakeContainer";
import store from "./REDUX/Store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <HookCakeContainer/>
      </div>
    </Provider>
  );
}

export default App;
