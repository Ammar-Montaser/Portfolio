import Lottie from "lottie-react";

import "./Preloader.css";
import blackCat from "../../../assets/blackCat.json";
import ChatBubble from "./Components/ChatBubble";
import { useAppSelector } from "../../../Hooks/ReduxHooks";

function Preloader(props: { advice: string }) {
  const error = useAppSelector((state) => state.app.error);

  return (
    <div className="preloader flex flex-col justify-center h-50 items-center justify-items-center  ">
      <h1 className=" dark:text-primaryContentDark font-extrabold  text-primaryContent    text-3xl sm:text-5xl md:text-5xl lg:text-7xl xl:text-8xl  py-2  rounded-lg     ">
        LOADING MY PORTFOLIO
      </h1>
      {error.length ? (
        <ChatBubble msg={error} />
      ) : (
        <ChatBubble msg={props.advice} />
      )}

      <div className="xl:w-2/6 lg:w-2/4 md:w-3/6 sm:w-4/6 w-5/6 absolute bottom-0">
        <Lottie
          className=""
          loop={false}
          autoPlay={true}
          animationData={blackCat}
          rendererSettings={{
            preserveAspectRatio: "xMidYMid slice",
          }}
        />
      </div>
    </div>
  );
}

export default Preloader;
