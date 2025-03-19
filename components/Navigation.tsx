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
    <nav className="flex items-center justify-between px-7 py-7">
      <Image src="/logo.svg" width={145} height={23} alt="logo" />
      <ul className="flex items-center justify-center gap-4">
        {navLinks.map(({ text, url }) => (
          <li key={text}>
            <a href={url}>{text}</a>
          </li>
        ))}
      </ul>
      <div></div>
      <div className="flex items-center gap-2">
        <Image width={20} height={15} alt="flag" src="/british-flag.svg" />
        <span>EN</span>
        <Image width={16} height={16} alt="flag" src="/down-arrow.svg" />
        <button>For Business</button>
      </div>
    </nav>
  );
}
