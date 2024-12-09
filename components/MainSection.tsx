"use client";
import { ArticleType } from "@/app/page";
import Image from "next/image";
import { useState } from "react";

export default function MainSection({ data }: { data: ArticleType[] }) {
  const [activeArticle] = useState(0);
  const currentArticle = data[activeArticle];

  return (
    <article className="mt-36">
      {/* left section */}
      <div>
        <div>
          <h2>{currentArticle.title}</h2>
          <p>{currentArticle.description}</p>
        </div>
        <div>
          <Image
            alt={currentArticle.title}
            width={200}
            height={200}
            src={`https://my-strapi-9n2k.onrender.com${currentArticle.cover.url}`}
          />
        </div>
      </div>

      {/* right section */}
      <div></div>
    </article>
  );
}
