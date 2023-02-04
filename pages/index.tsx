import Image from "next/image";
import AnimatedDiv from "../components/AnimatedDiv";
import profilePic from "../assets/profilePicture.jpg";
import mydata from "../data/me.json";
export default function AboutMe() {
	return (
		<AnimatedDiv className="mx-auto w-5/6">
			<>
				<h2 className="text-white text-6xl">I'm </h2>
				<h1 className="text-white bg-red w-2/3 text-8xl">Melika Norouzbeygi</h1>
				<div className="md:flex-row flex flex-col">
					<div className="md:w-2/3 mt-8 flex py-8">
						<ul className="mr-16 flex flex-col justify-between">
							<li>
								<a
									href="https://github.com/melikano"
									target={"_blank"}
									rel="noreferrer"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										role="img"
										viewBox="0 0 24 24"
										fill="none"
										width={50}
										height={50}
										stroke="#e91363"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
										className="hover:scale-150 transition-all duration-700"
									>
										<title>GitHub</title>
										<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
									</svg>
								</a>
							</li>
							<li>
								<a
									href="https://www.linkedin.com/in/melika-norouzbeygi/"
									target={"_blank"}
									rel="noreferrer"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										role="img"
										viewBox="0 0 24 24"
										fill="none"
										width={50}
										height={50}
										stroke="rgb(23 139 117)"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
										className="hover:scale-150 transition-all duration-700"
									>
										<title>LinkedIn</title>
										<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
										<rect x="2" y="9" width="4" height="12"></rect>
										<circle cx="4" cy="4" r="2"></circle>
									</svg>
								</a>
							</li>
							<li>
								<a href="mailto:melikanorouzbeygi75@gmail.com">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 512 512"
										fill="#fdb44d"
										width={45}
										height={45}
										className="hover:scale-150 transition-all duration-700"
									>
										<path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z" />
									</svg>
								</a>
							</li>
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
