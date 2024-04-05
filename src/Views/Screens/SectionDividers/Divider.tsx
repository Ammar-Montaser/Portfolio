import { motion } from "framer-motion";
import { ReactElement, ReactSVGElement } from "react";
function Divider(props: {
  id: string;
  text: string;
  number: number;
  className: string;
  item1: string;
  item2: string;
  item3: string;

  icon: ReactElement<ReactSVGElement>;
  icon2: ReactElement<ReactSVGElement>;
}) {
  return (
    <div className="flex flex-row justify-center items-center  dark:bg-neutral-950 bg-neutral-100 overflow-hidden relative">
      {props.icon}
      <div
        id={props.id}
        className="h-[60vh] w-full flex flex-col justify-center items-center overflow-hidden"
      >
        <motion.h2
          initial={{ y: -200 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1 }}
          className={props.className}
        >
          {props.text}
        </motion.h2>
        <div className="relative flex flex-col md:flex-row py-5 items-center   ">
          <span className="flex-shrink mx-4 dark:text-white text-black text-xl hover:scale-110 transition hover:text-color dark:hover:text-color hover:animate-bounce">
            {props.item1}
          </span>
          <span className="flex-shrink mx-4 dark:text-white text-black text-xl hover:scale-110 transition hover:text-color dark:hover:text-color hover:animate-bounce">
            {props.item2}
          </span>
          <span className="flex-shrink mx-4 dark:text-white text-black text-xl hover:scale-110 transition hover:text-color dark:hover:text-color hover:animate-bounce">
            {props.item3}
          </span>
        </div>{" "}
      </div>
      {props.icon2}
    </div>
  );
}

export default Divider;
