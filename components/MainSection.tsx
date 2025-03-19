import Image from "next/image";

const stars = ["full", "full", "full", "full", "half"];

export default function MainSection() {
  return (
    <div className="w-full px-8 pl-20 pt-14 bg-black h-[652px] overflow-hidden flex flex-col items-start text-white relative rounded-b-[2.5rem]">
      {/* header */}
      <h1 className="text-[52px] font-bold font-helvetica pt-12">
        Fly stress-free, <br />
        We handle your bags
      </h1>

      {/* ratings */}
      <div className="flex items-center gap-5 mt-3 pb-7 font-semibold">
        <span>
          4.9/5{" "}
          <small className="text-base opacity-80 font-light">Rating</small>
        </span>
        <ul className="flex">
          {stars.map((s) => (
            <li>
              <Image
                width={15.27}
                height={15.27}
                alt="star"
                src={`/${s}-star.svg`}
              />
            </li>
          ))}
        </ul>
        <span>Trustpilot</span>
      </div>

      {/* cto */}
      <button className="bg-[#FDCD00] hover:bg-[#fdcf00e1] flex items-center justify-center text-lg font-bold gap-5 px-[40px] py-[18px] rounded-xl text-black mb-6">
        Book now
        <Image width={34} height={34} alt="star" src="/arrow-right.svg" />
      </button>
      <span className="opacity-70 font-semibold text-lg pl-8">
        Starting from $25
      </span>

      <div className="bg-[#FDCD00] absolute right-0 top-0 w-[39%] h-full flex items-end justify-start pl-32 pt-9">
        <Image width={391} height={590} src="/woman.png" alt="woman" />
        <Image
          className="absolute left-0 bottom-0 xl:top-[2rem] -translate-x-1/2"
          width={279}
          height={436}
          src="/case.png"
          alt="case"
        />
      </div>
      <div className="opacity-[0.035] bg-white w-16 aspect-square absolute bottom-0 left-[40%]"></div>
      <div className="opacity-[0.035] bg-white w-16 aspect-square absolute bottom-[3rem] left-[1.5rem]"></div>
      <div className="opacity-[0.035] bg-white w-16 aspect-square absolute top-[5rem] left-[3.5rem]"></div>
      <div className="opacity-[0.035] bg-white w-16 aspect-square absolute top-[0rem] left-[20%]"></div>
      <div className="opacity-[0.035] bg-white w-32 h-16 absolute bottom-[0rem] left-[10%]"></div>
    </div>
  );
}
