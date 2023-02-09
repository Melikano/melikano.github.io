import Link from "next/link";
import { FC, useEffect, useState } from "react";
import { MenuSection } from "../types";
import useGetCurrentBreakpoint from "../helpers/useGetCurrentBreakpoint";

type MenuProps = {
	sections: MenuSection[];
	currentSection: number;
};
const Menu: FC<MenuProps> = ({ sections, currentSection }) => {
	const [current, setCurrent] = useState(currentSection);
	const { isDesktop } = useGetCurrentBreakpoint();

	return (
		<div className="md:flex-row fixed flex flex-col cursor-pointer w-full h-screen">
			{sections.map(({ index, title, backgroundColor, path }) => (
				<nav
					key={path}
					className={`text-white duration-700 delay-300 ${
						index === current || !isDesktop ? "w-full" : "w-20"
					}
					${index === current ? "cursor-default" : ""}
					`}
					style={{
						backgroundColor,
						transition: "height 0.6s linear 0.3s, width 0.6s linear 0.3s, top 0.6s linear 0.3s, bottom 0.6s linear 0.3s",
						position: isDesktop || index === current ? "static" : "fixed",
						top:
							index <= currentSection
								? 3.5 * index + "rem"
								: `calc(100vh - ${3.5 * (4 - index)}rem)`,
						height: isDesktop
							? "100vh"
							: index === current
							? "100vh"
							: "3.5rem",
					}}
					onClick={() => {
						setCurrent(index);
					}}
				>
					<Link
						href={path}
						shallow
						className={`block h-screen md:pt-8 pt-3 ${
							index === current ? "cursor-default" : ""
						}`}
					>
						{index !== current ? (
							<p className="md:m-0 ml-4 md:rotate-90 text-3xl whitespace-nowrap font-bold">
								{title}
							</p>
						) : null}
					</Link>
				</nav>
			))}
		</div>
	);
};

export default Menu;
