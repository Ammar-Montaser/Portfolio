"use client";
import React from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export const ProjectsParallax = () => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0], [0, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-500, 0]),
    springConfig
  );
  return (
    <div
      ref={ref}
      className="h-fit overflow-hidden  dark:bg-neutral-950 bg-neutral-100 antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />

      <motion.div className="visible md:hidden grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 grid-rows-4 gap-10 xl:mx-10 mx-5 mb-20">
        {products.map((product) => (
          <ProductCard product={product} key={product.title} />
        ))}
      </motion.div>

      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=" visible max-sm:hidden "
      >
        <motion.div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 grid-rows-4 gap-10 xl:mx-10 mx-5 mb-20">
          {products.map((product) => (
            <ProductCard product={product} key={product.title} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className=" relative py-20 md:py-40 px-4 ">
      <h1 className="text-2xl text-center md:text-7xl font-bold dark:text-white">
        The Ultimate <br /> Development Portfolio
      </h1>
      <p className="max-w-2xl mx-auto text-center  text-base md:text-xl mt-8 dark:text-neutral-200">
        Throughout the past years I've had the chance to work on various
        projects of different scales and industries. Unfortunately, due to
        Non-Disclosure Agreements some projects can't be added to the portfolio.
        However, here's a list of some amazing projects I developed.
      </p>
    </div>
  );
};

export const ProductCard = ({
  product,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
  };
}) => {
  return (
    <motion.div
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-96 w-full relative flex-shrink-0 rounded-3xl shadow-xl  "
    >
      <a
        href={product.link}
        target="_blank"
        className="block group-hover/product:shadow-2xl "
      >
        <img
          src={product.thumbnail}
          height="600"
          width="600"
          className=" object-cover  absolute h-full w-full inset-0 rounded-3xl"
          alt={product.title}
        />
      </a>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none rounded-3xl"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {product.title}
      </h2>
    </motion.div>
  );
};

const products = [
  {
    title: "Simple Stocks Website UI Design",
    link: "https://fanciful-pudding-2a7a2d.netlify.app/",
    thumbnail: "https://iili.io/JNj7BYN.webp",
  },
  {
    title: "Calorie Intake Calculator (FlutterFlow)",
    link: "https://www.loom.com/share/dfa457e5c6bd4ca3aedb3d22ad3ed804?sid=006bd1b0-8f38-46c9-b733-4d003f96f5c6",
    thumbnail: "https://iili.io/JNj5rk7.webp",
  },
  {
    title: "Arminda (First 2D Game)",
    link: "https://youtu.be/_riAfvaGZSY?t=99",
    thumbnail: "https://iili.io/JNj5Czu.webp",
  },

  {
    title: "Project Vault (RFID Smart Locker Automation App)",
    link: "https://youtube.com/shorts/2If3yzoiN1Q",
    thumbnail: "https://iili.io/JNjRtRt.webp",
  },
  {
    title: "Project Vault (RFID Smart Locker Automation Circuit)",
    link: "https://youtube.com/shorts/TnONTCZWkec",
    thumbnail: "https://iili.io/JNjRSOF.webp",
  },

  {
    title: "The Hub Landing Page [My Startup] (Old Version)",
    link: "https://effortless-salmiakki-05ecac.netlify.app/",
    thumbnail: "https://iili.io/JNjRXob.webp",
  },
  {
    title: "The Hub Mobile App [My Startup] (Old Version)",
    link: "https://youtu.be/OXlKVFP5caI",
    thumbnail: "https://iili.io/JNjA1ja.webp",
  },
  {
    title: "Portfolio Website (Old)",
    link: "https://sprightly-sherbet-85510a.netlify.app",
    thumbnail: "https://iili.io/JNjACv9.webp",
  },
  {
    title: "DAPE (Simple Crypto NFT Community Game)",
    link: "https://youtu.be/sINNpwfH4kc",
    thumbnail: "https://iili.io/JNjAJhG.webp",
  },
  {
    title: "Solider Shooting Range Management Application",
    link: "https://youtu.be/-UDzBKMahzM",
    thumbnail: "https://iili.io/JNjuQBR.webp",
  },

  {
    title: "Spiral (First 3D Game)",
    link: "https://youtu.be/vZRJ5T3iBMc",
    thumbnail: "https://iili.io/JNjuhmu.webp",
  },
  {
    title: "Cinema App UI Design",
    link: "https://dribbble.com/shots/23933554-Cinema-Application-UI-Design?utm_source=Clipboard_Shot&utm_campaign=3am3amy&utm_content=Cinema%20Application%20UI%20Design&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=3am3amy&utm_content=Cinema%20Application%20UI%20Design&utm_medium=Social_Share",
    thumbnail: "https://iili.io/JNjT8Rn.webp",
  },
];
