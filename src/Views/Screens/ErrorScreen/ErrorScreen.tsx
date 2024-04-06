import Lottie from "lottie-react";
import error from "../../../assets/error.json";
import Footer from "../../Layout/Footer/Footer";
import Nav from "../../Layout/NavBar/Nav";
import { SparklesCore } from "../WebsiteIntroSection/Components/Sparkles";
import { useAppSelector } from "../../../Hooks/ReduxHooks";
import { useEffect } from "react";
function ErrorScreen() {
  const mode = useAppSelector((state) => state.app.mode);

  let color;
  if (mode === "dark") {
    color = "#ffffff";
  } else {
    color = "#000000";
  }
  useEffect(() => {}, [color]);

  return (
    <div className="  flex flex-col   items-center justify-center overflow-hidden ">
      {" "}
      <SparklesCore
        id="tsparticlesfullpage"
        background="transparent"
        minSize={0.6}
        maxSize={1.4}
        particleDensity={50}
        className="w-screen h-screen "
        particleColor={color}
      ></SparklesCore>{" "}
      <Nav className="left-0 top-0 absolute" />
      <div className="absolute bottom-40 ">
        {" "}
        <h1 className=" dark:text-primaryContentDark font-extrabold  text-primaryContent  text-center    text-3xl sm:text-5xl md:text-5xl lg:text-7xl xl:text-8xl  py-2  rounded-lg     ">
          WHERE ARE WE?
        </h1>
        <h1 className=" dark:text-primaryContentDark font-extralight uppercase  text-primaryContent  text-center  text-2xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-5xl  py-2  rounded-lg     ">
          Error 404 - I Think We Are Going To The Middle Of No Where.
        </h1>
      </div>
      <div className="xl:w-2/12 lg:w-4/12 md:w-4/12 sm:w-4/12 w-6/12 absolute top-40  overflow-hidden">
        <Lottie
          className=""
          loop={true}
          autoPlay={true}
          animationData={error}
          rendererSettings={{
            preserveAspectRatio: "xMidYMid slice",
          }}
        />
      </div>
      <Footer className="absolute bottom-0" />{" "}
    </div>
  );
}

export default ErrorScreen;
