import React from "react";

import { DefaultComponentProps } from "types";

import * as S from "./List.style";
import { ListItem } from "./ListItem";

export type ListProps = DefaultComponentProps<{}>;

export const List = ({ children, ...props }: ListProps): JSX.Element => (
	<S.List {...props}>{children}</S.List>
);

List.Item = ListItem;
