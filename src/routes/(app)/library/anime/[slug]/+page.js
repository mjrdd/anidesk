import { fetch, ResponseType } from "@tauri-apps/api/http";

export async function load({ params }) {
  /** @type {import('../../types').AnimeInfo} */
  let info;

  try {
    const response = await fetch(`https://api.consumet.org/anime/gogoanime/info/${params.slug}`, {
      method: "GET",
      responseType: ResponseType.JSON
    });

    info = response.data;
    return { info };
  } catch (err) {
    console.error(err);
  }
}
