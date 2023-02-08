/* eslint-disable react/no-unescaped-entities */
import AnimatedDiv from "../components/AnimatedDiv";
import mydata from "../data/me.json";
import { FiLinkedin, FiGithub, FiMail } from "react-icons/fi";

const social = [
	{
		title: "github",
		Icon: FiGithub,
		color: "#e91363",
		href: "https://github.com/melikano",
	},
	{
		title: "linkedin",
		Icon: FiLinkedin,
		color: "rgb(23 139 117)",
		href: "https://www.linkedin.com/in/melika-norouzbeygi/",
	},
	{
		title: "email",
		Icon: FiMail,
		color: "#fdb44d",
		href: "mailto:melikanorouzbeygi75@gmail.com",
	},
];
export default function AboutMe() {
	return (
		<AnimatedDiv className="md:mx-auto md:w-5/6 md:p-0 px-6">
			<>
				<h2 className="text-white md:text-6xl text-5xl">I'm </h2>
				<h1 className="text-white bg-red md:w-2/3 md:text-8xl text-6xl">Melika Norouzbeygi</h1>
				<div className="md:flex-row flex flex-col">
					<div className="md:w-2/3 md:mt-8 md:flex-row flex flex-col-reverse py-8">
						<ul className="md:mr-16 md:mt-0 mt-8 flex flex-row md:flex-col md:justify-between md:self-auto self-center">
							{social.map(({ Icon, color, href }, i) => (
								<li key={i}>
									<a target={"_blank"} rel="noreferrer" href={href}>
										<Icon
											stroke={color}
											size="3rem"
											className="md:mx-0 mx-4 hover:scale-150 transition-all duration-300"
										/>
									</a>
								</li>
							))}
						</ul>
						<p className="pt-2 text-3xl text-justify text-white">
							{mydata.summary}
						</p>
					</div>
				</div>
			</>
		</AnimatedDiv>
	);
}
