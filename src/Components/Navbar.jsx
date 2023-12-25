import React from "react";
import logo from "/Navbar/logo.jpg";
import { useState } from "react";
import menu from "/Navbar/menu1.svg";
import close1 from "/Navbar/close1.svg";
import whatsapp from "/Navbar/whatsapp.svg";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import up from "/Navbar/up.png";
import down from "/Navbar/down.png";

const navLink = [
  {
    id: 0,
    header: "Home",
    link: "/",
  },
  {
    id: 1,
    header: "Adventure Calendar",
    link: "/Adventure Calendar",
  },
  {
    id: 2,
    header: "Types of camps",
    ul1:"Lakeside Camping",
    ul2: "River Camping",
    ul3: "Mountain top camping",
    link2: "/Riverside camping",
    link3: "/Mountaintop camping",
    link1: "/Lakeside camping",
    up: "/Navbar/up.png",
    down: "/Navbar/down.png",
  },
  {
    id: 3,
    header: "Book Experience",
    link: "/Book Experience",
  },
  {
    id: 4,
    header: "About Us",
    link: "/About Us",
  },
  // {
  //   id: 4,
  //   header: "Blogs",
  //   link: "/Blogs",
  // },
];

export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  const handleClick = () => setToggle((prevToggle) => !prevToggle);
  const closeMenu = () => setToggle(false);

  const [navClick, setnavClick] = useState(false);
  const handleNav = () => setnavClick((prevNavClick) => !prevNavClick);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 3,
          type: "spring",
          delay: 0.5,
        }}
        className="font-sans z-20 text-[#451c1c] mt-2"
      >
        <div className=" z-30 pt-4 pb-0 sm:px-6 ">
          <div className="flex items-center justify-between h-16 px-2 ">
            {/* Logo */}
            <div className="flex items-center gap-3 rounded-2xl border border-white border-opacity-25">
              <img src={logo} alt="" className="h-12" />
              <a href="/" className="italic text-sm sm:text-lg">
                JOIN WITH ME
              </a>
            </div>
            {/* Navlinks */}
            <div className="hidden md:flex">
              <div className="text-base 2xl:text-lg ml-10 flex items-baseline space-x-2">
                {navLink.map((step) => (
                  <NavLink
                    key={step.id}
                    to={step.link}
                    className="text-[#505052] hover:text-[#6941C6] text-center px-2 py-1 rounded-md text-md font-medium"
                  >
                    {/* {step.header} */}
                    <ol className="text-[#505052] text-center px-2 py-10 rounded-md text-md font-medium">
                      <button onClick={handleNav} className="flex">
                        {step.header}
                        {navClick ? (
                          <img className="h-5" src={step.up} alt="" />
                        ) : (
                          <img className="h-6" src={step.down} alt="" />
                        )}
                      </button>
                      {navClick && (
                        <div className="text-sm flex flex-col">
                          <NavLink className="hover:text-[#6941C6]" to="/Lakeside camping">
                            {step.ul1}
                          </NavLink>
                          <NavLink className="hover:text-[#6941C6]" to="/Riverside camping">
                            {step.ul2}
                          </NavLink>
                          <NavLink className="hover:text-[#6941C6]" to="/Mountaintop camping">
                            {step.ul3}
                          </NavLink>
                        </div>
                      )}
                    </ol>
                  </NavLink>
                ))}
              </div>
            </div>
            {/* lastlinks */}
            <div className="hidden  md:flex gap-4 mt-2">
              <button className="rounded-xl px-4 py-2 border-2 border-gray-500 text-lg hover:opacity-70 transition duration-300 ease-in-out">
                <div className="flex gap-1.5 text-black">
                  {/* <img src={discord} alt="" /> */}
                  <a
                    href="https://chat.whatsapp.com/L1RvnPmuVSGGDdFLbenzF1"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Join Us
                  </a>
                </div>
              </button>
              <button className="text-lg flex px-4 py-2 text-black hover:text-white rounded-lg mt-0`bg-[#4C58FE] hover:bg-[#6941C6] transition duration-300 ease-in-out">
                <img
                  src={whatsapp}
                  className="h-6 flex gap-10 items-center"
                  alt=""
                />
                <a href="/" target="_blank" rel="noreferrer">
                  Contact
                </a>
              </button>
            </div>

            {/* Hamburger */}
            <div className="-mr-2 flex md:hidden">
              <button
                type="button"
                onClick={handleClick}
                className="inline-flex items-center justify-center p-2 rounded-lg text-white hover:ring-white focus:outline-none focus:ring-2 focus:rig-offset-2 focus:ring-offset-white focus:ring-white"
              >
                <span className="sr-only text-black">Open main menu</span>
                {toggle ? (
                  <img className="h-8 w-8" src={close1} alt="" />
                ) : (
                  <img className="h-8 w-8" src={menu} alt="" />
                )}
              </button>
            </div>
          </div>
        </div>
        {/* Mobile Nav */}
        {toggle && (
          <div className="flex flex-col md:hidden">
              <ol className="text-[#505052]  px-2 py-1 rounded-md text-md font-medium">
                <button onClick={handleNav} className="flex pl-[30%] text-center">
                  <p className="">Types Of Camps</p>
                  {navClick ? (
                    <img className="h-5" src={up} alt="" />
                  ) : (
                    <img className="h-6" src={down} alt="" />
                  )}
                </button>
                {navClick && (
                  <div className="flex flex-col text-center">
                    <NavLink className="hover:text-[#6941C6]" to="/Lakeside camping">
                      Lake side camping
                    </NavLink>
                    <NavLink className="hover:text-[#6941C6]" to="/Riverside camping">
                      river side camping
                    </NavLink>
                    <NavLink className="hover:text-[#6941C6]" to="/Mountaintop camping">
                        Mountain Top Camping 
                    </NavLink>
                  </div>
                )}
              </ol>
            <div className="px-2 pt-1 pb-3 space-y-1 sm:px-3">
              {navLink.map((step) => (
                <NavLink
                  key={step.id}
                  to={step.link}
                  className="text-center cursor-pointer text-[#505052] hover:text-[#6941C6] block px-3 py-2 rounded-md text-base font-medium"
                >
                  {step.header}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </motion.div>
    </>
  );
}
