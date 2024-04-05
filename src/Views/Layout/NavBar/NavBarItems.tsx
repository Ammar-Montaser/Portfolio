import { useTranslation } from "react-i18next";

function Navbar() {
  const { t } = useTranslation();

  return (
    <nav className=" max-lg:hidden ">
      <ul className="rtl:cairoArabic flex  flex-row roboto-bold  dark:text-primaryContentDark text-primaryContent  justify-center rounded-2xl   space-x-5 xl:space-x-5 lg:space-x-8 md:space-x-8  md:text-md  xl:text-xl ">
        <a
          href="#about"
          className=" rtl:ml-5 rounded-md bg-BG  dark:hover:bg-gray-600/70  hover:bg-white/70/80  dark:hover:text-white hover:text-primaryContentHover px-4 py-2 hover:rounded-lg duration-300 hover:drop-shadow-lg hover:shadow-lg"
        >
          {t("about")}
        </a>
        <a
          href="#experience"
          className="  rounded-md bg-BG  dark:hover:bg-gray-600/70  hover:bg-white/70/80 dark:hover:text-white hover:text-primaryContentHover px-4 py-2 hover:rounded-lg duration-300 hover:drop-shadow-lg hover:shadow-lg"
        >
          {t("experience")}
        </a>
        <a
          href="#projects"
          className=" rounded-md  bg-BG   dark:hover:bg-gray-600/70  hover:bg-white/70/80  dark:hover:text-white hover:text-primaryContentHover px-4 py-2 hover:rounded-lg duration-300 hover:drop-shadow-lg hover:shadow-lg"
        >
          {t("projects")}
        </a>
        <a
          href="#contact"
          className="  rounded-md  bg-BG   dark:hover:bg-gray-600/70  hover:bg-white/70/80  dark:hover:text-white hover:text-primaryContentHover px-4 py-2 hover:rounded-lg duration-300 hover:drop-shadow-lg hover:shadow-lg"
        >
          {t("contact")}
        </a>
      </ul>
    </nav>
  );
}

export default Navbar;
