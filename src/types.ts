import React from "react";

export type DefaultComponentProps<T = {}> = T & { children?: React.ReactNode };
