import { motion } from "framer-motion";
import { useRef } from "react";
import ReactPlayer from "react-player";

const bottomArr = [
  {
    id: 0,
    head: "Nikita Sharma",
    subHead: "Senior developer at Microsoft  ",
    description:
      "Joined us for a memorable Raw Camping experience on 25th November 2023, Saturday. It was a realy awsome movement spending time with nature , exploring me 🏕🌌      ",
    img: "/Advanture/Niki's testomony.mp4",
  },
  // {
  //   id:1,
  //   head: "Lake-side camping",
  //   subHead: "Accelerate your token’s journey by boosting its liquidity",
  //   description:
  //     "We invest in building long-term, sustainable relationships and support our projects in their growth journey with our services, industry expertise and network.",
  //   img: token,
  // },
];

const items = [
  {
    id: 1,
    photo: "/Footer/logo.png",
    person: "Pranay Tiwari",
    about: "2nd year computer science student at Tcet.",
    review:
      "At Gravity Team, we are on the mission to balance the supply and demand across crypto markets worldwide. We are a crypto native market maker founded by traders, developers, and innovators who are strong believers and supporters of the future of decentralization and digital assets.",
  },
  {
    id: 2,
    photo: "/Footer/logo.png",
    person: "Pranay Tiwari",
    about: "2nd year computer science student at Tcet.",
    review:
      "At Gravity Team, we are on the mission to balance the supply and demand across crypto markets worldwide. We are a crypto native market maker founded by traders, developers, and innovators who are strong believers and supporters of the future of decentralization and digital assets.",
  },
  {
    id: 3,
    photo: "/Footer/logo.png",
    person: "Pranay Tiwari",
    about: "2nd year computer science student at Tcet.",
    review:
      "At Gravity Team, we are on the mission to balance the supply and demand across crypto markets worldwide. We are a crypto native market maker founded by traders, developers, and innovators who are strong believers and supporters of the future of decentralization and digital assets.",
  },
];

export default function TestLayout() {
  const videoRef = useRef(null);

  const playPauseHandler = () => {
    const video = videoRef.current;

    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };
  return (
    <div className="flex mx-2 md:mx-4 flex-col items-center gap-12 pt-10">
      <div className="top-container">
        <div className="badge-section text-xs m-auto text-[#6941C6] flex gap-3 pt-1 pr-1 pb-1 pl-1 rounded-2xl w-max items-center justify-center bg-gray-100">
          <p className="label-1 bg-[#F9F5FF] pl-1 pr-1 justify-start rounded-2xl">
            Testimonial
          </p>
        </div>
        <div className="heading-section mt-3 flex flex-col gap-4 items-center">
          <h1 className="text-2xl md:text-4xl font-semibold text-center flex-wrap">
            What they say about us
          </h1>
        </div>
      </div>

      <section className="bg-white mt-10 text-center text-black relative md:p-0 z-10">
        {bottomArr.map((step, index) => (
          <div
            className="relative z-10 gap-40 flex flex-col items-center justify-around mt-5 md:flex-row"
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
            </motion.div>
            <div className="w-60 h-80">
              <ReactPlayer
                className="react-player fixed-bottom"
                url="https://youtube.com/shorts/9TpF8YoPLdUff"
                width="100%"
                height="100%"
                controls={true}
              />
            </div>
          </div>
        ))}
      </section>

      <div className="flex flex-wrap">
        {items.map((step) => (
          <div
            key={step.id}
            id={step.id}
            className=" lg:w-1/3 pb-5 p-10 hover:bg-gray-100"
          >
            <div className="flex text-lg hover:text-[#6941C6] font-bold">
              <img src={step.photo} className="h-16 pr-5" alt="" />
              <div>
                {step.person}
                <p className="font-semibold text-[#667085] text-sm">
                  {step.about}
                </p>
              </div>
            </div>
            <p className="pt-2">{step.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
