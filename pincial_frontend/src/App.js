import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./container/Home";

function App() {
	return (
		<div>
			<Routes>
				<Route path="login" element={<Login />} />
				<Route path="/*" element={<Home />} />
			</Routes>
		</div>
	);
}

export default App;
