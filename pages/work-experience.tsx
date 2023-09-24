import AnimatedDiv from "../components/AnimatedDiv";
import mydata from "../data/me.json";

export default function WorkExperience() {
  return (
    <AnimatedDiv className="md:mx-auto md:w-11/12 md:p-0 px-4">
      <>
        <h1 className="text-white inline">WorkExperience:</h1>
        <div className="grid md:grid-cols-2 grid-rows-4 gap-4 mt-8">
          {mydata.work_experience.map(
            ({ position, company_name, company_website, description }, i) => (
              <div className="bg-black p-8" key={i}>
                <h2 className="text-xl bg-green  p-2 text-white inline">
                  {position} at <a href={company_website}>{company_name}</a>
                </h2>

                <ul className="pt-2 text-lg md:text-justify mt-2 text-white">
                  {description.map((desc, i) => (
                    <li
                      className={description.length == 1 ? "" : "list-disc ml-4"}
                      key={i}
                    >
                      {desc}
                    </li>
                  ))}
                </ul>
              </div>
            )
          )}
        </div>
      </>
    </AnimatedDiv>
  );
}
