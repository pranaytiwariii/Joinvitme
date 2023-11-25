
const cardData = [
  {
    id: 0,
    img: "/instapic/one.png ",
    header: "LAKESIDE HIKE",
    discription:
      "Venture into the great outdoors, where tails wag, paws roam, and hearts are set free. Our four-legged friend knows that the best adventures start at the edge of a tranquil lake. 💙🐾",
    location: "Virar",
  },
  {
    id: 1,
    img: "/Advanture/karjat.jpg",
    header: "LAKESIDE HIKE",
    discription:
      "Venture into the great outdoors, where tails wag, paws roam, and hearts are set free. Our four-legged friend knows that the best adventures start at the edge of a tranquil lake. 💙🐾",
    location: "Virar",
  },
];

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
        <div></div>
        <div className="flex flex-wrap justify-center w-40 gap-5">
          {cardData.map((index) => (
            <div
              key={index.id}
              className="bg-[#F9F5FF] text-clip border-2 rounded-md border-purple-500 p-5 "
            >
              <img src={index.img} alt="" />
              <h1 className="text-[#6941C6] text-xl font-bold">
                {index.header}
              </h1>
              <div className="w-80 text-[#667085]">
                <p>{index.discription}</p>
                <p className="text-[#6941C6] text-base">{index.location}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
