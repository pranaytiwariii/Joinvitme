import React from "react";

export default function About() {
  const JoinTeamGradient = [
    {
      id: 1,
      gradientClass:
        "bg-gradient-to-r from-blue-500/30 from-65% to-yellow-600/50",
      title: "Join",
      subTitle: "Gravity Team",
    },
  ];
  const data =[
    {
        imgData: [
            {
                id:0,
              img: "/Footer/instagram.svg",
              link: "/",
            },
            {
                id:1,
              img: "/Footer/whatsapp.svg",
              link: "/",
            },
            {
                id:2,
              img: "/Footer/facebook.svg",
              link: "/",
            },
          ],
    }
  ]
  return (
    <>
      <div className="relative flex flex-col min-h-screen md:flex-row text-black bg-white">
        <div className="flex flex-col items-center w-full md:w-1/2 mt-36">
          <div className="relative w-56 rounded-full h-28">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/25 from-70% to-yellow-600/50 rounded-full blur-xl"></div>
            <div className="z-10 flex flex-col h-full font-semibold text-center sm:text-left sm:font-medium ">
              <h2 className="text-3xl">Join</h2>
              <h2 className="mt-2 ml-2 text-3xl">With Me</h2>
            </div>
          </div>
        </div>
        <div className="w-full p-12 mt-2 mr-20 text-center md:w-1/2 sm:mt-20 sm:text-left">
          <p className="text-3xl">
            Your Gateway to Authentic Wilderness Experiences
          </p>
          <p className="pt-8 text-xl">
            We invite you to take the plunge and embark on your next camping
            journey with Joinvithme. Let us introduce you to the unfiltered side
            of life, where every sunrise is more vibrant, every starry night
            more enchanting, and every step forward is a step into the wild
            unknown. Contact us today, and together, we'll plan the camping trip
            of your dreams.
          </p>
          {/* {/* <div className="flex mt-5 "> */}
          <a href="#" className="flex mt-5 sm:text-xl text-start"> 
            Join us on Social'
            <img src="HeroSection/arrow-right.svg" alt="" />
          </a>
          
          <div className="w-40 sm:w-72 mt-3 sm:mt-5 h-0.5 bg-gradient-to-r from-blue-500 via-blue-500 to-yellow-600/50"></div>
          <div className="py-2 mt-4 flex items-start gap-5 social-icons">
              {data.map((item) => {
                return item.imgData.map((value, i) => (
                  <a key={value.id} href={value.link} target="_blank">
                    <img
                      src={value.img}
                      alt="socials"
                      className="hover:scale-125 h-8 transition duration-300 ease-in-out"
                    />
                  </a>
                ));
              })}
            </div>
            {/* </div> */}
        </div>
      </div>
    </>
  );
}
