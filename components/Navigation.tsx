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
    <nav className="flex items-center justify-between px-14 py-4 font-semibold">
      <Image src="/logo.svg" width={145} height={23} alt="logo" />
      <ul className="flex items-center justify-center gap-9 xl:pl-[15rem]">
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
      <div></div>
      <div className="flex items-center gap-6">
        <button className="flex items-center gap-2">
          <Image width={20} height={15} alt="flag" src="/british-flag.svg" />
          <span>EN</span>
          <Image width={16} height={16} alt="flag" src="/down-arrow.svg" />
        </button>
        <button className="font-bold border-2 border-black rounded-lg px-4 py-2 hover:opacity-80">
          For Business
        </button>
      </div>
    </nav>
  );
}
