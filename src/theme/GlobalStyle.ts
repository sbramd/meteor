import * as styled from "styled-components/macro";

import { Theme } from "theme/types";
import { buildPaletteFromHexColor } from "utils";

export const GlobalStyle = styled.createGlobalStyle<{ theme: Theme }>`
	/* V A R I A B L E S */

	:root {
		/* C O L O R S */
		${({ theme }): string => buildPaletteFromHexColor(theme.data.colors.primary, "primary")}
		${({ theme }): string => buildPaletteFromHexColor(theme.data.colors.black, "dark")}
		${({ theme }): string => buildPaletteFromHexColor(theme.data.colors.white, "light")}
    ${({ theme }): string => buildPaletteFromHexColor(theme.data.colors.black, "black")}
		${({ theme }): string => buildPaletteFromHexColor(theme.data.colors.blue, "blue")}
		${({ theme }): string => buildPaletteFromHexColor(theme.data.colors.green, "green")}
		${({ theme }): string => buildPaletteFromHexColor(theme.data.colors.grey, "grey")}
		${({ theme }): string => buildPaletteFromHexColor(theme.data.colors.purple, "purple")}
		${({ theme }): string => buildPaletteFromHexColor(theme.data.colors.red, "red")}
		${({ theme }): string => buildPaletteFromHexColor(theme.data.colors.white, "white")}
		${({ theme }): string => buildPaletteFromHexColor(theme.data.colors.yellow, "yellow")}

    /* S P A C I N G */
    --space-unit: ${({ theme }): string => theme.data.spacing.baseUnit}; /* 16px */
		--space-xxs: calc(var(--space-unit) * 0.25); /* 4px */
		--space-xs: calc(var(--space-unit) * 0.5); /* 8px */
		--space-sm: calc(var(--space-unit) * 0.75); /* 12px */
		--space-md: calc(var(--space-unit)); /* 16px */
		--space-lg: calc(var(--space-unit) * 1.25); /* 20px */
		--space-xl: calc(var(--space-unit) * 1.5); /* 24px */
		--space-xxl: calc(var(--space-unit) * 2); /* 32px */
		--space-xxxl: calc(var(--space-unit) * 2.5); /* 40px */

		/* T Y P O G R A P H Y */
		--font-family: ${({ theme }): string => theme.data.typography.font.family};
		--font-weight-lt: ${({ theme }): number => theme.data.typography.font.weights.light};
		--font-weight-rg: ${({ theme }): number => theme.data.typography.font.weights.regular};
		--font-weight-bd: ${({ theme }): number => theme.data.typography.font.weights.bold};

		--text-unit: ${({ theme }): string => theme.data.typography.baseUnit}; /* 16px */
		--text-xs: calc(var(--text-unit) * 0.5); /* 8px */
		--text-sm: calc(var(--text-unit) * 0.75); /* 12px */
		--text-md: calc(var(--text-unit)); /* 16px */
		--text-lg: calc(var(--text-unit) * 1.5); /* 24px */
		--text-xl: calc(var(--text-unit) * 2); /* 32px */
		--text-xxl: calc(var(--text-unit) * 2.5); /* 40px */
		--text-xxxl: calc(var(--text-unit) * 4); /* 64px */

		--body-line-height: ${({ theme }): number => theme.data.typography.bodyLineHeight};
		--heading-line-height: ${({ theme }): number => theme.data.typography.headingLineHeight};

		/* I C O N */
		--icon-unit: ${({ theme }): string => theme.data.icon.baseUnit}; /* 16px */
		--icon-xs: calc(var(--icon-unit) * 0.5); /* 8px */
		--icon-sm: calc(var(--icon-unit) * 0.75); /* 12px */
		--icon-md: calc(var(--icon-unit)); /* 16px */
		--icon-lg: calc(var(--icon-unit) * 1.5); /* 24px */
		--icon-xl: calc(var(--icon-unit) * 2); /* 32px */
		--icon-xxl: calc(var(--icon-unit) * 2.5); /* 40px */
		--icon-xxxl: calc(var(--icon-unit) * 4); /* 64px */

		/* B R E A K P O I N T S */
		--breakpoint-xs: ${({ theme }): string => theme.data.breakpoints.xs}; /* 0px */
		--breakpoint-sm: ${({ theme }): string => theme.data.breakpoints.sm}; /* 600px */
		--breakpoint-md: ${({ theme }): string => theme.data.breakpoints.md}; /* 960px */
		--breakpoint-lg: ${({ theme }): string => theme.data.breakpoints.lg}; /* 1280px */
		--breakpoint-xl: ${({ theme }): string => theme.data.breakpoints.xl}; /* 1920px */

		/* S H A D O W */
		--shadow: ${({ theme }): string => theme.data.shadow.all};
		--shadow-tp: ${({ theme }): string => theme.data.shadow.top};
		--shadow-bt: ${({ theme }): string => theme.data.shadow.bottom};
		--shadow-lt: ${({ theme }): string => theme.data.shadow.left};
		--shadow-rt: ${({ theme }): string => theme.data.shadow.right};

		/* M I S C E L L A N E O U S */
		--radius: ${({ theme }): string => theme.data.radius};
		--border: ${({ theme }): string => theme.data.border};
		--transition: ${({ theme }): string => theme.data.transition};
	}

	/* S T Y L E S */

	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

	html {
		font-size: 62.5%;
	}

	body {
		color: var(--color-dark);
		font-weight: var(--font-weight-rg);
		font-size: var(--text-md);
		font-family: var(--font-family);
		line-height: var(--body-line-height);
		background-color: var(--color-light);
	}

	h1,
	h2,
	h3,
	h4,
	h5 {
		font-weight: var(--font-weight-bd);
		line-height: var(--heading-line-height);
	}
	h1 {
		font-size: var(--text-xxxl);
	}
	h2 {
		font-size: var(--text-xxl);
	}
	h3 {
		font-size: var(--text-xl);
	}
	h4 {
		font-size: var(--text-lg);
	}
	h5 {
		font-size: var(--text-md);
	}

	p {
		letter-spacing: -0.0625em;
	}

	a {
		color: var(--color-primary);
		transition: var(--transition);

		&:hover {
			color: var(--color-primary-700);
		}
	}

	ul {
		list-style: none;
	}

	/* stylelint-disable no-descending-specificity */
	::-webkit-scrollbar {
		width: 6px;
	}
	::-webkit-scrollbar-track {
		background-color: transparent;
		box-shadow: var(--shadow);
	}
	::-webkit-scrollbar-thumb {
		background-color: var(--color-primary);
		border-radius: 3px;

		&:hover {
			background: var(--color-primary-300);
		}
	}
	/* stylelint-enable no-descending-specificity */
`;
