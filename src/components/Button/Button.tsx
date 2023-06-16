import React, { ReactNode } from "react";

export type ButtonProps = {
	children: ReactNode;
	onClick?: Function;
};

export const Button: React.FC = ({
	children,
	onClick = () => {},
}: ButtonProps) => {
	return <button onClick={() => onClick}>{children}</button>;
};
