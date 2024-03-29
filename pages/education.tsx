import AnimatedDiv from "../components/AnimatedDiv";
import mydata from "../data/me.json";

export default function Home() {
  return (
    <AnimatedDiv className="md:mx-auto md:w-11/12 md:p-0 px-4">
      <>
        <h1 className="text-white inline">Education:</h1>

        {mydata.education.map(({ start_date, end_date, title, schoolTitle, schoolRef}, i) => (
          <div
            className="bg-black mt-8 md:w-1/2 p-8 md:h-48 flex flex-col justify-between"
            key={i}
          >
            <h2 className="text-xl text-white inline">{title}</h2>
            <a className="text-yellow" href={schoolRef} target="blank">{schoolTitle}</a>
            <p className="bg-yellow mt-4 pt-2 pl-2 text-lg md:text-justify text-black">
              {start_date} - {end_date}
            </p>
          </div>
        ))}
      </>
    </AnimatedDiv>
  );
}
