import { fetch, ResponseType } from "@tauri-apps/api/http";

export async function load({ data, url }) {
  console.log(data);

  const keyword = url.searchParams.get("keyword") || "";
  const page = url.searchParams.get("page") || "1";

  /** @type {import("../types").SearchResult} */
  let result;

  const response = await fetch(`https://api.consumet.org/anime/gogoanime/${keyword}?page=${page}`, {
    method: "GET",
    responseType: ResponseType.JSON
  });
  result = response.data;

  return { ...result };
}
