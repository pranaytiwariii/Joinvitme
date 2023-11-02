import image from "/HeroSection/img.png";

export default function Analytics() {
  return (
    <div>
      <div className=" m-[2rem] lg:m-[4rem] sm:px-20">
        <div className="flex flex-col gap-[0.75rem]  ">
          <h5 className="font-semibold text-[#6941C6] lg:text-lg leading-[1.5rem]">
            Travelers Point
          </h5>
          <h2 className="font-bold lg:font-semibold text-gray-900 text-[1.7rem] lg:text-[2.25rem] leading-[1.75rem] tracking-[-0.045rem] ">
            Build something great : We help to find your dream place
          </h2>
          <p className="font-normal lg:text-[1.25rem] lg:leading-[1.875rem] text-gray-500 sm:w-[75%] mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor rhoncus dolor purus non enim praesent elementum facilisis
            leo, vel fringilla est ullamcorper eget nulla facilisi
          </p>
        </div>
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
          <div className="flex gap-5">
            <div className="flex-1 flex justify-center content-center  md:basis-1/3  ">
              <img src={image} alt="" />
            </div>
            <div className="flex-1 flex justify-center content-center  md:basis-1/3  ">
              <img src={image} alt="" />
            </div>
            <div className="flex-1 flex justify-center content-center  md:basis-1/3  ">
              <img src={image} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
