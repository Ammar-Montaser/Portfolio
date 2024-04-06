import { motion, useScroll, useTransform } from "framer-motion";
import "./FirstFold.css";
import Lottie from "lottie-react";
import arrow from "../../../assets/arrow.json";
import SocialMediaIcons from "../../SharedComponents/SocialMediaIcons";
function FirstFold() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "70%"]);
  return (
    <div className="">
      <section className="  flex flex-col h-screen   dark:bg-neutral-950 bg-neutral-100 left-side overflow-hidden">
        <div className="relative  flex items-center justify-center ">
          {/* photo of me */}
          <motion.img
            className="absolute z-10 h-auto  max-sm:h-screen  max-sm:mt-5 md:w-5/6 sm:w-5/6  max-w-min    "
            src="https://iili.io/JNxOJ9V.webp"
            alt="Profile photo"
            initial={{ top: 700, scale: 0.8 }}
            animate={{ top: 50, scale: 1 }}
            exit={{ top: 100 }}
            transition={{ duration: 1.5 }}
          />
        </div>
        {/* parallax headers behind my photo */}
        <div className="absolute flex flex-col  w-full h-[100vh]  items-center  justify-center bg-black-400/65 overflow-hidden ">
          <motion.h1
            className=" max-sm:mt-32 max-sm:text-white max-sm:z-10 figtree-bold drop-shadow-2xl tracking-widest shadow-black font-extrabold  text-center leading-normal z-[3]  dark:text-white text-black text-nowrap  xl:text-[12rem] lg:text-[12rem] md:text-[10rem] sm:text-[8rem] text-7xl"
            initial={{ translateX: -1700 }}
            animate={{
              translateX: 0,
            }}
            transition={{ duration: 1 }}
            style={{ y }}
          >
            MY NAME IS
          </motion.h1>
          <motion.h2
            style={{ y }}
            className="name  z-10  drop-shadow-2xl tracking-widest shadow-black figtree-bold font-extrabold  text-center    text-color  xl:text-[12rem] lg:text-[12rem] md:text-[10rem] sm:text-[8rem] text-[5rem]"
            initial={{ translateX: 1500, opacity: 0 }}
            animate={{ translateX: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            &lt;AMMAR/&gt;
          </motion.h2>
          <div className="z-[10] sm:text-2xl text-2xl md:text-3xl lg:text-4xl sm:visible md:visible lg:visible xl:hidden text-center bg-BG py-2 px-3 rounded-md">
            <h2 className="  font-bold  mx-auto text-white  ">
              FULL STACK SOFTWARE ENGINEER
            </h2>
            <h2 className="  font-bold mt-2  mx-auto text-white ">
              MOBILE & WEB DEVELOPER
            </h2>
          </div>
          <div className="w-[12rem]   absolute bottom-0 z-10">
            <Lottie
              className=""
              loop={true}
              autoPlay={true}
              animationData={arrow}
              rendererSettings={{
                preserveAspectRatio: "xMidYMid slice",
              }}
            />
          </div>{" "}
          <div className=" xl:h-[30vw] xl:w-[60vw]  lg:h-[40vw] lg:w-[80vw] md:h-[45vw] md:w-[90vw] w-full h-[50vw] bg-BG rounded-tl-full rounded-tr-full   mx-auto  bottom-0 absolute"></div>{" "}
        </div>
        <div className=" absolute flex flex-col grain rtl:left-0  justify-center left_side h-screen w-1/2 overflow-hidden  ">
          {" "}
          <h2 className=" text-4xl font-medium mt-16 mx-auto dark:text-white text-black max-xl:hidden ">
            FULL STACK SOFTWARE ENGINEER
          </h2>
        </div>
        <div className="absolute right-0 justify-center flex flex-col right_side h-screen w-1/2 z-5 ">
          <h2 className="text-4xl font-medium  mt-16 mx-auto dark:text-white text-black max-xl:hidden ">
            MOBILE & WEB DEVELOPER
          </h2>
        </div>{" "}
        <SocialMediaIcons
          className="absolute bottom-5 left-5 max-lg:hidden z-20"
          size="size-8"
        />
      </section>
    </div>
  );
}

export default FirstFold;
