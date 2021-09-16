import React from "react";

import { Icon } from "./Icon";
import { IconProps } from "./types";

export const Dashboard = (props: Omit<IconProps, "xmlns" | "viewBox">): JSX.Element => (
	<Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
		<rect
			width="151"
			height="151"
			x="73"
			y="73"
			fill="none"
			stroke="#000"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="16"
			rx="33.03"
			ry="33.03"
		/>
		<rect
			width="151"
			height="151"
			x="288"
			y="73"
			fill="none"
			stroke="#000"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="16"
			rx="33.03"
			ry="33.03"
		/>
		<rect
			width="151"
			height="151"
			x="73"
			y="288"
			fill="none"
			stroke="#000"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="16"
			rx="33.03"
			ry="33.03"
		/>
		<rect
			width="151"
			height="151"
			x="288"
			y="288"
			fill="none"
			stroke="#000"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="16"
			rx="33.03"
			ry="33.03"
		/>
	</Icon>
);
