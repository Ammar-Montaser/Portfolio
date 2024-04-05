import { motion } from "framer-motion";

function OpacityCards(props: {
  img: string;
  alt: string;
  header: string;
  description: string;
  ImgClassName: string;
}) {
  return (
    <div className=" h-full  ">
      <motion.div className="group/product h-96 w-full relative flex-shrink-0 rounded-xl shadow-xl  ">
        <img src={props.img} className={props.ImgClassName} alt={props.alt} />

        <div className="absolute inset-0 h-full mx-auto w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none rounded-xl transition duration-500"></div>
        <div className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 transition duration-500">
          {" "}
          <h2 className=" font-extrabold text-2xl mb-5  text-white">
            {props.header}{" "}
          </h2>
          <p className=" text-white">{props.description}</p>
        </div>
      </motion.div>{" "}
    </div>
  );
}

export default OpacityCards;
