import React from "react";

import * as S from "./Icon.style";
import { IconProps } from "./types";

export const Icon = ({ children, title, ...props }: IconProps): JSX.Element => (
	<S.Icon {...props}>
		{title ? <title>{title}</title> : null}
		{children}
	</S.Icon>
);
