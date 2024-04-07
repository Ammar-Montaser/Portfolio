import { AnimatePresence, motion } from "framer-motion";
import HamburgerMenuItem from "./HamburgerMenuItem";
import { useState } from "react";
import SocialMediaIcons from "../../../SharedComponents/SocialMediaIcons";
import { useAppSelector } from "../../../../Hooks/ReduxHooks";
import { useTranslation } from "react-i18next";

function SideMenu() {
  const [hoverItem, sethoverItem] = useState("");
  const open = useAppSelector((state) => state.app.isMobileMenuOpen);
  const { t } = useTranslation();

  function handleHover(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ): void {
    sethoverItem(event.currentTarget.innerText);
  }
  function handleHoverExit(): void {
    sethoverItem("");
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="flex flex-col items-center justify-center h-full w-full fixed z-[11] top-0 dark:bg-[#121212] bg-gray-200  "
          initial={{ x: -100, opacity: 0, scale: 0 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{
            ease: "linear",
            duration: 0.2,
          }}
        >
          <AnimatePresence>
            {hoverItem != "" ? (
              <div className="contents">
                <motion.h1
                  className="poppins-extrabold shadow-BG shadow-lg rounded-lg text-black px-5 py-2 bg-BG	 absolute m-auto z-20 text-5xl md:text-8xl lg:text-8xl xl:text-9xl opacity-20"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 0.6, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{
                    type: "spring",
                    damping: 10,
                    stiffness: 70,
                  }}
                >
                  {t(hoverItem.toLowerCase())}
                </motion.h1>
              </div>
            ) : null}
          </AnimatePresence>
          <HamburgerMenuItem
            href="#about"
            text={t("about")}
            handleHover={handleHover}
            handleHoverExit={handleHoverExit}
          />
          <HamburgerMenuItem
            href="#experience"
            text={t("experience")}
            handleHover={handleHover}
            handleHoverExit={handleHoverExit}
          />
          <HamburgerMenuItem
            href="#projects"
            text={t("projects")}
            handleHover={handleHover}
            handleHoverExit={handleHoverExit}
          />
          <HamburgerMenuItem
            href="#contact"
            text={t("contact")}
            handleHover={handleHover}
            handleHoverExit={handleHoverExit}
          />

          <hr className="text-color border-color w-3/6 mt-5 z-20 border"></hr>
          <h1 className="poppins-bold text-2xl dark:text-white text-black mt-7">
            GET IN TOUCH
          </h1>

          <SocialMediaIcons size="size-8" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default SideMenu;
