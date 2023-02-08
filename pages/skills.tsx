import AnimatedDiv from "../components/AnimatedDiv";
import AnimatedProgressBar from "../components/AnimatedProgressBar";
import mydata from "../data/me.json";

export default function Skills() {
	return (
		<AnimatedDiv className={"md:mx-auto md:w-11/12 md:px-0 px-4"}>
			<>
				<h1 className="text-black inline">Skills:</h1>
				<div className="grid md:grid-cols-3 grid-rows-2 gap-4 mt-8">
					{mydata.skills.map(({ title, strength }, i) => (
						<div className="mb-4" key={i}>
							<h2 className="text-black text-xl">{title}</h2>
							<AnimatedProgressBar percent={Number(strength)} />
						</div>
					))}
				</div>
			</>
		</AnimatedDiv>
	);
}
