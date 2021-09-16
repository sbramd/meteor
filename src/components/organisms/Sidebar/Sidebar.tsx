import React from "react";

import { DefaultComponentProps } from "types";

import { List } from "../../atoms/List/List";
import * as S from "./Sidebar.style";
import { SidebarItem } from "./SidebarItem";

export type SidebarProps = DefaultComponentProps<{}>;

export const Sidebar = ({ children }: SidebarProps): JSX.Element => (
	<S.Sidebar>
		<List>{children}</List>
	</S.Sidebar>
);

Sidebar.Item = SidebarItem;
