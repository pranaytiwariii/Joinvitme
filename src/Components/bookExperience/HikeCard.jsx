import arrow from "/HeroSection/arrow-right.svg";
import { topArr, bottomArr } from "./data";
import { motion } from "framer-motion";

export default function HikeCard() {
  return (
    <div className="grid grid-cols-1  sm:grid-cols-3 gap-5">
      {bottomArr.map((step, index) => (
        <div
          className="relative z-10 flex flex-col items-center justify-around mt-5"
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
          >
            <img src={step.img} alt="information photoz" className=" h-80" />
          </motion.div>
          <motion.div
            initial={{ y: "7rem", opacity: 0 }}
            animate={{ y: "0", opacity: 1 }}
            transition={{
              duration: 2,
              type: "spring",
              delay: 0.5,
            }}
            className="text-left pl-10 md:text-left"
          >
            <p className="max-w-sm mb-6 text-3xl leading-snug md:text-2xl">
              {step.head}
            </p>
            {/* <p className="max-w-sm mb-5 text-xl font-bold">{step.subHead}</p> */}
            <p className="max-w-sm mb-6 text-md text-black">
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
        </div>
      ))}
    </div>
  );
}
