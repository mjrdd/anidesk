import { getAttribute, getTextContent, parseDOMFromString, requestPageAsText } from "./utils";

const baseUrl = "https://gogoanime3.net/";

/**
 *
 * @param {string} html
 */
function parseAnimeList(html) {
  const dom = parseDOMFromString(html)
  const listOfElements = dom.querySelectorAll(".main_body .last_episodes ul.items > li");

  const animeList = [];

  for (let element of Array.from(listOfElements)) {
    let data = {};
    data.url = getAttribute(element.querySelector("p.name > a"), "href");

    let info = {};
    info.title = getTextContent(element.querySelector("p.name > a"));
    info.image = getAttribute(element.querySelector(".img img"), "src");
    info.releaseDate = getTextContent(element.querySelector("p.released"));
    data.info = info;


    animeList.push(data);
  }

  return animeList;
}

export async function requestPopularAnimeList() {

  return parseAnimeList(await requestPageAsText("/popular.html", baseUrl));
}

export async function requestAnimeMoviesList() {
  return parseAnimeList(await requestPageAsText("/anime-movies.html", baseUrl))
}
