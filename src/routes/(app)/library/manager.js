import { writable } from "svelte/store";

export { requestPopularAnimeList } from "./extractors/gogoanime";

export const popularAnimeStore = writable();
