import { BentoGrid } from "./components/GridLayout"; // import { BackgroundGradient } from "./UI/GradientCard";
import SocialMediaIcons from "../../SharedComponents/SocialMediaIcons";
import { Carousel } from "flowbite-react";
import { useAppSelector } from "../../../Hooks/ReduxHooks";
import ToolStackIcons from "./components/ToolStackIcons";
function About() {
  const mode = useAppSelector((state) => state.app.mode);

  return (
    <div className="relative   flex flex-col  justify-center dark:bg-[#121212] bg-white/70/40">
      <BentoGrid className="  max-w-8xl xl:px-12 lg:px-10 md:px-10 px-3  ">
        <div className="row-span-1  rounded-3xl hover:drop-shadow-glow   hover:shadow-xl transition duration-1000  dark:shadow-none p-4 dark:bg-neutral-900  justify-between bg-gray-200  border-2 border-BG  flex flex-col ">
          <h2 className="font-bold text-2xl   dark:text-white text-black">
            Summary
          </h2>
          <p className="font-sans font-normal  text-neutral-600 text-md md:text-xl  dark:text-neutral-300">
            Innovative Software Engineer, focused on creating{" "}
            <span className="text-color">functional</span> and
            <span className="text-color"> user-centered</span> digital products
            that provide <span className="text-color">creative solutions</span>{" "}
            to real life problems.
          </p>

          <div className="flex flex-row justify-between">
            <SocialMediaIcons className="" size="size-6" />
            <a
              href="https://drive.google.com/uc?export=download&id=11FDWtO8qGjH4CN8dwPPd76XKpz_5Mn7p"
              className=" roboto-bold dark:bg-black bg-BG rounded-2xl dark:text-white text-black w-50 px-4 py-2"
            >
              Download Resume
            </a>
          </div>
        </div>
        <div className="row-span-2 rounded-3xl    hover:drop-shadow-glow  hover:shadow-xl transition duration-1000  dark:shadow-none p-4 dark:bg-neutral-900  bg-gray-200  border-2 border-BG  ">
          <Carousel
            pauseOnHover
            leftControl={
              <i className="fa-solid fa-chevron-left text-3xl  text-color"></i>
            }
            rightControl={
              <i className="fa-solid fa-chevron-right text-3xl  text-color"></i>
            }
          >
            <img
              src="https://i.postimg.cc/NMJFZpmd/IMG-7448.webp"
              alt="A random pic of me"
              className="object-cover h-full w-full"
            />
            <img
              src="https://i.postimg.cc/zvQLH0fy/277598-F4-0-EBA-4-A92-9941-2410-EDB81969.webp"
              alt="A picture of me in my favorite coffee shop"
              className="object-cover h-full w-full"
            />
            <img
              src="https://i.postimg.cc/qRMgm9ht/IMG-3779.webp"
              alt="A picture of me attending Startups Without Borders Summit"
              className="object-cover h-full w-full"
            />
            <img
              src="https://iili.io/JOgkVOQ.webp"
              alt="My Amazon Swag"
              className="object-cover h-full w-full"
            />
          </Carousel>
        </div>
        <div className="row-span-3  sm:row-span-3  rounded-3xl  hover:drop-shadow-glow  hover:shadow-xl transition duration-1000   p-4  dark:bg-neutral-900 flex flex-col justify-around  bg-gray-200 border-2 border-BG   ">
          {" "}
          <h2 className="font-bold text-2xl  dark:text-white text-black">
            My Background
          </h2>{" "}
          <p className="  text-neutral-600 xl:text-[1rem] lg:text-[1.3rem] md:text-lg sm:text-lg     dark:text-neutral-300 ">
            Growing up in the United States, Saudi Arabia, and Egypt exposed me
            to&nbsp;
            <span className=" font-bold">
              diverse ways of thinking and flexibility
            </span>
            . In addition, my father's career as a University Professor and my
            mother's as a Chemist fostered{" "}
            <span className=" font-bold">
              analytical and problem-solving skills&nbsp;
            </span>
            from a young age.
          </p>
          <p className="  text-neutral-600 xl:text-[1rem] lg:text-[1.2rem] md:text-lg sm:text-lg     dark:text-neutral-300 ">
            My passion for technology began at the age of five, sparking a
            lifelong fascination. Therefore, I pursued a Bachelor's degree in
            Computer Science. My goal is to create innovative technological
            solutions that transform people's lives for the better. Pioneers
            like Elon Musk and Steve jobs{" "}
            <span className=" font-bold">inspire me</span> with their
            world-changing innovations. I'm driven to develop products with a
            similar positive impact. Through{" "}
            <span className=" font-bold">continuous learning</span>, I
            strengthen my diverse skillset which ranges from software
            development to product strategy.{" "}
          </p>
          <p className="  text-neutral-600 xl:text-[1rem] lg:text-[1.2rem] md:text-lg sm:text-lg     dark:text-neutral-300 ">
            In addition to my technical skills, I have a{" "}
            <span className=" font-bold">passion for entrepreneurship</span> and
            starting my own ventures. Through my startup endeavors, I am further
            developing my skills in areas like product development, business
            modeling, and team leadership. I enjoy the challenges of{" "}
            <span className=" font-bold">bringing new ideas to life</span> and
            solving problems through an entrepreneurial lens. <br />
          </p>
          <div className="flex flex-row justify-end">
            {" "}
            {mode === "dark" ? (
              <img
                className="w-7/12 "
                src="https://iili.io/JNxN1ZF.webp"
                alt="..."
              />
            ) : (
              <img
                className="w-7/12 "
                src="https://iili.io/JNxwZrv.webp"
                alt="..."
              />
            )}
          </div>
        </div>
        <div className="row-span-2 rounded-3xl hover:drop-shadow-glow  hover:shadow-xl transition duration-1000  dark:shadow-none p-4 dark:bg-neutral-900  bg-gray-200  border-2 border-BG  flex flex-col ">
          <h2 className="font-bold text-2xl mb-2  dark:text-white text-black">
            Main Tool Stack
          </h2>
          <div className="flex flex-row  flex-grow flex-wrap justify-center items-center space-x-2">
            <ToolStackIcons className="icon-[devicon--flutter] xl:xl:text-5xl text-3xl " />
            <ToolStackIcons className="icon-[devicon--python] xl:xl:text-5xl text-3xl5xl text-3xl " />
            <ToolStackIcons className="icon-[devicon--nextjs] xl:xl:text-5xl text-3xl " />
            <ToolStackIcons className="icon-[devicon--javascript] xl:xl:text-5xl text-3xl " />
            <ToolStackIcons className="icon-[devicon--react] xl:xl:text-5xl text-3xl " />
            <ToolStackIcons className="icon-[devicon--tailwindcss] xl:xl:text-5xl text-3xl " />
            <ToolStackIcons className="icon-[devicon--nodejs] xl:xl:text-5xl text-3xl " />
            <ToolStackIcons className="icon-[devicon--mongodb] xl:xl:text-5xl text-3xl " />
            <ToolStackIcons className="icon-[devicon--figma] xl:xl:text-5xl text-3xl " />
            <ToolStackIcons className="icon-[devicon--amazonwebservices-wordmark] xl:xl:text-5xl text-3xl " />
            <ToolStackIcons className="icon-[devicon--firebase] xl:xl:text-5xl text-3xl " />
            <ToolStackIcons className="icon-[devicon--googlecloud] xl:xl:text-5xl text-3xl " />
            <ToolStackIcons className="icon-[devicon--heroku] xl:xl:xl:text-5xl text-3xl " />{" "}
            <ToolStackIcons className="icon-[devicon--flask] xl:xl:text-5xl text-3xl " />{" "}
            <ToolStackIcons className="icon-[devicon--sqlite] xl:xl:text-5xl text-3xl " />{" "}
            <ToolStackIcons className="icon-[devicon--redux] xl:xl:text-5xl text-3xl " />{" "}
            <ToolStackIcons className="icon-[devicon--dynamodb] xl:xl:text-5xl text-3xl " />{" "}
            <ToolStackIcons className="icon-[devicon--photoshop] xl:xl:text-5xl text-3xl " />
          </div>
        </div>{" "}
        <div className=" min-h-full justify-around xl:row-span-1 lg:col-span-1 xl:col-span-1 rounded-3xl  hover:drop-shadow-glow   hover:shadow-xl transition duration-1000  dark:shadow-none p-4 dark:bg-neutral-900  bg-gray-200 border-2 border-BG  flex flex-col ">
          <h2 className="font-bold text-2xl   dark:text-white text-black">
            Education
          </h2>
          <div>
            <div className="flex flex-row  justify-between">
              <h2 className="font-bold text-md   dark:text-white text-black">
                Saudi Arabian American International School
              </h2>
              <h2 className="font-bold text-md   dark:text-white text-black">
                2017-2018
              </h2>
            </div>

            <h3 className=" text-sm  dark:text-white font-bold  ">Taif, KSA</h3>
            <h3 className=" text-sm  dark:text-white/70   ">
              American High School Diploma
            </h3>
          </div>
          <div>
            <div className="flex flex-row  justify-between">
              <h2 className="font-bold text-md   dark:text-white text-black">
                The British University In Egypt
              </h2>
              <h2 className="font-bold text-md   dark:text-white text-black">
                2018-2022
              </h2>
            </div>
            <h3 className=" text-sm  dark:text-white font-bold  ">
              Cairo, Egypt
            </h3>
            <h3 className=" text-sm  dark:text-white/70    ">
              Computer Science Bachelor's Degree
            </h3>{" "}
            <h3 className=" text-sm  dark:text-white/70 font-bold  ">
              First Class Honors - 3.8 GPA
            </h3>
          </div>
        </div>
      </BentoGrid>
    </div>
  );
}

export default About;
