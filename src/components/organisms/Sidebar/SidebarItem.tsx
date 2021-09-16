import React from "react";
import { NavLinkProps } from "react-router-dom";

import { Link } from "../../atoms/Link/Link";
import * as S from "./SidebarItem.style";

export const SidebarItem = ({ children, ...props }: NavLinkProps): JSX.Element => (
	<S.SidebarItem>
		<Link {...props}>{children}</Link>
	</S.SidebarItem>
);
