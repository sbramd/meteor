export const sharedTheme = {
	data: {
		border: "1px solid var(--color-light-700)",
		breakpoints: {
			xs: "0px",
			sm: "600px",
			md: "960px",
			lg: "1280px",
			xl: "1920px"
		},
		colors: {
			black: "#212121",
			blue: "#2196f3",
			green: "#4caf50",
			grey: "#9e9e9e",
			purple: "#9c27b0",
			red: "#e53935",
			white: "#fafafa",
			yellow: "#ffeb3b"
		},
		radius: "10px",
		shadow: {
			all: "0 0 5px var(--color-light-700)",
			bottom: "0 5px 5px -5px var(--color-light-700)",
			left: "-5px 0 5px -5px var(--color-light-700)",
			right: "5px 0 5px -5px var(--color-light-700)",
			top: "0 -5px 5px -5px var(--color-light-700)"
		},
		spacing: {
			baseUnit: "1rem"
		},
		icon: {
			baseUnit: "1rem"
		},
		transition: "all 0.3s ease-in-out",
		typography: {
			baseUnit: "1.6rem",
			bodyLineHeight: 1.5,
			font: {
				weights: {
					bold: 700,
					light: 300,
					regular: 400
				}
			},
			headingLineHeight: 1.2
		}
	},
	mode: "light" as const
};
