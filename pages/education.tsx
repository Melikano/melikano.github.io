import AnimatedDiv from "../components/AnimatedDiv";
import mydata from "../data/me.json";

export default function Home() {
	return (
		<AnimatedDiv className="md:mx-auto md:w-11/12 md:p-0 px-4">
			<>
				<h1 className="text-white inline">Education:</h1>
				<div className="mt-8 grid md:grid-cols-4 gap-4">
					{mydata.education.map(
						({ start_date, end_date, title, school }, i) => (
							<div
								className="bg-black p-8 h-64 flex flex-col justify-between"
								key={i}
							>
								<h2 className="text-xl text-white inline">
									{title} at <a href={""}>{school}</a>
								</h2>
								<p className="bg-yellow pt-2 pl-2 text-lg md:text-justify text-black">
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
