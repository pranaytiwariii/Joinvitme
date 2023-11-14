import React from "react";
import logo from "/Navbar/logo.jpg";
import { useState } from "react";
import menu from "/Navbar/menu1.svg";
import close1 from "/Navbar/close1.svg";
import whatsapp from "/Navbar/whatsapp.svg";

const navLink = [
  {
    id: 0,
    header: "Home",
    link: "/",
  },
  {
    id: 1,
    header: "Adventure Calendar",
    link: "/",
  },
  {
    id: 2,
    header: "Book Experience",
    link: "/",
  },
  {
    id: 3,
    header: "About Us",
    link: "/",
  },
  {
    id: 4,
    header: "Blogs",
    link: "/",
  },
];

export default function Navbar() {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => setToggle((prevToggle) => !prevToggle);
  const closeMenu = () => setToggle(false);

  // const handleScroll = () => {
  //   const section = document.getElementById("sponserSection");
  //   if (section) {
  //     section.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

  return (
    <>
      <div className="font-sans text-[#451c1c] mt-2">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 px-2 sm:px-8">
            {/* Logo */}
            <div className="flex items-center gap-3 rounded-2xl border border-white border-opacity-25">
              <img src={logo} alt="" className="h-12" />
              <a href="/" className="italic text-sm sm:text-lg">
                JOINVITHME
              </a>
            </div>
            {/* Navlinks */}
            <div className="hidden md:flex">
              <div className="text-base 2xl:text-lg ml-10 flex items-baseline space-x-2">
                {navLink.map((step) => (
                  <a
                    key={step.id}
                    id={step.id}
                    className="text-[#505052] hover:text-[#6941C6] text-center px-2 py-1 rounded-md text-md font-medium"
                    href={step.link}
                    rel="noreferrer"
                  >
                    {step.header}
                  </a>
                ))}
              </div>
            </div>

            <div className="hidden  md:flex gap-4 mt-2">
              <button className="rounded-xl px-4 py-2 border-2 border-gray-500 text-lg hover:opacity-70 transition duration-300 ease-in-out">
                <div className="flex gap-1.5 text-black">
                  {/* <img src={discord} alt="" /> */}
                  <a href="/" target="_blank" rel="noreferrer">
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
                <span className="sr-only">Open main menu</span>
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
            <div className="px-2 pt-1 pb-3 space-y-1 sm:px-3">
              {navLink.map((step) => (
                <a
                  key={step.id}
                  className="text-center cursor-pointer text-[#505052] hover:text-[#6941C6] block px-3 py-2 rounded-md text-base font-medium"
                  href={step.link}
                  target="_blank"
                  rel="noreferrer"
                  onClick={closeMenu}
                >
                  {step.header}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
