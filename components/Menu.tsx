import Link from "next/link";
import { FC, useEffect, useState } from "react";
import { MenuSection } from "../types";

type MenuProps = {
	sections: MenuSection[];
	currentSection: number;
};
const Menu: FC<MenuProps> = ({ sections, currentSection }) => {
	const [current, setCurrent] = useState(currentSection);

	return (
		<div className="flex cursor-pointer">
			{sections.map(({ index, title, backgroundColor, color, path }) => (
				<nav
					key={path}
					className={`h-screen transition-all duration-500 ${
						index === current ? "w-full" : "w-20"
					}`}
					style={{ backgroundColor, color }}
					onClick={() => {
						setCurrent(index);
					}}
				>
					<Link href={path} shallow className="block h-screen pt-8">
						<p className="rotate-90 text-3xl whitespace-nowrap font-bold">
							{title}
						</p>
					</Link>
				</nav>
			))}
		</div>
	);
};

export default Menu;
