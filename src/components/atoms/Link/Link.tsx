import React from "react";
import { NavLinkProps } from "react-router-dom";

import * as S from "./Link.style";

export const Link = ({ children, ...props }: NavLinkProps): JSX.Element => (
	<S.Link {...props}>{children}</S.Link>
);
