/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import AnimatedDiv from "../components/AnimatedDiv";
import mydata from "../data/me.json";
import { FiLinkedin, FiGithub, FiMail } from "react-icons/fi";

const social = [
  {
    title: "github",
    Icon: FiGithub,
    color: "var(--pink)",
    href: "https://github.com/melikano",
  },
  {
    title: "linkedin",
    Icon: FiLinkedin,
    color: "var(--green)",
    href: "https://www.linkedin.com/in/melika-norouzbeygi/",
  },
  {
    title: "email",
    Icon: FiMail,
    color: "var(--yellow)",
    href: "mailto:melikanorouzbeygi75@gmail.com",
  },
];
export default function AboutMe() {
  return (
    <AnimatedDiv className="md:mx-auto md:w-10/12 md:p-0 px-6 relative">
      <>
        <h2 className="text-white md:text-6xl text-5xl">I'm </h2>
        <div className="md:flex">
          <h1 className="text-white bg-pink md:text-7xl text-6xl md:w-1/2">
            Melika Norouzbeygi
          </h1>

          <ul className="md:ml-8 w-1/2 md:mt-0 mt-8 flex md:flex-col md:justify-between">
            {social.map(({ Icon, color, href }, i) => (
              <li key={i}>
                <a target={"_blank"} rel="noreferrer" href={href} className="inline-block">
                  <Icon
                    stroke={color}
                    size="2.8rem"
                    className="md:mx-0 mx-4 hover:scale-150 transition-all duration-300"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:flex mt-8">
          <div className="md:w-1/2 md:h-auto h-48 relative">
            <Image
              src="/IMG_20211221_221653.jpg"
              alt="profile-picture"
              fill
              className="object-cover"
            />
          </div>
          <div className="md:ml-8 md:mt-0 mt-4 md:w-1/2">
            <p className="pt-2 text-2xl text-white" dangerouslySetInnerHTML={{__html: mydata.summary}}>
            </p>
          </div>
        </div>
      </>
    </AnimatedDiv>
  );
}
