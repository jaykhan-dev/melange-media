import Image from "next/image";
import { Inter } from "next/font/google";
import { Client } from "@notionhq/client";
import { notion } from "./api/notion";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ stories }: any) {
  if (!stories) return <div>no stories</div>;
  //console.log(stories);
  return (
    <main className="grid place-items-center h-screen">
      <div>
        <h1>NOTION API + NEXT</h1>
        <div>
          {stories.map((story: any) => (
            <div key={story.id}>
              <h2 className="text-2xl text-green-500">
                {story.properties.Title.title.map((item: any) => (
                  <span key={item}>{item.plain_text}</span>
                ))}
              </h2>
              <p>
                {story.properties.Author.rich_text.map((item: any) => (
                  <span key={item}>{item.plain_text}</span>
                ))}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export async function getStaticProps() {
  const databaseId = process.env.NOTION_DATABASE_ID;
  const response = await notion.databases.query({
    database_id: `${databaseId}`,
  });
  console.log(response);
  return {
    props: {
      stories: response.results,
    },
    revalidate: 1,
  };
}
