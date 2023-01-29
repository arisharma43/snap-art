import React from "react";
import { Router, Route, Routes } from "react-router-dom";
import "./App.css";
import WebCamCapture from "./WebCamCapture";

function App() {
  return (
    <div className="App">
      <WebCamCapture />
      <Router>
        <div className="app_body">
          <Routes>
            <Route exact path="/test">
              <h1>Testing!?!?!</h1>
            </Route>
            <Route exact path="/">
              <WebCamCapture />
            </Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
