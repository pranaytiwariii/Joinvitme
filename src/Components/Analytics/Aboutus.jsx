import React from "react";
import Hall from "/2-section/image.png";
import discount from "/2-section/discount.png";
import dot from "/2-section/dot.svg";
import element from "/Elements.svg";

export default function Aboutus() {
  return (
    <div className="sm:flex px-8 py-4 sm:gap-10 md:gap-20 justify-center text-white md:py-10 sm:px-12 md:flex-row md:px-20 lg:px-28 ">
      <div className="relative">
        <img className="w-520px h-460px" src={Hall} />
      </div>
      {/* <div className="absolute pl-10">
        <img className="h-24 w-24" src={discount} alt="" />
      </div> */}
      <div className="gap-10">
        <span className="">
          <div className="flex gap-x-3">
            {/* <img src={dot} alt="" /> */}
            <h1 className="text-[#295943] text-4xl font-euclid-bold">
              About us
            </h1>
          </div>
          <div className="max-w-sm p-2 ">
            <div className="my-4 text-[#3D3E48] text-5xl font-gobold">
              We help to find your dream place
            </div>
            <div className="text-black">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor rhoncus dolor purus non enim praesent elementum
              facilisis leo, vel fringilla est ullamcorper eget nulla facilisi
            </div>
          </div>
          <div>
            <button className="py-3 absolute font-medium my-4 text-black rounded-full px-9 bg-[#43B97F] font-euclid-bold">
              Become a Member
            </button>
          </div>
          <div>
            <img className="ml-52 mt-10 relative" src={element} />
          </div>
        </span>
      </div>
    </div>
  );
}
