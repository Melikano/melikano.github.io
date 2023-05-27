import { FC, ReactElement, useEffect, useMemo, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { MenuSection } from "../../types";
import Menu from "../Menu";
import { menuSections } from "../../constants";
import useGetCurrentBreakpoint from "../../helpers/useGetCurrentBreakpoint";
import AnimatedDiv from "../AnimatedDiv";

type LayoutProps = { children: ReactElement };

const Layout: FC<LayoutProps> = ({ children }) => {
	const { asPath } = useRouter();
	const { isDesktop, windowDimensions } = useGetCurrentBreakpoint();
	const currentSectionIndex = (
		menuSections.find(({ path }) => path === asPath) || menuSections[0]
	).index;
	const [menuVisible, setMenuVisible] = useState(false);
	const numberOfSections = menuSections.length;

	return (
		<>
			<Head>
				<title>Melika Norouzbeygi</title>
				<meta
					name="description"
					content="Melika Norouzbeygi's personal website"
				/>
			</Head>
			<main className="relative">
				<Menu
					sections={menuSections}
					currentSection={currentSectionIndex}
					menuVisible={menuVisible}
					setMenuVisible={setMenuVisible}
				/>

				{!menuVisible || isDesktop ? (
					<div
						className="absolute pb-4"
						style={{
							maxHeight: windowDimensions.h - 80,
							width: isDesktop
								? `calc(100% - ${numberOfSections * 5}rem)`
								: "100%",
							overflow: isDesktop ? "hidden" : "scroll",
							top: isDesktop ? "3rem" : "5rem",
							left: isDesktop ? `${3 + currentSectionIndex * 5}rem` : 0,
							display: menuVisible ? "none" : "block",
						}}
					>
						{children}
					</div>
				) : (
					""
				)}
			</main>
		</>
	);
};

export default Layout;
