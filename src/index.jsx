import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ThemeProvider } from "styled-components";
import { light } from "./themes";
import GlobalStyle from "./GlobalStyles";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ThemeProvider theme={light}>
			<GlobalStyle />
			<App />
		</ThemeProvider>
	</React.StrictMode>
);
