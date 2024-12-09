"use client";
import { ArticleType } from "@/app/page";
import Image from "next/image";
import { useState } from "react";

export default function MainSection({ data }: { data: ArticleType[] }) {
  const [activeArticle] = useState(0);
  const currentArticle = data[activeArticle];

  return (
    <article className="mt-36 flex justify-between items-start">
      {/* left section */}
      <div className="flex items-center justify-center">
        <div className="bg-red-600 z-10 bg-opacity-60 rounded-full w-[15rem] h-[15rem] flex flex-col justify-center items-start text-left p-6">
          <h2>{currentArticle.title}</h2>
          <p>{currentArticle.description}</p>
        </div>
        <div className="relative -translate-x-1/3 w-[15rem] h-[15rem] rounded-full flex items-center justify-center overflow-hidden">
          <Image
            alt={currentArticle.title}
            width={200}
            height={200}
            src={`https://my-strapi-9n2k.onrender.com${currentArticle.cover.url}`}
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>

      {/* right section */}
      <ul className="flex flex-col gap-1 items-center">
        {data.map((artc) => {
          return (
            <li key={artc.title}>
              <span>{"<"}</span>
              <span>{artc.title}</span>
            </li>
          );
        })}
      </ul>
    </article>
  );
}
