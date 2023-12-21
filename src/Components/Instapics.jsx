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
  {
    id: 6,
    img: "/instapic/7.webp",
  },
  {
    id: 7,
    img: "/instapic/8.webp",
  },
];

export default function Instapics() {
  return (
    <div>
      <section className="flex mx-2 md:mx-4 flex-col items-center ">
        {/* ----------------------header section---------------------- */}
        <div className="top-container">
          <div className="badge-section text-xs m-auto text-[#6941C6] flex gap-3 pt-1 pr-1 pb-1 pl-1 rounded-2xl w-max items-center justify-center bg-gray-100">
            <p className="label-1 bg-[#F9F5FF] pl-1 pr-1 justify-start rounded-2xl">
              top destination
            </p>
          </div>
          <div className="heading-section mt-3 flex flex-col gap-4 items-center">
            <h1 className="text-2xl md:text-4xl font-semibold text-center flex-wrap">
              Discover your love
            </h1>
            <p className="text-xl text-center text-[#667085] sm:text-xl sm:px-12  lg:px-72">
              Powerful, self-serve product and growth analytics to help you
              convert, engage, and retain more users. Trusted by over 4,000
              startups.
            </p>
          </div>

          <div className="badge-section text-1xl m-auto px-2 text-[#6941C6] flex gap-3 pt-1 pr-1 pb-1 pl-1 rounded-2xl w-max items-center justify-center bg-gray-100">
            <button className="label-2 flex gap-1">
              <a href="https://www.instagram.com/joinvithme/">Checkout on Instagram</a>
            </button>
          </div>
        </div>

        {/* ----------------------image section---------------------- */}
        <div className="flex-col  md:grid grid-cols-3 gap-3">
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
              className="bg-[#F9F5FF] flex justify-self-center content-center text-clip gap-3 border-2 rounded-md border-purple-500 p-5 "
            >
              <img src={index.img} alt="" />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
