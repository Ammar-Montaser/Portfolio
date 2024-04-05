/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

let interval: any;

type Card = {
  id: number;
  img: string;
  ImgClassName: string;
  alt: string;
  header: string;
  description: string;
};

export const CardStack = ({ items }: { items: Card[] }) => {
  const CARD_OFFSET = 10;
  const SCALE_FACTOR = 0.06;
  const [cards, setCards] = useState<Card[]>(items);

  useEffect(() => {
    startFlipping();

    return () => clearInterval(interval);
  }, []);
  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards: Card[]) => {
        const newArray = [...prevCards]; // create a copy of the array
        newArray.unshift(newArray.pop()!); // move the last element to the front
        return newArray;
      });
    }, 5000);
  };

  return (
    <div className="  flex flex-col justify-center items-center ">
      {cards.map((card, index) => {
        return (
          <motion.div
            key={card.id}
            className="absolute dark:bg-black bg-white/70 w-11/12 md:w-8/12 lg:w-6/12 h-[50vh]  rounded-3xl p-4 shadow-xl border border-neutral-200 dark:border-white/[0.1]  shadow-black/[0.1] dark:shadow-white/[0.05] flex flex-col justify-between"
            style={{
              transformOrigin: "top center",
            }}
            animate={{
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR, // decrease scale for cards that are behind
              zIndex: cards.length - index, //  decrease z-index for the cards that are behind
            }}
          >
            <motion.div className="group/product h-full w-full  relative flex-shrink-0 rounded-xl shadow-xl  ">
              <img
                src={card.img}
                className={card.ImgClassName}
                alt={card.alt}
              />

              <div className="absolute inset-0 h-full mx-auto w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none rounded-xl transition duration-500"></div>
              <div className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 transition duration-500">
                {" "}
                <h2 className=" font-extrabold text-2xl mb-5  text-white">
                  {card.header}{" "}
                </h2>
                <p className=" text-white">{card.description}</p>
              </div>
            </motion.div>{" "}
          </motion.div>
        );
      })}
    </div>
  );
};
