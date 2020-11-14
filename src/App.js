import React from "react";
import "./App.css";
import HOC1 from "./components/HOC1";
import HOC2 from "./components/HOC2";
import "./index.css";

const App = () => {
  return (
    <div className="App">
      <HOC1 inc={5}/>
      <HOC2 inc={10}/>
    </div>
  );
};

export default App;
