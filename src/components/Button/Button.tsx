import React from "react";

export const Button: React.FC = ({ children }: any, onClick: any) => {
	return <button onClick={onClick}>{children}</button>;
};
