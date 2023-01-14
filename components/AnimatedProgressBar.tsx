import { FC, ReactElement, useEffect, useState } from "react";

type AnimatedProgressBarProps = { percent: number };

const AnimatedProgressBar: FC<AnimatedProgressBarProps> = ({ percent }) => {
	const [width, setWidth] = useState(0);

	useEffect(() => {
		setWidth(normalize(percent));
	}, []);

	const normalize = (percent: number) => percent * 4;

	return (
		<div
			className="bg-red transition-all duration-1000 delay-300 h-4"
			style={{ width }}
		></div>
	);
};

export default AnimatedProgressBar;
