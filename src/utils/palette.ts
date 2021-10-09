/* eslint-disable
	@typescript-eslint/no-explicit-any,
	@typescript-eslint/explicit-module-boundary-types
*/

export const isValidHex = (color: any): boolean => {
	if (!color || typeof color !== "string" || color.substring(0, 1) !== "#") return false;

	const colorWithoutHash = color.substring(1);

	switch (colorWithoutHash.length) {
		case 3:
			return /^[0-9a-f]{3}$/i.test(colorWithoutHash);
		case 6:
			return /^[0-9a-f]{6}$/i.test(colorWithoutHash);
		case 8:
			return /^[0-9a-f]{8}$/i.test(colorWithoutHash);
		default:
			return false;
	}
};

export const lightenDarkenHexColor = (color: any, amount: number): string => {
	if (!isValidHex(color)) return color;

	const colorWithoutHash = color.slice(1);
	const num = parseInt(colorWithoutHash, 16);

	let r = (num >> 16) + amount;
	if (r > 255) r = 255;
	else if (r < 0) r = 0;

	let b = ((num >> 8) & 0x00ff) + amount;
	if (b > 255) b = 255;
	else if (b < 0) b = 0;

	let g = (num & 0x0000ff) + amount;
	if (g > 255) g = 255;
	else if (g < 0) g = 0;

	return `#${(g | (b << 8) | (r << 16)).toString(16)}`;
};

export const buildCssVariablesFromPalette = (paletteMap: { [key: string]: string }): string =>
	Object.keys(paletteMap).reduce(
		(paletteString: string, key: string): string => `${paletteString}${key}: ${paletteMap[key]};\n`,
		""
	);

export const buildPaletteFromHexColor = (name: string, value: string): string => {
	const paletteMap: { [key: string]: string } = {};

	paletteMap[`--color-${name}-900`] = lightenDarkenHexColor(value, 2);
	paletteMap[`--color-${name}-700`] = lightenDarkenHexColor(value, 1);
	paletteMap[`--color-${name}`] = value;
	paletteMap[`--color-${name}-300`] = lightenDarkenHexColor(value, -1);
	paletteMap[`--color-${name}-100`] = lightenDarkenHexColor(value, -2);

	return buildCssVariablesFromPalette(paletteMap);
};
