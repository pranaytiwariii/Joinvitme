import React from "react";

const items = [
    {
      id: 1,
      photo: "/Footer/logo.png",
      person: "Pranay Tiwari",
      about:"2nd year computer science student at Tcet.",
      review:
        "At Gravity Team, we are on the mission to balance the supply and demand across crypto markets worldwide. We are a crypto native market maker founded by traders, developers, and innovators who are strong believers and supporters of the future of decentralization and digital assets.",
    },
    {
      id: 2,
      photo: "/Footer/logo.png",
      person: "Pranay Tiwari",
      about:"2nd year computer science student at Tcet.",
      review:
        "At Gravity Team, we are on the mission to balance the supply and demand across crypto markets worldwide. We are a crypto native market maker founded by traders, developers, and innovators who are strong believers and supporters of the future of decentralization and digital assets.",
    },
    {
      id: 3,
      photo: "/Footer/logo.png",
      person: "Pranay Tiwari",
      about:"2nd year computer science student at Tcet.",
      review:
        "At Gravity Team, we are on the mission to balance the supply and demand across crypto markets worldwide. We are a crypto native market maker founded by traders, developers, and innovators who are strong believers and supporters of the future of decentralization and digital assets.",
    },
  ];

export default function TestLayout() {
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
          <p className="text-xl text-center text-[#667085] sm:text-xl sm:px-12 lg:px-72">
            Powerful, self-serve product and growth analytics to help you
            convert, engage, and retain more users. Trusted by over 4,000
            startups.
          </p>
        </div>
      </div>

      <div className="flex">
        {items.map((step) => (
          <div key={step.id} id={step.id} className=" lg:w-1/3 pb-5 p-20 hover:bg-gray-100">
            <div className="flex text-lg font-bold">
              <img src={step.photo} className="h-16 pr-5 " alt="" />
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
