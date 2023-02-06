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
		<AnimatedDiv className="mx-auto w-5/6">
			<>
				<h2 className="text-white text-6xl">I'm </h2>
				<h1 className="text-white bg-red w-2/3 text-8xl">Melika Norouzbeygi</h1>
				<div className="md:flex-row flex flex-col">
					<div className="md:w-2/3 mt-8 flex py-8">
						<ul className="mr-16 flex flex-col justify-between">
							{social.map(({ Icon, color, href }, i) => (
								<li key={i}>
									<a target={"_blank"} rel="noreferrer" href={href}>
										<Icon
											stroke={color}
											size="3rem"
											className="hover:scale-150 transition-all duration-300"
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
