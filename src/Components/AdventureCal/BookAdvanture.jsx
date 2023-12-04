import gradient from "/Advanture/gradient.svg";
import arrow from "/HeroSection/arrow-right.svg";
import { topArr, bottomArr } from "./data";
import { motion } from "framer-motion";

export default function BookAdvanture() {
  return (
    <section className="bg-white mt-10 text-center text-black relative md:p-0 z-10">
      <div className="badge-section text-xs m-auto text-[#6941C6] flex gap-3 pt-1 pr-1 pb-1 pl-1 rounded-2xl w-max items-center justify-center bg-gray-100">
        <p className="label-1 bg-white pl-1 pr-1 justify-start rounded-2xl">
          New Journey
        </p>
        <div className="label-2 flex gap-1">
          <p>Checkout the Event Calendar</p>
          <motion.img
            initial={{ x: "0", opacity: 1 }}
            animate={{ x: "7rem", opacity: 0 }}
            transition={{
              duration: 2,
              type: "spring",
              delay: 0.5,
            }}
            src="HeroSection/arrow-right.svg"
            alt="arrow-right"
          />
        </div>
      </div>
      {/* <img
        src={gradient}
        className="absolute md:-top-full  z-[-10] md:h-[2018.932px] -left-4 md:left-0 opacity-80"
      /> */}

      {topArr.map((step, index) => (
        <motion.div
          initial={{ y: "7rem", opacity: 0 }}
          animate={{ y: "0", opacity: 1 }}
          transition={{
            duration: 2,
            type: "spring",
            delay: 0.5,
          }}
          className="relative z-10 flex flex-col items-center mb-5 md:mb-20 md:text-center"
          key={index}
        >
          <p className="mb-5 text-4xl font-medium md:text-5xl">{step.head}</p>
          <p className="text-black text-xl md:max-w-xl max-w-sm">
            {step.subHead}
          </p>
        </motion.div>
      ))}
      {bottomArr.map((step, index) => (
        <div
          className="relative z-10 flex flex-col items-center justify-around mt-5 md:flex-row"
          key={index}
        >
          <motion.div
            initial={{ x: "7rem", opacity: 0 }}
            animate={{ x: "0", opacity: 1 }}
            transition={{
              duration: 2,
              type: "spring",
              delay: 0.5,
            }}
            className="text-left md:text-left"
          >
            <p className="max-w-sm mb-6 text-3xl leading-snug md:text-4xl">
              {step.head}
            </p>
            <p className="max-w-sm mb-5 text-xl font-bold">{step.subHead}</p>
            <p className="max-w-sm mb-6 text-xl text-black">
              {step.description}
            </p>
            <a
              href="/"
              className="flex justify-center gap-2 mb-6 md:justify-start"
            >
              <p className="border-b">Learn more</p>
              <img src={arrow} />
            </a>
          </motion.div>
          <motion.img
            initial={{ x: "-7rem", opacity: 0 }}
            animate={{ x: "0", opacity: 1 }}
            transition={{
              duration: 2,
              type: "spring",
              delay: 0.5,
            }}
            src={step.img}
            className="h-80"
          />
        </div>
      ))}
    </section>
  );
}
