import { useTranslation } from "react-i18next";

function Logo() {
  const { t } = useTranslation();

  return (
    <div className="rtl:cairoArabic z-50  poppins-bold dark:text-primaryContentDark dark:text-white text-black    duration-300 ">
      <p className="text-2xl lg:text-2xl xl:text-2xl m-auto w-max">
        <span className="text-3xl  lg:text-3xl xl:text-3xl text-color">
          &lt;
        </span>
        {t("websiteName")}
        <span className="text-3xl lg:text-3xl xl:text-3xl  text-color">
          &gt;
        </span>
      </p>
    </div>
  );
}

export default Logo;
