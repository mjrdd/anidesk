import { writable } from "svelte/store";

export * from "./extractors/gogoanime";

export const popularAnimeStore = writable();
export const animeMoviesStore = writable()
