import arrow from "/HeroSection/arrow-right.svg";
import { topArr, bottomArr } from "./data";
import { motion } from "framer-motion";

export default function BookExp() {
  return (
    <section className="pl-2 bg-white mt-3 text-center text-black relative md:p-0 bg-grad">
      <div className="z-[-10] pb-3 badge-section text-xs m-auto text-[#6941C6] flex gap-3 pt-1 pr-1 pl-1 rounded-2xl w-max items-center justify-center bg-gray-100">
        <p className="label-1 bg-white  pl-1 pr-1 justify-start rounded-2xl">
          New Journey
        </p>
        <div className="label-2 flex gap-1">
          <p>Checkout the Event Calendar</p>
          <motion.img
            initial={{ x: "0", opacity: 1 }}
            animate={{ x: "4rem", opacity: 0 }}
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

      <div className="flex gap-0 sm:gap-10 justify-center">
        <div className="relative w-1/3">
          <img
            src="/book eperience/2.jpg"
            className="h-11/2"
            alt=""
          />
          <div className="absolute text-2xl sm:text-5xl lg:text-7xl text-white text-start font-bold bottom-1/4">
            <h1>Private</h1>
            <h1>Experience</h1>
          </div>
        </div>
        {topArr.map((step, index) => (
          <motion.div
            initial={{ y: "7rem", opacity: 0 }}
            animate={{ y: "0", opacity: 1 }}
            transition={{
              duration: 2,
              type: "spring",
              delay: 0.5,
            }}
            className="relative sm:mt-10 md:mt-20 z-10 flex flex-col sm:top items-center mb-5 md:mb-20 md:text-center"
            key={index}
          >
            <p className="mb-2 sm:mb-5 text-1xl sm:text-4xl font-medium  md:text-5xl">
              {step.head}
            </p>
            <p className="text-[#505052] w-60 sm:w-80 text-sm sm:text-xl sm:max-w-xl max-w-sm">
              {step.subHead}
            </p>
            <button className="hidden align-baseline mt-20 sm:block px-6 py-2 text-[#6941C6] rounded-full border-4 font-lg md:px-9 bg-white border-[#6941C6] font-euclid-bold">
          Customize your treak
        </button>
          </motion.div>

        ))}
      </div>
      <button className="sm:hidden px-6 text-[#6941C6] rounded-full border-4 font-sm md:px-9 bg-white border-[#6941C6] font-euclid-bold">
          Customize your treak
        </button>
        <div>
          <img src="/book eperience/fullw.png" className="w-full py-3 px-0" alt="" />
        </div>

        {/* <div className="grid grid-cols-1  sm:grid-cols-2 gap-5">{bottomArr.map((step, index) => (
        <div
          className="relative z-10 flex flex-col items-center justify-around mt-5 md:flex-row"
          key={index}
        >
          <motion.div
            initial={{ y: "7rem", opacity: 0 }}
            animate={{ y: "0", opacity: 1 }}
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
              href={step.href}
              className="flex justify-center gap-2 mb-6 md:justify-start"
            >
              <p className="border-b">Learn more</p>
              <img src={arrow} />
            </a>
          </motion.div>
          <motion.img
            initial={{ y: "7rem", opacity: 0 }}
            animate={{ y: "0", opacity: 1 }}
            transition={{
              duration: 2,
              type: "spring",
              delay: 0.5,
            }}
            src={step.img}
            alt="information photoz"
            className=" h-80"
          />
        </div>
      ))}</div> */}

{/* <div className="flex gap-0 pt-5 sm:gap-10 justify-center">
        <div className="relative w-1/2">
          <img
            src="/instapic/5.webp"
            className="pt-5"
            alt=""
          />
          <div className="absolute text-1xl sm:text-5xl lg:text-7xl text-white text-start font-bold bottom-1/4">
            <h1>join a</h1>
            <h1>group</h1>
            <h1>Experience</h1>
          </div>
        </div>
        {topArr.map((step, index) => (
          <motion.div
            initial={{ y: "7rem", opacity: 0 }}
            animate={{ y: "0", opacity: 1 }}
            transition={{
              duration: 2,
              type: "spring",
              delay: 0.5,
            }}
            className="relative sm:mt-10 md:mt-20 z-10 flex flex-col sm:top items-center mb-5 md:mb-20 md:text-center"
            key={index}
          >
            <p className="mb-2 sm:mb-5 text-1xl sm:text-4xl font-medium  md:text-5xl">
              {step.head}
            </p>
            <p className="text-[#505052] w-60 sm:w-80 text-sm sm:text-xl sm:max-w-xl max-w-sm">
              {step.subHead}
            </p>
            <button className="hidden align-baseline mt-20 sm:block px-6 py-2 text-[#6941C6] rounded-full border-4 font-lg md:px-9 bg-white border-[#6941C6] font-euclid-bold">
          join a open group experience
        </button>
          </motion.div>

        ))}
      </div>
      <button className="sm:hidden px-6 text-[#6941C6] rounded-full border-4 font-sm md:px-9 bg-white border-[#6941C6] font-euclid-bold">
      join a open group experience
        </button> */}
    </section>
  );
}
