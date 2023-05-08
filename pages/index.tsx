import Image from "next/image";
import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "/styles/backgrounds.module.css";
import { notion } from "./api/notion";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ stories }: any) {
  if (!stories) return <div>no stories</div>;
  //console.log(stories);
  return (
    <>
      <Head>
        <title>Melange Media</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="E-commerce" />
      </Head>
      <main id={styles.homeBg} className="">
        <div className="grid place-items-center h-screen bg-black/0">
          <div>
            <h1 className="lg:text-4xl font-bold">Melange Media</h1>
            <p>Storytelling galore</p>
          </div>
        </div>
      </main>
    </>
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
