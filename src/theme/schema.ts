import * as R from "ramda";

import { amethystTheme } from "./data/amethyst";
import { emeraldTheme } from "./data/emerald";
import { onyxTheme } from "./data/onyx";
import { sharedTheme } from "./data/shared";
import { Theme, ThemeName } from "./types";

export const themes: { [key in ThemeName]: Theme } = {
	onyx: R.mergeDeepRight(sharedTheme, onyxTheme),
	amethyst: R.mergeDeepRight(sharedTheme, amethystTheme),
	emerald: R.mergeDeepRight(sharedTheme, emeraldTheme)
};
