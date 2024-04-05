import "./ChatBubble.css";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// @ts-expect-error TS ERROR
import useSound from "use-sound";
import bell from "../../../../assets/bell.mp3";

function formatAMPM(date: Date) {
  let hours = date.getHours();
  let minutes: string | number = date.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  const strTime = hours + ":" + minutes + " " + ampm;
  return strTime;
}

function ChatBubble(props: { msg: string }) {
  const [playSound] = useSound(bell);

  return (
    <div
      className="  xl:w-7/12 lg:w-8/12 md:w-8/12 sm:w-9/12 w-9/12  mt-10  mb-10  border-gray-200 shadow-black drop-shadow-xl "
      onClick={playSound}
    >
      <div className="flex flex-col  leading-1.5 p-4 bg-gray-100/90  rounded-xl dark:bg-gray-700/90">
        <div className="flex items-center space-x-2 rtl:space-x-reverse last:self-end">
          <img
            className="w-14 h-14 rounded-full"
            src="https://iili.io/JNxOgx1.webp"
            alt="My Cat Mango"
          />
          <span className=" font-semibold text-gray-900 dark:text-white text-xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-2xl">
            Mango (My Cat)
          </span>
        </div>

        <h1 className=" text-2xl sm:text-3xl md:text-3xl lg:text-3xl  xl:text-3xl font-normal py-2.5 text-gray-900 dark:text-white">
          {props.msg}
        </h1>

        <div className="flex flex-row justify-between space-x-2 rtl:space-x-reverse">
          <a
            className="text-sm sm:text-md md:text-md lg:text-md xl:text-md font-normal text-gray-500 dark:text-gray-400"
            href="https://8768zwfurd.execute-api.us-east-1.amazonaws.com/v1/compliments"
          >
            Source: Compliments API
          </a>
          <p className="text-gray-500 text-xs hidden lg:visible dark:text-gray-400 uppercase">
            Fake loading just to show you my loading screen.
          </p>
          <div className="flex flex-row justify-end space-x-2 rtl:space-x-reverse">
            <span className="text-lg sm:text-xl md:text-xl lg:text-xl xl:text-xl font-normal text-gray-500 dark:text-gray-400">
              {formatAMPM(new Date())}
            </span>
            <i className="fa-solid fa-check-double text-blue-400 text-xl"></i>
          </div>
        </div>
      </div>
      <div className="triangle relative m-auto h-10 "></div>
    </div>
  );
}

export default ChatBubble;
