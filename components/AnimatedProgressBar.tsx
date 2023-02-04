import { FC, ReactElement, useEffect, useState } from "react";
import useGetCurrentBreakpoint from "../helpers/useGetCurrentBreakpoint";

type AnimatedProgressBarProps = { percent: number };

const AnimatedProgressBar: FC<AnimatedProgressBarProps> = ({ percent }) => {
	const [width, setWidth] = useState(0);

	const { isDesktop } = useGetCurrentBreakpoint();
	useEffect(() => {
		setWidth(normalize(percent));
	}, []);

	const normalize = (percent: number) => percent * (isDesktop ? 4 : 3.7);

	return (
		<div className="bg-white h-4" style={{ width: isDesktop ? 400 : "100%" }}>
			<div
				className="bg-yellow transition-all duration-1000 delay-300 h-4"
				style={{ width }}
			></div>
		</div>
	);
};

export default AnimatedProgressBar;
