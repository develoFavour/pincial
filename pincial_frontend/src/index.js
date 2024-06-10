import React from "react";
import ReactDOM from "react-dom/client";
import { GoogleOAuthProvider } from "@react-oauth/google";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<GoogleOAuthProvider clientId="629761771500-9t81tlqv08o3t48s02bjhas2tqclke13.apps.googleusercontent.com">
			<Router>
				<App />
			</Router>
		</GoogleOAuthProvider>
	</React.StrictMode>
);
