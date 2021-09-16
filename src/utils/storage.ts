/* eslint-disable
	@typescript-eslint/no-explicit-any,
	@typescript-eslint/explicit-module-boundary-types
*/

export const setToLocalStorage = (key: string, value: any): void => {
	window.localStorage.setItem(key, JSON.stringify(value));
};

export const getFromLocalStorage = (key: string): any => {
	const value = window.localStorage.getItem(key);

	if (value) return JSON.parse(value);
	return value;
};

export const removeFromLocalStorage = (key: string): void => {
	window.localStorage.removeItem(key);
};
