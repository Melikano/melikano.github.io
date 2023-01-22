import Image from "next/image";
import AnimatedDiv from "../components/AnimatedDiv";
import profilePic from "../assets/profilePicture.jpg";
import mydata from "../data/me.json";
export default function AboutMe() {
	return (
		<AnimatedDiv className="md:flex-row flex flex-col mx-auto w-11/12">
			<>
				{" "}
				<div className="md:w-1/2 w-full h-80 mr-8 rounded relative">
					<Image
						src={profilePic}
						alt="melika norouzbeygi's pic"
						fill
						objectFit="cover"
					/>
				</div>
				<div className="flex-1">
					<h1 className="text-white bg-red p-2 inline">About Me:</h1>
					<p className="pt-2 text-3xl text-justify mt-8 text-white">
						{mydata.summary}
					</p>
				</div>
			</>
		</AnimatedDiv>
	);
}
