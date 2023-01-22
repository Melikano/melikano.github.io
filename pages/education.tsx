import AnimatedDiv from "../components/AnimatedDiv";
import mydata from "../data/me.json";

export default function Home() {
	return (
		<AnimatedDiv className="mx-auto w-11/12">
			<>
				<h1 className="bg-white text-black inline p-4">Education:</h1>
				<div className="mt-8 grid md:grid-cols-4 gap-4">
					{mydata.education.map(
						({ start_date, end_date, title, school }, i) => (
							<div className="bg-gray p-8" key={i}>
								<h2 className="text-xl text-white inline">
									{title} at <a href={""}>{school}</a>
								</h2>
								<p className="pt-2 text-lg md:text-justify mt-2 text-white">
									{start_date} - {end_date}
								</p>
							</div>
						)
					)}
				</div>
			</>
		</AnimatedDiv>
	);
}
