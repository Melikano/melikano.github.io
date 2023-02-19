import Link from "next/link";
import { FC, useEffect, useState } from "react";
import { MenuSection } from "../types";
import useGetCurrentBreakpoint from "../helpers/useGetCurrentBreakpoint";
import { FiMenu, FiX } from "react-icons/fi";

type MenuProps = {
	sections: MenuSection[];
	currentSection: number;
	menuVisible: boolean;
	setMenuVisible: (visible: boolean) => void;
};
const Menu: FC<MenuProps> = ({
	sections,
	currentSection,
	menuVisible,
	setMenuVisible,
}) => {
	const [current, setCurrent] = useState(currentSection);
	const { isDesktop } = useGetCurrentBreakpoint();

	return (
		<>
			{!isDesktop ? (
				!menuVisible ? (
					<FiMenu
						className="absolute h-20 w-20 right-3 z-40"
						onClick={() => setMenuVisible(true)}
					/>
				) : (
					<FiX
						className="absolute h-20 w-20 right-3 z-40"
						onClick={() => setMenuVisible(false)}
					/>
				)
			) : (
				""
			)}
			<div
				className={`md:flex-row flex flex-col cursor-pointer w-full h-screen overflow-hidden`}
			>
				{sections.map(({ index, title, backgroundColor, path }) => (
					<nav
						key={path}
						className={`relative transition-all duration-700 delay-300 text-white md:h-screen ${
							index === current || !isDesktop ? "w-full" : "w-20"
						}
					${index === current ? "cursor-default" : ""}
					${menuVisible ? "h-1/4" : index === current ? "h-screen" : "h-0"}
					`}
						style={{
							transitionProperty: "height, width",
							backgroundColor,
						}}
						onClick={() => {
							setMenuVisible(false);
							setCurrent(index);
						}}
					>
						<Link
							href={path}
							shallow
							className={`inline-block relative md:h-screen md:pt-12 w-full h-full ${
								index === current ? "cursor-default" : ""
							}`}
						>
							{(isDesktop && index !== current) ||
							(!isDesktop && menuVisible) ? (
								<p className="md:static md:mx-auto absolute top-1/2 -translate-y-1/2 w-full ml-4 md:text-left my-auto text-center md:rotate-90 text-3xl whitespace-nowrap font-bold">
									{title}
								</p>
							) : null}
						</Link>
					</nav>
				))}
			</div>
		</>
	);
};

export default Menu;
