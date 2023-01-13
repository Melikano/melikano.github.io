import { FC, ReactElement, useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { MenuSection } from "../../types";
import Menu from "../Menu";
import { menuSections } from "../../constants";

type LayoutProps = { children: ReactElement };

const Layout: FC<LayoutProps> = ({ children }) => {
	const { asPath } = useRouter();
	const [opacity, setOpacity] = useState("opacity-0");
	const currentSection =
		menuSections.find(({ path }) => path === asPath) || menuSections[0];

	useEffect(() => {
		setOpacity("opacity-1");
		console.log("here");
	}, [asPath]);

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
				<Menu sections={menuSections} currentSection={currentSection.index} />
				{children}
			</main>
		</>
	);
};

export default Layout;
