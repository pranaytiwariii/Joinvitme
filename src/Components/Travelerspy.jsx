import React from "react";
import Hero from "/Hero/Background.png";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

export default function Travelerspy() {
  return (
    <section className=" flex mx-2 md:mx-4 flex-col pt-3 items-center gap-12 ">
      <div className="top-container">
        <NavLink to="/Adventure Calendar">
          <motion.div
            initial={{ x: "-7rem", opacity: 0 }}
            animate={{ x: "0", opacity: 1 }}
            transition={{
              duration: 4,
              type: "spring",
              delay: 0.2,
            }}
            className="badge-section text-xs m-auto text-[#6941C6] flex gap-3 pt-1 pr-1 pb-1 pl-1 rounded-2xl w-max items-center justify-center bg-gray-100"
          >
            <p className="label-1 bg-white pl-1 pr-1 justify-start rounded-2xl">
              New Journey
            </p>
            <div className="label-2 flex gap-1">
              <p>Checkout the Event Calendar</p>
              <img src="HeroSection/arrow-right.svg" alt="arrow-right" />
            </div>
          </motion.div>
        </NavLink>
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
          <h1 className="text-2xl md:text-4xl  text-center flex-wrap">
            Explore the world with a smile
          </h1>
          <p className="text-gray-500 text-sm md:text-base  max-w-sm lg:max-w-lg overflow-hidden text-center">
            Welcome to Joinvithme, where we are passionate about connecting you
            with the untamed beauty of the great outdoors. 
          </p>
        </motion.div>
        <div className="btn-section flex justify-center gap-6 mt-8">
          <motion.button
            initial={{ x: "-7rem", opacity: 0 }}
            animate={{ x: "0", opacity: 1 }}
            transition={{
              duration: 4,
              type: "spring",
              delay: 0.5,
            }}
            className="flex px-1 md:px-2 items-center gap-2 border rounded-md"
          >
            <img
              width={30}
              src="HeroSection/play-circle.svg"
              alt="play-circle"
            />
            Book a private Experience
          </motion.button>
          <motion.button
            initial={{ x: "7rem", opacity: 0 }}
            animate={{ x: "0", opacity: 1 }}
            transition={{
              duration: 4,
              type: "spring",
              delay: 0.5,
            }}
            className="px-2 md:px-3 rounded-md bg-[#7F56D9] p-2 text-gray-50"
          >
            Join a Open Group Experience
          </motion.button>
        </div>
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
        {/* <p className="text-center text-sm mt-6 md:mt-10 text-gray-500">
          social's
        </p>
        <div className="company-section flex flex-col md:flex-row justify-between items-center md:mx-4 lg:mx-20 mt-8 mb-6 gap-8 md:gap-1">
          <div className=" flex items-center gap-4 md:gap-2 company-1">
            <div className="img-part">
              <img
                className="md:w-7"
                width={40}
                src="HeroSection/layers.svg"
                alt=""
              />
            </div>
            <div className="text-part font-semibold text-2xl md:text-lg">
              Layers
            </div>
          </div>
          <div className=" flex items-center gap-4 md:gap-2 company-2">
            <div className="img-part">
              <img
                className="md:w-7"
                width={30}
                src="HeroSection/sisyphus.svg"
                alt=""
              />
            </div>
            <div className="text-part font-semibold text-2xl md:text-lg">
              Sisyphus
            </div>
          </div>
          <div className=" flex items-center gap-4 md:gap-2 company-3">
            <div className="img-part">
              <img
                className="md:w-7"
                width={40}
                src="HeroSection/circooles.svg"
                alt=""
              />
            </div>
            <div className="text-part font-semibold  text-2xl md:text-lg">
              Circooles
            </div>
          </div>
          <div className=" flex items-center gap-4 md:gap-2 company-4">
            <div className="img-part">
              <img
                className="md:w-7"
                width={40}
                src="HeroSection/catalog.svg"
                alt=""
              />
            </div>
            <div className="text-part font-semibold  text-2xl md:text-lg">
              Catalog
            </div>
          </div>
          <div className=" flex items-center gap-4 md:gap-2 company-5">
            <div className="img-part">
              <img
                className="md:w-8"
                width={40}
                src="HeroSection/quotient.svg"
                alt=""
              />
            </div>
            <div className="text-part font-semibold  text-2xl md:text-lg">
              Quotient
            </div>
          </div>
        </div> */}
      </motion.div>
    </section>
  );
}
