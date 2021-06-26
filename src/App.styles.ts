import styled from "styled-components/macro";
import { appLogoSpin } from "index.styles";

export const AppWrapper = styled.div`
	text-align: center;
`;

export const AppLogo = styled.img`
	height: 40vmin;

	@media (prefers-reduced-motion: no-preference) {
		animation: ${appLogoSpin} infinite 20s linear;
	}
`;

export const AppHeader = styled.header`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	min-height: 100vh;
	color: white;
	font-size: calc(10px + 2vmin);
	background-color: #282c34;
`;

export const AppLink = styled.a`
	color: #61dafb;
`;

export const AppPara = styled.p`
	font-size: large;
`;
