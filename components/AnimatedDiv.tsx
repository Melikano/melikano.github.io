import { CSSProperties, FC, ReactElement, useEffect, useState } from "react";

type AnimatedDivProps = {
	children: ReactElement;
	className?: string;
	style?: CSSProperties;
};

const AnimatedDiv: FC<AnimatedDivProps> = ({ children, className, style }) => {
	const [opacity, setOpacity] = useState("opacity-0");

	useEffect(() => {
		setOpacity("opacity-1");
		return () => {
			setOpacity("opacity-0");
		};
	}, []);

	return (
		<div
			className={`${className} ${opacity} transition-opacity duration-700 delay-700`}
			style={style}
		>
			{children}
		</div>
	);
};

export default AnimatedDiv;
