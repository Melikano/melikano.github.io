import AnimatedDiv from "../components/AnimatedDiv";
import AnimatedProgressBar from "../components/AnimatedProgressBar";
import mydata from "../data/me.json";

export default function Skills() {
	return (
		<AnimatedDiv className={"mx-auto w-11/12"}>
			<>
				<h1 className="text-white inline p-2">Skills:</h1>
				<div className="grid md:grid-cols-3 grid-rows-2 gap-4 mt-8">
					{mydata.skills.map(({ title, strength }, i) => (
						<div className="mb-4" key={i}>
							<h2 className="text-white text-xl">{title}</h2>
							<AnimatedProgressBar percent={Number(strength)} />
						</div>
					))}
				</div>
			</>
		</AnimatedDiv>
	);
}
