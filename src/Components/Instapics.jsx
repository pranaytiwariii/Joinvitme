import React from "react";
// import mail from '/Features1/cards/mail.svg'
// import zap from '/Features1/cards/zap.svg'
// import barchart from '/Features1/cards/bar-chart-2.svg'
// import arrow from '/HeroSection/arrow-right.svg'
// import insta1 from "/Instapic/one.png";
// import insta2 from "/Instapic/two.png";
// import { useState } from "react";

// const cardData = [
//   {
//     id: 0,
//     img: { insta1 },
//     header: "LAKESIDE HIKE",
//     discription:
//       "Venture into the great outdoors, where tails wag, paws roam, and hearts are set free. Our four-legged friend knows that the best adventures start at the edge of a tranquil lake. 💙🐾",
//     location: "Virar",
//   },
//   {
//     id: 1,
//     img: { insta2 },
//     header: "LAKESIDE HIKE",
//     discription:
//       "Venture into the great outdoors, where tails wag, paws roam, and hearts are set free. Our four-legged friend knows that the best adventures start at the edge of a tranquil lake. 💙🐾",
//     location: "Virar",
//   },
// ];

export default function Instapics() {
  return (
    <div>
      <section className="flex mx-2 md:mx-4 flex-col items-center gap-12 pt-24">
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
            <p className="text-xl text-center text-[#667085] sm:text-xl sm:px-12 lg:px-72">
              Powerful, self-serve product and growth analytics to help you
              convert, engage, and retain more users. Trusted by over 4,000
              startups.
            </p>
          </div>
        </div>

        {/* ----------------------image section---------------------- */}
        <div>
            {/* <img src={insta1} alt="" /> */}
          {/* {navLink.map((step) => (
            <div>
              key={step}
              <img src={cardData.img} alt="" />
            </div>
          ))} */}
        </div>
        <img src="/insta.png" alt="" />
      </section>
    </div>
  );
}
