import { useEffect, useState } from "react";

import { getFromLocalStorage, setToLocalStorage } from "utils";

import { themes } from "./schema";
import { FontFamily, Theme, ThemeMode, ThemeName } from "./types";

export const useTheme = (): [
	Theme,
	boolean,
	(mode: ThemeMode) => void,
	(name: ThemeName) => void,
	() => FontFamily
] => {
	const [theme, setTheme] = useState<Theme>(themes.onyx);
	const [isThemeLoaded, setIsThemeLoaded] = useState(false);

	const setThemeMode = (mode: ThemeMode): void => {
		const nextTheme = { ...theme, ...{ mode } };

		setToLocalStorage("theme", nextTheme);
		setTheme(nextTheme);
	};

	const setThemeData = (name: ThemeName): void => {
		const nextTheme = { ...themes[name], ...{ mode: theme.mode } };
		setToLocalStorage("theme", nextTheme);
		setTheme(nextTheme);
	};

	const getThemeFont = (): FontFamily => theme.data.typography.font.family;

	useEffect(() => {
		const localTheme = getFromLocalStorage("theme");
		if (localTheme) setTheme(localTheme);
		setIsThemeLoaded(true);
	}, []);

	return [theme, isThemeLoaded, setThemeMode, setThemeData, getThemeFont];
};
