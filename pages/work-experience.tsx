import AnimatedDiv from "../components/AnimatedDiv";
import mydata from "../data/me.json";

export default function WorkExperience() {
	return (
		<AnimatedDiv className="mx-auto w-11/12">
			<>
				<h1 className="text-white p-2 inline">WorkExperience:</h1>
				<div className="grid md:grid-cols-2 grid-rows-2 gap-4 mt-8">
					{mydata.work_experience.map(
						({ position, company_name, company_website, description }, i) => (
							<div className="bg-navy p-8" key={i}>
								<h2 className="text-xl bg-yellow  p-2 text-white inline">
									{position} at <a href={company_website}>{company_name}</a>
								</h2>
								<p className="pt-2 text-lg md:text-justify mt-2 text-white">
									{description}
								</p>
							</div>
						)
					)}
				</div>
			</>
		</AnimatedDiv>
	);
}
