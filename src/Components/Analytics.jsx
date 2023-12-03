import React, { useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { motion } from "framer-motion";

export default function Analytics() {
  return (
    <div>
      <div className=" m-[2rem] lg:m-[4rem] sm:px-20">
        <motion.div
          initial={{ x: "-7rem", opacity: 0 }}
          animate={{ x: "0", opacity: 1 }}
          transition={{
            duration: 4,
            type: "spring",
            delay: 0.5,
          }}
          className="flex flex-col gap-[0.75rem]  "
        >
          <h5 className="font-semibold text-[#6941C6] lg:text-lg leading-[1.5rem]">
            Our Beginnings
          </h5>
          <h2 className="font-bold lg:font-semibold text-gray-900 text-[1.7rem] lg:text-[2.25rem] leading-[1.75rem] tracking-[-0.045rem] ">
            In the year 2022,
          </h2>
          <p className="font-normal lg:text-[1.25rem] lg:leading-[1.875rem] text-gray-500 sm:w-[75%] mt-0">
            Joinvithme was born out of a desire to fill a void in the travel
            industry. We observed a lack of authentic and raw camping trips that
            offered a true experience of living in the wild. Our founder, driven
            by a shared love for the wilderness, set out to create an
            alternative - camping experiences that were uncommercialized,
            unspoiled, and unforgettable.
          </p>
        </motion.div>
        <motion.div
          initial={{ x: "7rem", opacity: 0 }}
          animate={{ x: "0", opacity: 1 }}
          transition={{
            duration: 4,
            type: "spring",
            delay: 0.5,
          }}
          className="flex mt-6 flex-col text-end gap-[0.75rem]"
        >
          <h5 className="font-semibold text-[#6941C6] lg:text-lg leading-[1.5rem]">
            Our Philosophy
          </h5>
          <h2 className="font-bold lg:font-semibold text-gray-900 text-[1.7rem] lg:text-[2.25rem] leading-[1.75rem] tracking-[-0.045rem] ">
            Build something great : We help to find your dream place
          </h2>
          <p className="ml-[25%] text-gray-500 font-normal lg:text-[1.25rem] lg:leading-[1.875rem]">
            At Joinvithme, we firmly believe that a journey into nature is more
            than just an escape; it's an opportunity to connect with nature,
            with yourself, and with like-minded adventurers. We want you to feel
            the pulse of the wild, experience the thrill of the unknown, and
            savor the raw beauty of untouched landscapes.
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
          className="flex flex- mt-6 gap-[0.75rem]  "
        >
          <h5 className="font-semibold text-[#6941C6] lg:text-lg leading-[1.5rem]">
            <div className="flex flex-col gap-[0.75rem]  ">
              <h5 className="font-semibold text-[#6941C6] lg:text-lg leading-[1.5rem]">
                Our Mission
              </h5>
              <h2 className="font-bold lg:font-semibold text-gray-900 text-[1.7rem] lg:text-[2.25rem] leading-[1.75rem] tracking-[-0.045rem] mt-2 ">
                Our mission is to curate camping experiences that
              </h2>
              <p className="font-normal lg:text-[1.25rem] lg:leading-[1.875rem] text-gray-500 sm:w-[75%] mt-0">
                will stay with you long after the embers of the campfire have
                faded. We aim to inspire, challenge, and transform you through
                every expedition we undertake. Our team is dedicated to sharing
                our knowledge and skills, guiding you through every aspect of
                your camping journey - from meticulous planning and expert
                packing to the art of setting up camp.
              </p>
            </div>
          </h5>
        </motion.div>
        <div className="flex-col  content-center justify-center gap-x-[6rem] my-[3rem] xl:my-[4rem] ">
          <div className="grid grid-cols-1 self-center justify-center sm:grid-cols-2 gap-y-[2rem] max-[990px]:gap-x-[6rem]  md:basis-2/3 content-center justify-self-center  ">
            <div className="flex flex-col">
              <p className="text-center text-violet-500 text-6xl font-semibold leading-[6rem] ">
                10K
              </p>
              <h2 className=" text-center text-gray-900 text-lg font-medium leading-7">
                Experience deleivered
              </h2>
              <p className="text-center text-gray-500 text-base font-normal leading-normal">
                Our app has been downloaded over 10k times.
              </p>
            </div>
            {/* <div className="flex flex-col">
              <p className="text-center text-violet-500 text-6xl font-semibold leading-[6rem] ">
                4,000+
              </p>
              <h2 className=" text-center text-gray-900 text-lg font-medium leading-7">
                Global Customers
              </h2>
              <p className="text-center text-gray-500 text-base font-normal leading-normal">
                We’ve helped over 4,000 amazing global companies.
              </p>
            </div>
            <div className="flex flex-col">
              <p className="text-center text-violet-500 text-6xl font-semibold leading-[6rem] ">
                10K
              </p>
              <h2 className=" text-center text-gray-900 text-lg font-medium leading-7">
                Global Downloads
              </h2>
              <p className="text-center text-gray-500 text-base font-normal leading-normal">
                Our app has been downloaded over 10k times.
              </p>
            </div> */}
            <div className="flex flex-col">
              <p className="text-center text-violet-500 text-6xl font-semibold leading-[6rem] ">
                200+
              </p>
              <h2 className=" text-center text-gray-900 text-lg font-medium leading-7">
                5-star reviews
              </h2>
              <p className="text-center text-gray-500 text-base font-normal leading-normal">
                We’re proud of our 5-star rating with over 200 reviews.
              </p>
            </div>
          </div>
          <div className="mt-5 sm:flex p-2 gap-5">
            <div className="flex justify-center content-center md:basis-1/3 pb-2  ">
              <img src="instapic/5.jpg" alt="" />
            </div>
            <div className="flex justify-center content-center  md:basis-1/3 pb-2  ">
              <img src="instapic/7.jpg" alt="" />
            </div>
            <div className=" flex justify-center content-center  md:basis-1/3 pb-2  ">
              <img src="instapic/9.jpg" alt="" />
            </div>
          </div>
        </div>
        {/* <h2 className="font-bold lg:font-semibold text-gray-900 text-[1.7rem] lg:text-[2.25rem] leading-[1.75rem] tracking-[-0.045rem] ">
          In the year 2022,
        </h2>
        <p className="font-normal lg:text-[1.25rem] lg:leading-[1.875rem] text-gray-500 sm:w-[75%] mt-0">
          Joinvithme was born out of a desire to fill a void in the travel
          industry. We observed a lack of authentic and raw camping trips that
          offered a true experience of living in the wild. Our founder, driven
          by a shared love for the wilderness, set out to create an alternative
          - camping experiences that were uncommercialized, unspoiled, and
          unforgettable.
        </p> */}
      </div>
    </div>
  );
}
