import { topArr, bottomArr } from "./data";
import { motion } from "framer-motion";

export default function Query() {
  return (
    <>
      <div className="flex gap-0 pt-5 sm:gap-10 justify-center">
        <div className="relative w-1/2">
          <img src="/instapic/5.webp" className="pt-5" alt="" />
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
      <button className="sm:hidden flex justify-center ml-[20%] mt-3 px-6 text-[#6941C6] rounded-full border-4 font-sm md:px-9 bg-white border-[#6941C6] font-euclid-bold">
        join a open group experience
      </button>
    </>
  );
}
