import Image from "next/image";
import AnimatedDiv from "../components/AnimatedDiv";
import profilePic from "../assets/profilePicture.jpg";

export default function AboutMe() {
	return (
		<AnimatedDiv
			className={"absolute top-1/2 transform -translate-y-1/2 w-4/5"}
		>
			<div className="flex">
				<div className="w-1/2 mr-8 rounded relative">
					<Image
						src={profilePic}
						alt="melika norouzbeygi's pic"
						fill
						objectFit="cover"
					/>
				</div>
				<div className="flex-1">
					<h2 className="text-gray-500 text-3xl text-white">About Me:</h2>
					<p className="text-gray-500 pt-2 text-3xl md:text-justify text-white">
						Experienced Software Developer with extensive working experience in
						the human resources and advertising industries. Skilled in
						Typescript, React and Next.js. Currently pursuing a Masters in
						Computer Science at the University of Calgary focusing on functional
						programming. Experienced Software Developer with extensive working
						experience in the human resources and advertising industries.
						Skilled in Typescript, React and Next.js. Currently pursuing a
						Masters in Computer Science at the University of Calgary focusing on
						functional programming. Experienced Software Developer with
						extensive working experience in the human resources and advertising
						industries. Skilled in Typescript, React and Next.js. Currently
						pursuing a Masters in Computer Science at the University of Calgary
						focusing on functional programming. Experienced Software Developer
						with extensive working experience in the human resources and
						advertising industries. Skilled in Typescript, React and Next.js.
						Currently pursuing a Masters in Computer Science at the University
						of Calgary focusing on functional programming.
					</p>
				</div>
			</div>
		</AnimatedDiv>
	);
}
