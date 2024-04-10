import { ReactNode } from "react";
import "./Nav.css";
import Logo from "../../SharedComponents/Logo";
import SideMenu from "./Components/SideMenu";
import Navbar from "./NavBarItems";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { ShimmerButton } from "../../SharedComponents/ShimmerButton";
import { useAppDispatch, useAppSelector } from "../../../Hooks/ReduxHooks";
import { appSliceActions } from "../../../Redux/appSlice";

function Nav(props: { className?: string }): ReactNode {
  const open = useAppSelector((state) => state.app.isMobileMenuOpen);
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const toogleMenu = () => {
    window.document.body.classList.toggle("overflow-hidden");

    dispatch(appSliceActions.toogleMobileMenu());
  };

  return (
    <div>
      <motion.div
        id="header"
        className={
          props.className +
          " flex flex-row h-20 w-full items-center  duration-300  z-50  backdrop-blur-sm shadow-lg    justify-around  rounded-b-2xl"
        }
      >
        <Logo />
        {!open && <Navbar />}
        {!open && (
          <ShimmerButton
            content={t("downloadResume")}
            ClassName="!rtl:cairoArabic roboto-bold dark:text-white text-black w-50 px-4 py-4 max-xl:hidden "
          />
          // <li className="rtl:cairoArabic roboto-bold text-nowrap list-none border border-black	 max-xl:hidden rounded-md dark:text-secondaryContentDark dark:hover:border-black dark:hover:bg-secondaryContentDark dark:hover:text-secondaryContent dark:hover:border-BG  dark:border-white hover:bg-secondaryContentHover hover:text-secondary bg-secondary dark:bg-secondaryDark  hover:border-white   px-10 py-3 hover:rounded-lg duration-300  hover:drop-shadow-md hover:shadow-md">
          //   {t("downloadResume")}
          // </li>
        )}

        <button
          className={
            open
              ? " right-10  z-20  duration-300  shadow-lg rounded-md"
              : " right-10 z-20 lg:hidden duration-300  shadow-lg rounded-md hover:shadow-BG"
          }
          onClick={toogleMenu}
        >
          <motion.i
            whileTap={{ scale: 0.85, rotate: 15 }}
            initial={{ scale: 1 }}
            className={
              "fa-solid fa-bars text-2xl text-primaryContent dark:text-primaryContentDark  bg-BG py-2 px-3 rounded-md shadow-md"
            }
          ></motion.i>
        </button>
      </motion.div>
      <SideMenu />
    </div>
  );
}

export default Nav;
