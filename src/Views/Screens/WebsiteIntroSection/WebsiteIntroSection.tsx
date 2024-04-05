import { motion } from "framer-motion";
import ColorPicker from "../../SharedComponents/ColorPicker";
import { CountUp } from "countup.js";
import { useEffect } from "react";
import { SparklesCore } from "./Components/Sparkles";
import { useAppSelector } from "../../../Hooks/ReduxHooks";

function WebsiteIntroSection() {
  const mode = useAppSelector((state) => state.app.mode);

  let color;
  if (mode === "dark") {
    color = "#ffffff";
  } else {
    color = "#000000";
  }

  function initCountUp() {
    //function to create counter for possible color variations
    const countUp = new CountUp("16777216", 16777216, {
      enableScrollSpy: true,
      scrollSpyOnce: false,
      scrollSpyDelay: 100,
      suffix: " colors available in light & dark mode",
      duration: 3,
      useEasing: true,
    });
    if (!countUp.error) {
      countUp.start();
    } else {
      console.error(countUp.error);
    }
  }
  useEffect(() => {
    initCountUp();
  }, [color]);
  return (
    <div className="relative  h-screen w-full  flex flex-col bg-neutral-100 dark:bg-neutral-950 overflow-hidden">
      <SparklesCore
        id="tsparticlesfullpage"
        background="transparent"
        minSize={0.6}
        maxSize={1.4}
        particleDensity={50}
        className="w-full h-full "
        particleColor={color}
      ></SparklesCore>{" "}
      {/* MAIN SECTION */}
      <div className=" absolute  left-0 flex flex-col     justify-center  h-screen w-full overflow-hidden ">
        <motion.h1
          initial={{ opacity: 0.5, y: 10 }}
          whileInView={{ opacity: 1, y: 80 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className=" dark:text-white text-black/100   bg-clip-text text-center xl:text-8xl lg:text-7xl text-7xl font-bold  "
        >
          TRY ME
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0.5, y: 30 }}
          whileInView={{ opacity: 1, y: 100 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className=" dark:text-white text-black/100   bg-clip-text text-center xl:text-6xl lg:text-4xl text-4xl font-bold  "
        >
          PERSONALIZE YOUR EXPERIENCE
        </motion.h1>

        <motion.h1
          id="16777216"
          initial={{ opacity: 0.5, y: 60 }}
          whileInView={{ opacity: 1, y: 100 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className=" dark:text-white text-black/100  py-4 bg-clip-text text-center text-xl font-thin tracking-tight  md:text-3xl"
        >
          0
        </motion.h1>
        <motion.div
          className=" "
          initial={{ opacity: 0.5, y: 150 }}
          whileInView={{ opacity: 1, y: 200 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
        >
          <ColorPicker
            width="15rem"
            height="3rem"
            className="bottom-[6rem]  absolute animate-bounce "
            default={true}
            hueClassName=""
          />
        </motion.div>
      </div>
      {/* WAVES */}
      <div className="  absolute top-0 flex z-10 w-full justify-center ">
        <svg
          id="svg"
          viewBox="0 0 1440 390"
          xmlns="http://www.w3.org/2000/svg"
          className="  xl:w-[60vw]   lg:w-[80vw]  md:w-[90vw]  w-full"
        >
          <path
            d="M 0,400 L 0,400 C 171.86666666666667,276.93333333333334 343.73333333333335,153.86666666666667 503,87 C 662.2666666666667,20.133333333333333 808.9333333333334,9.466666666666669 963,71 C 1117.0666666666666,132.53333333333333 1278.5333333333333,266.26666666666665 1440,400 L 1440,400 L 0,400 Z"
            stroke="none"
            strokeWidth="0"
            fill="var(--BG)"
            fillOpacity="0.265"
            className="  path-0"
            transform="rotate(-180 720 200)"
          ></path>
          <path
            d="M 0,400 L 0,400 C 138.40000000000003,314.26666666666665 276.80000000000007,228.53333333333333 452,167 C 627.1999999999999,105.46666666666667 839.2,68.13333333333335 1010,111 C 1180.8,153.86666666666665 1310.4,276.93333333333334 1440,400 L 1440,400 L 0,400 Z"
            stroke="none"
            strokeWidth="0"
            fill="var(--BG)"
            fillOpacity="0.4"
            className="  path-1"
            transform="rotate(-180 720 200)"
          ></path>
          <path
            d="M 0,400 L 0,400 C 131.59999999999997,317.6 263.19999999999993,235.20000000000002 434,195 C 604.8000000000001,154.79999999999998 814.8,156.8 989,198 C 1163.2,239.2 1301.6,319.6 1440,400 L 1440,400 L 0,400 Z"
            stroke="none"
            strokeWidth="0"
            fill="var(--BG)"
            fillOpacity="0.53"
            className="  path-2"
            transform="rotate(-180 720 200)"
          ></path>
          <path
            d="M 0,400 L 0,400 C 123.86666666666667,374.1333333333333 247.73333333333335,348.2666666666667 396,327 C 544.2666666666667,305.7333333333333 716.9333333333334,289.06666666666666 895,302 C 1073.0666666666666,314.93333333333334 1256.5333333333333,357.4666666666667 1440,400 L 1440,400 L 0,400 Z"
            stroke="none"
            strokeWidth="0"
            fill="var(--BG)"
            fillOpacity="1"
            className="  path-3"
            transform="rotate(-180 720 200)"
          ></path>
        </svg>
      </div>
    </div>
  );
}

export default WebsiteIntroSection;
