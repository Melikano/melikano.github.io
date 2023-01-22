import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../tailwind.config";
import { useState, useEffect } from "react";

const fullConfig = resolveConfig(tailwindConfig);

const getBreakpointValue = (value) =>
	parseInt(value.substring(0, value.indexOf("px")), 10);

const useGetCurrentBreakpoint = () => {
	const [currentBp, setCurrentBp] = useState("md");

	useEffect(() => {
		const updateBp = () =>
			setCurrentBp(
				Object.entries(fullConfig.theme?.screens || {}).reduce(
					([accBp, accBpVal], [bp, bpVal]) => {
						const bpValNum = getBreakpointValue(bpVal);
						const accBpValNum = getBreakpointValue(accBpVal);
						return bpValNum > accBpValNum && window.innerWidth >= bpValNum
							? [bp, bpVal]
							: [accBp, accBpVal];
					},
					["xxs", "0px"]
				)[0]
			);
		updateBp();
		window.addEventListener("resize", updateBp);
		return () => window.removeEventListener("resize", updateBp);
	}, []);

	return {
		currentBp,
		isDesktop: ["md", "lg", "xl", "2xl"].includes(currentBp),
	};
};
export default useGetCurrentBreakpoint;
