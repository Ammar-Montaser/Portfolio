import { useTranslation } from "react-i18next";
import Toggle from "./Components/DarkModeButton";
import LanguageSelector from "./Components/LanguageSelector";
import ColorPicker from "../../SharedComponents/ColorPicker";

export default function Banner() {
  const { t } = useTranslation();
  const isDarkMode = localStorage.getItem("theme");
  const title = t("freePalestine");
  const description = t("palestineMessage");
  const linkTo = "https://www.gaza.online/donate";
  // ---- change the content above if you want to ----

  return (
    <>
      <div>
        <div
          className={`   z-50 flex items-center   px-3 py-2.5 dark:text-primaryContentDark text-primaryContent   backdrop-blur-xl  sm:px-6  rounded-t-2xl`}
        >
          <p className=" copyright mX-4 roboto-light ">
            © Ammar Montaser {new Date().getFullYear()}
          </p>
          <div
            className="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
            aria-hidden="true"
          ></div>
          <div
            className="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
            aria-hidden="true"
          ></div>
          <p
            className={`mx-auto text-sm ${
              isDarkMode ? "text-gray-300" : "text-gray-800"
            } sm:leading-6 text-primaryContent`}
          >
            <a href={linkTo} target="_blank" rel="noreferrer">
              <strong className="font-semibold  ">{title}</strong>
            </a>
            <Circle />

            <a
              href={linkTo}
              target="_blank"
              rel="noreferrer"
              className="max-lg:hidden text-primaryContent "
            >
              {description}
            </a>
          </p>
          <ColorPicker
            className="absolute   right-5 bottom-[4.5rem]"
            width="20px"
            height="20px"
          />
          <LanguageSelector />
          <Toggle />
        </div>
      </div>
    </>
  );
}

const Circle = () => (
  <svg
    viewBox="0 0 2 2"
    className="mx-2 inline h-1 w-1 fill-current max-lg:hidden"
    aria-hidden="true"
  >
    <circle cx={1} cy={1} r={1} />
  </svg>
);
