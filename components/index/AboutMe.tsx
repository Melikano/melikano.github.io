import Image from "next/image";
import profilePic from "../../assets/profilePicture.jpg";

const AboutMe = () => (
	<div className="flex">
		<div className="w-1/2 h- mr-8 relative">
			<Image
				src={profilePic}
				alt="melika norouzbeygi's pic"
				fill
				objectFit="cover"
			/>
		</div>
		<div className="flex-1">
			<h2 className="text-gray-500 text-3xl">About Me:</h2>
			<p className="text-gray-500 pt-2 text-3xl">
				Experienced Software Developer with extensive working experience in the
				human resources and advertising industries. Skilled in Typescript, React
				and Next.js. Currently pursuing a Masters in Computer Science at the
				University of Calgary focusing on functional programming.
			</p>
		</div>
	</div>
);

export default AboutMe;
