import { FC, ReactElement, useEffect, useState } from "react";
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
	const { isDesktop } = useGetCurrentBreakpoint();
	const currentSectionIndex = (
		menuSections.find(({ path }) => path === asPath) || menuSections[0]
	).index;

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
				<Menu sections={menuSections} currentSection={currentSectionIndex} />
				<div
					className="absolute"
					style={{
						// TODO kosher
						width: isDesktop ? "calc(100% - 25rem)" : "100%",
						maxHeight: "calc(100vh - 15rem)",
						overflow: isDesktop ? "hidden" : "scroll",
						top: isDesktop ? "3rem" : `${3 + currentSectionIndex * 3}rem`,
						left: isDesktop ? `${3 + currentSectionIndex * 3}rem` : "0",
					}}
				>
					{children}
				</div>
			</main>
		</>
	);
};

export default Layout;
