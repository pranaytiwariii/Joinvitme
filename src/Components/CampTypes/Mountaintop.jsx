import Hero from "/Hero/Background.png";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const cardData = [
  {
    id: 0,
    img: "/instapic/1.webp ",
    header: "LAKESIDE HIKE",
    discription:
      "Venture into the great outdoors, where tails wag, paws roam, and hearts are set free. Our four-legged friend knows that the best adventures start at the edge of a tranquil lake. 💙🐾",
    location: "Virar",
  },
  {
    id: 1,
    img: "/instapic/2.webp",
    header: "LAKESIDE HIKE",
    discription:
      "Venture into the great outdoors, where tails wag, paws roam, and hearts are set free. Our four-legged friend knows that the best adventures start at the edge of a tranquil lake. 💙🐾",
    location: "Virar",
  },
  {
    id: 2,
    img: "/instapic/3.webp",
    header: "LAKESIDE HIKE",
    discription:
      "Venture into the great outdoors, where tails wag, paws roam, and hearts are set free. Our four-legged friend knows that the best adventures start at the edge of a tranquil lake. 💙🐾",
    location: "Virar",
  },
  {
    id: 3,
    img: "/instapic/4.webp",
    header: "LAKESIDE HIKE",
    discription:
      "Venture into the great outdoors, where tails wag, paws roam, and hearts are set free. Our four-legged friend knows that the best adventures start at the edge of a tranquil lake. 💙🐾",
    location: "Virar",
  },
  {
    id: 4,
    img: "/instapic/5.webp",
  },
  {
    id: 5,
    img: "/instapic/6.webp",
  },
  // {
  //   id: 6,
  //   img: "/instapic/7.jpg",
  // },
  // {
  //   id: 7,
  //   img: "/instapic/8.jpg",
  // },
];

export default function Mountaintop() {
  return (
    <section className=" flex mx-2 md:mx-4 flex-col items-center gap-12 ">
      <div className="top-container">
        <NavLink to="/Adventure Calendar"></NavLink>
        <motion.div
          initial={{ y: "7rem", opacity: 0 }}
          animate={{ y: "0", opacity: 1 }}
          transition={{
            duration: 4,
            type: "spring",
            delay: 0.5,
          }}
          className="heading-section mt-3 flex flex-col gap-4 items-center"
        >
          <h1 className="text-2xl md:text-4xl font-semibold text-center flex-wrap">
            Mountain Top Camping
          </h1>
          <p className="text-gray-500 text-sm md:text-base  max-w-sm lg:max-w-lg overflow-hidden text-center">
            Region: Karjat || Date: 9th Dec'23 - 10th Dec'23
          </p>
          <p className="text-gray-500 text-sm md:text-base  max-w-sm lg:max-w-lg overflow-hidden text-center">
            RAW CAMPING
          </p>
        </motion.div>
      </div>
      <motion.div
        initial={{ y: "7rem", opacity: 0 }}
        animate={{ y: "0", opacity: 1 }}
        transition={{
          duration: 4,
          type: "spring",
          delay: 0.5,
        }}
        className="bottom-container"
      >
        <div className="img-section">
          <img className="lg:w-[90%] m-auto" src={Hero} alt="mackbook" />
        </div>
        <motion.div
          initial={{ x: "-7rem", opacity: 0 }}
          animate={{ x: "0", opacity: 1 }}
          transition={{
            duration: 4,
            type: "spring",
            delay: 0.5,
          }}
          className="flex text-center m-10 flex-col gap-[0.75rem]  "
        >
          <h2 className="font-bold lg:font-semibold text-[#6941C6] text-[1.7rem] lg:text-[2.25rem] leading-[1.75rem] tracking-[-0.045rem] ">
          About camp
          </h2>
          <p className="font-normal flex items-center lg:text-[1.25rem] lg:leading-[1.875rem] text-gray-500 m-0 sm:mx-20 mt-0">
            This is not a typical camping trip, it's a journey of self-
            discovery where you'll learn outdoor survival essentials. From
            setting up camp by the lakeside to preparing meals under the open
            sky, every aspect immerses you in the raw beauty of nature.
            Riverside raw camping allows you to escape city life, gain
            self-sufficiency skills, and reconnect with the natural world.
            Embrace the moonlit nights, starry skies, and the soothing sound of
            the lake. Be ready to step out of your comfort zone and into a
            transformative adventure, whether you're an experienced outdoors
            enthusiast or a novice camper
          </p>
        </motion.div>
        <motion.div
          initial={{ x: "-7rem", opacity: 0 }}
          animate={{ x: "0", opacity: 1 }}
          transition={{
            duration: 4,
            type: "spring",
            delay: 0.5,
          }}
          className="flex text-center m-10 flex-col gap-[0.75rem]  "
        >
          <h2 className="font-bold lg:font-semibold text-[#6941C6] text-[1.7rem] lg:text-[2.25rem] leading-[1.75rem] tracking-[-0.045rem] ">
          Trip View
          </h2>
          <div className="flex-col  md:grid grid-cols-2 m-0 sm:m-5 gap-3">
          {cardData.map((index) => (
            <motion.div
              initial={{ x: "-7rem", opacity: 0 }}
              animate={{ x: "0", opacity: 1 }}
              transition={{
                duration: 4,
                type: "spring",
                delay: 0.5,
              }}
              key={index.id}
              className="bg-[#F9F5FF] m-2 flex justify-self-center content-center text-clip gap-3 border-2 rounded-md border-purple-500 p-5 "
            >
              <img src={index.img} alt="" />
            </motion.div>
          ))}
        </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
