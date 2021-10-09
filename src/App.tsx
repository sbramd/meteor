import React, { useEffect } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import WebFont from "webfontloader";

import { Sidebar } from "components";
import { Dashboard } from "components/atoms/Icon/Dashboard";
import { Theme, useTheme } from "theme";
import { GlobalStyle } from "theme/GlobalStyle";

export const App = (): JSX.Element => {
	const [theme, isThemeLoaded, setThemeMode, setThemeData, getThemeFont] = useTheme();

	useEffect(() => {
		WebFont.load({
			google: {
				families: [`${getThemeFont()}:300,400,700`]
			}
		});
	}, [getThemeFont]);

	return isThemeLoaded ? (
		<ThemeProvider theme={theme as Theme}>
			<GlobalStyle />
			<Router>
				<Sidebar>
					<Sidebar.Item to="/">
						<Dashboard />
						<span>Dashboard</span>
					</Sidebar.Item>
					<Sidebar.Item to="watchlist">
						<Dashboard />
						<span>Watchlist</span>
					</Sidebar.Item>
					<Sidebar.Item to="market">
						{/* <Style /> */}
						<span>Market</span>
					</Sidebar.Item>
					<Sidebar.Item to="news">
						{/* <Style /> */}
						<span>News</span>
					</Sidebar.Item>
					<Sidebar.Item to="settings">
						{/* <Style /> */}
						<span>Settings</span>
					</Sidebar.Item>
				</Sidebar>
				<Switch>
					<Route exact path="/" />
					<Route path="/about" />
					<Route path="/dashboard" />
				</Switch>
			</Router>
		</ThemeProvider>
	) : (
		<div>Loading...</div>
	);
};
