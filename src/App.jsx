import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  resetCommonStates,
  setCommonState,
} from "./store/ApiSlice/commonStateSlice";

function App() {
  const { count } = useSelector((state) => state.commonStates);
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + Redux & Toolkit</h1>
      <div className="card">
        <button
          onClick={() =>
            dispatch(setCommonState({ stateName: "count", data: count + 1 }))
          }
        >
          Count is {count}
        </button>{" "}
        <button onClick={() => count > 0 && dispatch(resetCommonStates())}>
          Reset
        </button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
