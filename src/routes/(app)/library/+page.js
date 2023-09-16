import { fetch, ResponseType } from "@tauri-apps/api/http";

export async function load() {
  async function recentEpisodes() {
    const response = await fetch("https://api.consumet.org/anime/gogoanime/recent-episodes", {
      method: "GET",
      responseType: ResponseType.JSON
    });

    return response.data;
  }

  async function topAiring() {
    const response = await fetch("https://api.consumet.org/anime/gogoanime/top-airing", {
      method: "GET",
      responseType: ResponseType.JSON
    });

    return response.data;
  }

  return {
    recentEpisodes: recentEpisodes(),
    topAiring: topAiring()
  };
}
