export type FontFamily = "Exo" | "Lato" | "Oswald";
export type ThemeMode = "dark" | "light";
export type ThemeName = "onyx" | "amethyst" | "emerald";
export type Theme = {
	data: {
		id: string;
		name: ThemeName;
		border: string;
		breakpoints: {
			xs: string;
			sm: string;
			md: string;
			lg: string;
			xl: string;
		};
		colors: {
			primary: string;
			black: string;
			blue: string;
			green: string;
			grey: string;
			purple: string;
			red: string;
			white: string;
			yellow: string;
		};
		radius: string;
		shadow: {
			all: string;
			bottom: string;
			left: string;
			right: string;
			top: string;
		};
		spacing: {
			baseUnit: string;
		};
		icon: {
			baseUnit: string;
		};
		transition: string;
		typography: {
			baseUnit: string;
			bodyLineHeight: number;
			font: {
				family: FontFamily;
				weights: {
					bold: number;
					light: number;
					regular: number;
				};
			};
			headingLineHeight: number;
		};
	};
	mode: ThemeMode;
};
