const { Client } = require("@notionhq/client");

export const notion = new Client({ auth: process.env.NOTION_TOKEN });

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: any, res: any) => {
  const response = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID,
  });

  res.status(200).json({ response });
};
