import { getAttribute, getTextContent, parseDOMFromString, requestPageAsText } from "./utils";

const baseUrl = "https://gogoanime3.net/";

export async function requestPopularAnimeList() {
  const dom = parseDOMFromString(await requestPageAsText("/popular.html", baseUrl));

  let list = [];

  const listOfElements = dom.querySelectorAll(".main_body .last_episodes ul.items > li");

  for (let element of Array.from(listOfElements)) {
    let data = {};

    let info = {};
    info.title = getTextContent(element.querySelector("p.name > a"));
    info.image = getAttribute(element.querySelector(".img img"), "src");
    info.releaseDate = getTextContent(element.querySelector("p.released"));
    data.info = info;

    data.url = getAttribute(element.querySelector("p.name > a"), "href");

    list.push(data);
  }
  return list;
}
