import Image from "next/image";

const navLinks = [
  {
    text: "Home",
    url: "#",
  },
  {
    text: "How it Works",
    url: "#",
  },
  {
    text: "Help & Support",
    url: "#",
  },
];

export default function Navigation() {
  return (
    <nav className="flex items-center justify-center px-6 lg:px-14 py-4 font-semibold">
      <div className="w-[min(100%,90rem)] flex items-center justify-between">
        <Image
          src="/logo.svg"
          width={145}
          height={23}
          alt="logo"
          className="w-28 lg:w-[145px] lg:h-23"
        />
        <ul className="items-center justify-center gap-9 hidden lg:flex">
          {navLinks.map(({ text, url }) => (
            <li key={text}>
              <a
                className="hover:opacity-80 hover:underline hover:underline-offset-8"
                href={url}
              >
                {text}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden lg:flex items-center gap-6">
          <button className="flex items-center gap-2">
            <Image width={20} height={15} alt="flag" src="/british-flag.svg" />
            <span>EN</span>
            <Image width={16} height={16} alt="flag" src="/down-arrow.svg" />
          </button>
          <button className="font-bold border-2 border-black rounded-lg px-4 py-2 hover:opacity-80">
            For Business
          </button>
        </div>
        <Image
          src="/hamburger.svg"
          width={45}
          height={45}
          alt="logo"
          className="flex lg:hidden w-9 lg:w-11"
        />
      </div>
    </nav>
  );
}
