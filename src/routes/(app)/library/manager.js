import { writable } from "svelte/store";
import { requestAnimeByKeyword } from "./manager";

export * from "./extractors/gogoanime";

export const popularAnimeStore = writable();
export const animeMoviesStore = writable();
export const searchedStore = writable();
