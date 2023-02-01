import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import "./App.css";
import WebCamCapture from "./WebCamCapture";
import Preview from "./Preview";

function App() {
  return (
    <div className="app">
      {/* <WebCamCapture /> */}
      <Router>
        <div className="app-body">
          <Switch>
            <Route path="/" element={<WebCamCapture />} />
            <Route path="preview" element={<Preview />} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
