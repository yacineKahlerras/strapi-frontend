import Image from "next/image";

const stars = ["full", "full", "full", "full", "half"];

export default function MainSection() {
  return (
    <div>
      <h1>
        Fly stress-free, <br />
        We handle your bags
      </h1>
      <div>
        <span>
          4.9/5 <small>Rating</small>
        </span>
        <ul>
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
      <button>Book now </button>
    </div>
  );
}
