import React from "react";
import { useDispatch } from "react-redux";
// import { RootState } from "stores/rootReducer";
import { authSlice } from "stores/auth";

function App() {
  // const authState = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  return (
    <div>
      <header>
        <p onClick={() => dispatch(authSlice.actions.authenticate())}>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
