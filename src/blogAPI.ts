import { Article } from "./types";

export const getAllArticles = async (): Promise<Article[]> => {
  const res = await fetch("http://localhost:3001/posts", { cache: "no-store" }); // SSR

  if (!res.ok) {
    throw new Error("Error from getAllArticles");
  }

  await new Promise((resolve) => setTimeout(resolve, 1500)); // fake delay

  const articles = await res.json();
  return articles;
};
