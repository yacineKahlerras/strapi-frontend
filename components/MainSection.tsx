import Image from "next/image";

const stars = ["full", "full", "full", "full", "half"];

export default function MainSection() {
  return (
    <div className="px-8 pt-14 bg-black h-[652px] overflow-y-hidden flex flex-col items-start text-white relative">
      {/* header */}
      <h1 className="text-[52px] font-bold">
        Fly stress-free, <br />
        We handle your bags
      </h1>

      {/* ratings */}
      <div className="flex items-center gap-5 mt-3 pb-5">
        <span>
          4.9/5 <small className="text-base opacity-80">Rating</small>
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
      <button className="bg-[#FDCD00] flex items-center justify-center text-lg font-bold gap-5 px-[24px] py-[18px] rounded-xl text-black mb-6">
        Book now
        <Image width={34} height={34} alt="star" src="/arrow-right.svg" />
      </button>
      <span>Starting from $25</span>

      <div className="bg-[#FDCD00] absolute right-0 top-0 w-[39%] h-full flex items-end justify-center pt-9">
        <Image width={391} height={590} src="/woman.png" alt="woman" />
        <Image
          className="absolute left-0 top-[2rem] -translate-x-1/2"
          width={279}
          height={436}
          src="/case.png"
          alt="case"
        />
      </div>
    </div>
  );
}
