import React from "react";

import { AppHeader, AppLink, AppLogo, AppPara, AppWrapper } from "App.style";
import logo from "logo.svg";

function App(): JSX.Element {
	return (
		<AppWrapper>
			<AppHeader>
				<AppLogo src={logo} alt="logo" />
				<AppPara>
					Edit <code>src/App.js</code> and save to reload.
				</AppPara>
				<AppLink
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</AppLink>
			</AppHeader>
		</AppWrapper>
	);
}

export default App;
