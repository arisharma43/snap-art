import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import WebCamCapture from "./WebCamCapture";
import Preview from "./Preview";
import Chats from "./Chats";

function App() {
	return (
		<div className="app">
			{/* <WebCamCapture /> */}
			<Router>
				<div className="app-body">
					<Routes>
						<Route path="/" element={<WebCamCapture />} />
						<Route path="Preview" element={<Preview />} />
						<Route path="Chats" element={<Chats />} />
					</Routes>
				</div>
			</Router>
		</div>
	);
}

export default App;
