import React from "react";
import { notion } from "../api/notion";
import Image from "next/image";

export default function Stories({ stories }: any) {
  return (
    <section className="">
      <div className="grid place-items-center h-screen bg-black/0">
        <div className="grid lg:grid-cols-3 gap-4">
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
              <Image
                src={story.properties.Image.url}
                alt={""}
                width={400}
                height={400}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
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
