import React from "react";

import { DefaultComponentProps } from "types";

import * as S from "./ListItem.style";

export type ListItemProps = DefaultComponentProps<{}>;

export const ListItem = ({ children, ...props }: ListItemProps): JSX.Element => (
	<S.ListItem {...props}>{children}</S.ListItem>
);
