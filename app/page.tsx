import MainSection from "@/components/MainSection";

export type ArticleType = {
  id: number;
  title: string;
  description: string;
  cover: CoverType;
};

type CoverType = {
  url: string;
};

export default async function Home() {
  let articles: ArticleType[] = [];

  const url = "https://my-strapi-9n2k.onrender.com/api/articles?populate=*";

  try {
    const response = await fetch(url);
    const responseData = await response.json();
    articles = responseData.data;
  } catch (error) {
    console.error(error);
  }

  return (
    <main className="min-h-screen p-8">
      <span>why choose us</span>
      <h1>why we are different from others</h1>
      <p>
        Our services are designed to meet the unique needs of each client,
        providing tailored solutions that drive success. We focus on delivering
        high-quality results with a commitment to excellence and customer
        satisfaction.
      </p>
      <MainSection data={articles} />
    </main>
  );
}
