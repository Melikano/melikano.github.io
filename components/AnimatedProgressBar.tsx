import { FC, ReactElement, useEffect, useState } from "react";
import useGetCurrentBreakpoint from "../helpers/useGetCurrentBreakpoint";

type AnimatedProgressBarProps = { percent: number };

const AnimatedProgressBar: FC<AnimatedProgressBarProps> = ({ percent }) => {
	const [width, setWidth] = useState(0);

	const { isDesktop } = useGetCurrentBreakpoint();
	useEffect(() => {
		setWidth(percent);
	}, []);

	return (
		<div className="bg-white h-4" style={{ width: isDesktop ? "calc(100% - 15rem)/3" : "100%" }}>
			<div
				className="bg-black transition-all duration-1000 delay-1000 h-4"
				style={{ width: `${width}%` }}
			></div>
		</div>
	);
};

export default AnimatedProgressBar;
