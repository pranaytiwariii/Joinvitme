import { NavLink } from "react-router-dom";

const data = [
  {
    imgData: [
      {
        img: "/Footer/instagram.svg",
        link: "/",
      },
      {
        img: "/Footer/whatsapp.svg",
        link: "/",
      },
      {
        img: "/Footer/facebook.svg",
        link: "/",
      },
    ],
    linkData1: [
      {
        id:0,
        title: "Home",
        link: "/",
      },
      {
        id:1,
        title: "Contact",
        link: "/",
      },
      {
        id:2,
        title: "Book Experience",
        link: "/Book Experience",
      },
      {
        id:3,
        title: "About us",
        link: "/About Us",
      },
      {
        id:4,
        title: "Adventure Calendar",
        link: "/Adventure Calendar",
      },
      {id:5,
        title: "Blogs",
        link: "/Blogs",
      },
    ],
    addressData: [
      {
        title: "",
        address: "",
      },
    ],
  },
];

export default function Footer() {
  return (
    <div className="pt-16 text-white flex flex-col items-center gap-9 ">
      <div className="sm:px-16 px-8 w-full flex md:flex-row flex-col gap-9 justify-between">
        <div className="flex flex-col gap-10 items-start">
          <img className="h-20" src="Footer/logo.png" alt="logo" />
          <div className="flex flex-col justify-center items-start">
            <p className="text-black text-xl font-normal">
              JoinWithMe - get social's!
            </p>
            <div className="py-2 flex items-start gap-5 social-icons">
              {data.map((item) => {
                return item.imgData.map((value, i) => (
                  <a key={i} href={value.link} target="_blank">
                    <img
                      src={value.img}
                      alt="socials"
                      className="hover:scale-125 h-4 transition duration-300 ease-in-out"
                    />
                  </a>
                ));
              })}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 grid-rows-3 lg:gap-x-40 gap-x-28 text-[#ACB1FF] text-lg font-medium justify-items-start items-center">
          {data.map((item) => {
            return item.linkData1.map((value, i) => (
              <NavLink key={value.id} to={value.link}>
                
                {value.title}
              
              </NavLink>
            ));
          })}
        </div>
      </div>
      {/* <div className=" flex flex-col items-center gap-4 w-full">
        <div className="bg-white opacity-20 h-px w-full"></div>
        <p className="text-gray-500 text-base">igig</p>
      </div> */}
      <div >
        {/* <div className="text-black flex justify-between">
          <div>
            <img src="/Navbar/logo.png" className="h-8" alt="" />
          </div>
          <div>
            <a href="">Designed & Developed by Pranay Tiwari</a>
          </div>
          <div>All rights reserved </div>
        </div> */}
        <div className="bottom mt-6 mb-6 md:mb-8 flex gap-2 justify-between mx-2 md:mx-8 items-center">
        <div className="footer-logo text-black italic md:text-md md:font-semibold flex gap-1 items-center">
          {/* <img width={25} src="/FooterSection/l.svg" alt="" /> */}
          <h2>  JoinWitHMe</h2>
        </div>
        <div className="footer-text text-center text-gray-500">
          © Designed & Developed By Prany Tiwari. All rights reserved.
        </div>
      </div>
      </div>
    </div>
  );
}
