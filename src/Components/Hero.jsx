import React from "react";
// import background from "/Hero/Background.png";
import logo from "/Hero/plainlogo.png";

export default function Hero() {
  return (
    <div className="h-full">
      <div className="bg-[url('/Hero/Background.png')] bg-cover flex relative">
        <div className="flex-col justify-cdenter lg:pb-20">
          <div className="">
            <img src={logo} alt="" className="h-24 sm:h-40 lg:h-80 " />
          </div>
          <div className="flex-col text-center p-3 sm:p-7">
            <h1 className="text-2xl sm:text-3xl md:text-5xl text-white">
              Explore the world with a smile
            </h1>
            <p className=" text-white text-center italic text-sm sm:text-lg md:text-2xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor rhoncus dolor purus non enim praesent elementum
              facilisis leo,
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
