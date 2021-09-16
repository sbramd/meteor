import styled from "styled-components/macro";

import { IconColor, IconProps, IconSize } from "./types";

const COLORS: { [key in IconColor]: string } = {
	primary: "var(--color-primary)",
	dark: "var(--color-dark)",
	light: "var(--color-light)",
	black: "var(--color-black)",
	blue: "var(--color-blue)",
	green: "var(--color-green)",
	grey: "var(--color-grey)",
	purple: "var(--color-purple)",
	red: "var(--color-red)",
	white: "var(--color-white)",
	yellow: "var(--color-yellow)"
};
const SIZES: { [key in IconSize]: string } = {
	xs: "var(--icon-xs)",
	sm: "var(--icon-sm)",
	md: "var(--icon-md)",
	lg: "var(--icon-lg)",
	xl: "var(--icon-xl)",
	xxl: "var(--icon-xxl)",
	xxxl: "var(--icon-xxxl)"
};

export const Icon = styled.svg<Omit<IconProps, "children" | "title">>`
	width: ${({ size = "xs" }): string => SIZES[size]};
	height: ${({ size = "xs" }): string => SIZES[size]};
	color: ${({ color = "white" }): string => COLORS[color]};
`;
