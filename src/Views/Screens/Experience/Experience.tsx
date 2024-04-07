import PreviousCompanies from "./components/PreviousCompanies";
import CountdownTimer from "./components/Timer";
import { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
function Experience() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], ["60%", "-60%"]);
  return (
    <div ref={targetRef} className=" h-[500vh] relative">
      <div className="h-screen sticky top-0  dark:bg-[#121212] bg-neutral-100 flex justify-center items-center overflow-hidden">
        <div className="flex flex-col items-center justify-evenly h-3/4 w-screen absolute  ">
          <p className="text-black dark:text-neutral-200 w-10/12 text-center text-6xl font-bold ">
            My Next Milestone
          </p>
          <p className="dark:text-white text-black text-3xl lg:text-4xl text-center font-extralight  ">
            Forbes Thirty Under Thirty List
          </p>
          <CountdownTimer />
          <PreviousCompanies />
        </div>
        <motion.div className="flex" style={{ x: x }}>
          <div className="h-screen w-screen flex-1  bg-[#008BFF] flex flex-col pt-20 sm:pt-0 justify-center ">
            <div className="flex flex-col lg:flex-row  ">
              <div className="flex flex-col  h-fit lg:w-6/12 justify-center items-start px-5 md:px-24">
                <h2 className="text-white font-extrabold text-3xl lg:text-6xl mb-2">
                  Souq.com
                </h2>{" "}
                <h2 className="text-white font-light text-2xl md:text-3xl mb-2">
                  UAE & Egypt Customer Service Agent Internship
                </h2>{" "}
                <h2 className="text-white/70 font-light text-md md:text-xl">
                  Sep 2018 - Nov 2018
                </h2>{" "}
                <p className="mb-6 text-md md:text-xl text-white">
                  Interned as a UAE & Egypt Customer Service Agent at Souq.com
                  E-commerce, a leading e-commerce platform in the region.
                  Leveraged my background as a developer and entrepreneur to
                  gain valuable insights into the business aspects of the
                  industry.
                </p>
                <p className=" text-sm md:text-lg text-white">
                  Skills: E-commerce Sector Knowledge, Customer Relation,
                  Business Operations, Sales, Account Management, Fraud
                  Investigations
                </p>
              </div>
              <div className="flex flex-col max-w-screen-xl lg:w-6/12 justify-center items-center px-10">
                <motion.img
                  initial={{ y: 150 }}
                  whileInView={{ y: 0 }}
                  transition={{ duration: 1 }}
                  className="bg-white/70 px-10 py-5 my-5 rounded-3xl object-contain h-44 md:max-w-xl  shadow-lg sm:h-80 "
                  src="https://www.cdnlogo.com/logos/s/72/souq-primary-en.svg"
                  alt="Souq.com Logo"
                />
              </div>
            </div>
          </div>
          <div className="h-screen w-screen flex-1  bg-[#CD1E80] flex flex-col pt-20 sm:pt-0 justify-center ">
            <div className="flex flex-col lg:flex-row  ">
              <div className="flex flex-col  h-fit lg:w-6/12 justify-center items-start px-5 md:px-24">
                <h2 className="text-white font-extrabold text-3xl md:text-6xl mb-2">
                  Teleperformance
                </h2>{" "}
                <h2 className="text-white font-light text-2xl md:text-3xl mb-2">
                  Travel Advisor Internship (Expedia Canada)
                </h2>{" "}
                <h2 className="text-white/70 font-light text-md md:text-xl">
                  Sep 2018 - Nov 2018
                </h2>{" "}
                <p className="mb-6 text-md md:text-xl text-white">
                  Interned as a Travel Advisor at Teleperformance, representing
                  Expedia Canada, a leading travel booking platform. This
                  internship at Teleperformance as a Travel Advisor for Expedia
                  Canada allowed me to expand my skills to support my technical
                  skills and entrepreneurial mindset regarding the travel
                  industry.
                </p>
                <p className=" text-sm md:text-lg text-white">
                  Skills: Travel Sector Knowledge, Customer Relation, Business
                  Operations, Sales
                </p>
              </div>
              <div className="flex flex-col max-w-screen-xl lg:w-6/12 justify-center items-center px-10">
                <motion.img
                  initial={{ y: 150 }}
                  whileInView={{ y: 0 }}
                  transition={{ duration: 1 }}
                  className=" px-10 py-5 my-5 rounded-3xl object-contain bg-white/70 shadow-lg md:max-w-xl  h-40   sm:h-80 "
                  src="https://images.wuzzuf-data.net/files/company_logo/184062856462c1688817c1b.png"
                  alt="Teleperformance Logo"
                />
              </div>
            </div>
          </div>
          <div className="h-screen w-screen flex-1  bg-[#131313] flex flex-col pt-20 sm:pt-0 justify-center">
            {" "}
            <div className="flex flex-col lg:flex-row  ">
              <div className="flex flex-col  h-fit lg:w-6/12 justify-center items-start px-5 md:px-24">
                <h2 className="text-white font-extrabold text-3xl md:text-6xl mb-2">
                  Secure Stream Technologies
                </h2>{" "}
                <h2 className="text-white font-light text-2xl md:text-3xl mb-2">
                  Front End Developer Internship
                </h2>{" "}
                <h2 className="text-white/70 font-light text-md md:text-xl">
                  Mar 2020 - Apr 2020 | Remote
                </h2>{" "}
                <p className="mb-6 text-md md:text-xl text-white">
                  Interned as a Front End Web Developer at Secure Stream
                  Technologies. This marked one of my first steps into
                  production environments beyond classrooms and courses. I was
                  part of a team managing the Startup's Website. Mainly my
                  responsibilities were improving the UI & UX, Bug Fixes, Bug
                  Reports, and Writing Documentations.
                </p>
                <p className=" text-sm md:text-lg text-white">
                  Skills: Angular JS, HTML, CSS, Agile, Jira, Git, Documentation
                </p>
              </div>
              <div className="flex flex-col max-w-screen-xl lg:w-6/12 justify-center items-center px-10">
                <motion.img
                  initial={{ y: 150 }}
                  whileInView={{ y: 0 }}
                  transition={{ duration: 1 }}
                  className="bg-white/70 px-10 py-5 my-5 rounded-3xl object-contain md:max-w-xl  h-40  shadow-lg sm:h-80 "
                  src="https://securestream.tech/wp-content/uploads/2019/02/SSSheildv1.2_FULL_560x140.png"
                  alt="Secure Stream Logo"
                />
              </div>
            </div>
          </div>
          <div className="h-screen w-screen flex-1  bg-[#E70101] flex flex-col pt-20 sm:pt-0 justify-center">
            <div className="flex flex-col lg:flex-row  ">
              <div className="flex flex-col  h-fit lg:w-6/12 justify-center items-start px-5 md:px-24">
                <h2 className="text-white font-extrabold text-3xl md:text-6xl mb-2">
                  Vodafone UK
                </h2>{" "}
                <h2 className="text-white font-light text-2xl md:text-3xl mb-2">
                  Technical Support Engineer II
                </h2>{" "}
                <h2 className="text-white/70 font-light text-md md:text-xl">
                  Aug 2020 - Dec 2020 | Remote
                </h2>{" "}
                <p className="mb-6 text-md md:text-xl text-white">
                  As a Technical Support Engineer II at Vodafone UK, I provided
                  technical support for fiber services for UK based enterprises.
                  My responsibilities included conducting tests and diagnosing
                  faults to resolve connectivity issues. In addition to
                  resolving tickets, I collaborated with field engineers to
                  escalate complex issues and ensure timely service restoration.
                </p>
                <p className=" text-sm md:text-lg text-white">
                  Skills: FTTH, OSI Model, Network Components, Packet Tracer,
                  Wire Shark, Telecom Industry Knowledge
                </p>
              </div>
              <div className="flex flex-col max-w-screen-xl lg:w-6/12 justify-center items-center px-10">
                <motion.img
                  initial={{ y: 150 }}
                  whileInView={{ y: 0 }}
                  transition={{ duration: 1 }}
                  className="bg-white/70 px-10 py-5 my-5 rounded-3xl object-contain h-40 md:max-w-xl shadow-lg sm:h-80 "
                  src="https://www.cdnlogo.com/logos/v/98/vodafone-2017.svg"
                  alt="Vodafone Logo"
                />
              </div>
            </div>
          </div>
          <div className="h-screen w-screen flex-1  bg-[#f36620] flex flex-col justify-center">
            {" "}
            <div className="flex flex-col lg:flex-row  ">
              <div className="flex flex-col  h-fit lg:w-6/12 justify-center items-start px-5 md:px-24">
                <h2 className="text-white font-extrabold text-3xl md:text-6xl mb-2">
                  Amazon
                </h2>{" "}
                <h2 className="text-white font-light text-xl md:text-3xl mb-2">
                  Information Technology Operations Engineer (SDE L4)
                </h2>{" "}
                <h2 className="text-white/70 font-light text-sm md:text-xl">
                  Jun 2022 - Jan 2023
                </h2>{" "}
                <p className="mb-6 text-sm md:text-xl text-white">
                  I supported the operations department in the biggest Amazon
                  Warehouse in Egypt. I helped develop several internal tools
                  for the operations. I also designed and built an in-house
                  smart locker system to automate & track assets handling. I
                  held meetings with stakeholders, drafted documentation,
                  developed a plan and managed the whole project from seed phase
                  till delivery. This end-to-end project demonstrated my
                  abilities in hardware prototyping, mobile and cloud
                  application development, and bringing innovative ideas to life
                  through technical solutions.
                </p>
                <p className=" text-xs md:text-lg text-white">
                  Skills: Flutter, Python, JS, React, AWS, Dynamo DB, Green
                  Grass, Lambda, IAM, Circuit design, IOT, Raspberry Pi
                </p>
              </div>
              <div className="flex flex-col max-w-screen-xl lg:w-6/12 justify-center items-center px-10">
                <motion.img
                  initial={{ y: 150 }}
                  whileInView={{ y: 0 }}
                  transition={{ duration: 1 }}
                  className="bg-white/70 mt-5 px-10 py-5 rounded-3xl object-contain h-40 md:max-w-xl shadow-lg sm:h-80 "
                  src="https://www.cdnlogo.com/logos/a/33/amazon-com.svg"
                  alt="Amazon Logo"
                />
              </div>
            </div>
          </div>
          <div className="h-screen w-screen flex-1  bg-[#3844f3] flex flex-col justify-center items-center">
            {" "}
            <div className="flex flex-col  h-fit lg:w-9/12 justify-center items-center px-5 md:px-24">
              <h2 className="text-white font-extrabold text-3xl md:text-6xl mb-2">
                Egyptian Ministry of Interior
              </h2>{" "}
              <h2 className="text-white font-light text-xl md:text-3xl mb-2">
                Software Engineer{" "}
                <span className="font-bold">(Mandatory Military Service)</span>
              </h2>{" "}
              <h2 className="text-white/70 font-light text-sm md:text-xl">
                March 2023 - March 2024
              </h2>{" "}
              <p className="mb-6 text-sm md:text-xl text-center text-white">
                All male Egyptians are required to complete their Military
                Service right after graduation. I managed to make the most out
                of this unfortunate experience by convincing the Highest Ranking
                Officials in the state I served in to develop softwares for the
                Military Base I served In. These softwares aimed to computerize
                many processes which were done manually using pen and paper. I
                led a small team of other developers "Soliders", to accomplish
                the task. The softwares developed include a Solider Shooting
                Range, Vehicle Fleet, Operations Application, and Inventory
                Mangement Applications.
              </p>
              <p className=" text-xs md:text-lg text-white">
                Skills: Flutter, Hive, Bloc, Project Management, Stakeholder
                Meetings, Requirement Gathering, Communication Skills
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Experience;
