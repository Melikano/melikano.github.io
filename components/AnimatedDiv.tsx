import { FC, ReactElement, useEffect, useState } from "react";

type AnimatedDivProps = { children: ReactElement; className: string };

const AnimatedDiv: FC<AnimatedDivProps> = ({ children, className }) => {
	const [opacity, setOpacity] = useState("opacity-0");

	useEffect(() => {
		setOpacity("opacity-1");
	}, []);

	return (
		<div className={`${className} ${opacity} transition-opacity duration-300 delay-300`}>
			{children}
		</div>
	);
};

export default AnimatedDiv;
