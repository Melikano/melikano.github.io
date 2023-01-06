import Head from "next/head";
import { FC, ReactElement, ReactNode } from "react";
import Menu from "../Menue";

type LayoutProps = { children: ReactElement };
const Layout: FC<LayoutProps> = ({ children }) => (
	<>
		<Head>
			<title>Melika Norouzbeygi</title>
			<meta
				name="description"
				content="Melika Norouzbeygi's personal website"
			/>
		</Head>
		<main className="bg-gray-800 flex">
			<div className="pt-24 px-80">{children}</div>
			<Menu />
		</main>
	</>
);

export default Layout;
