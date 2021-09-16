import * as styled from "styled-components";

export const GlobalStyle = styled.createGlobalStyle`
	body {
		margin: 0;
		font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu",
			"Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	code {
		font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
	}
`;

export const appLogoSpin = styled.keyframes`
	from {
		transform: rotate(0deg);
	}

	to {
		transform: rotate(360deg);
	}
`;
