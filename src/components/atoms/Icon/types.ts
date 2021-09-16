import { DefaultComponentProps } from "types";

export type IconSize = "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "xxxl";
export type IconColor =
	| "primary"
	| "dark"
	| "light"
	| "black"
	| "blue"
	| "green"
	| "grey"
	| "purple"
	| "red"
	| "white"
	| "yellow";
export type IconProps = DefaultComponentProps<{
	title?: string;
	color?: IconColor;
	size?: IconSize;
	xmlns?: string;
	viewBox?: string;
}>;
