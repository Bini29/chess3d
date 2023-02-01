import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MainComponent from "./ChessComponents/MainComponent";
import { Board } from "./Models/Board";

function App() {
  return (
    <div className="App">
      <MainComponent />
    </div>
  );
}

export default App;
