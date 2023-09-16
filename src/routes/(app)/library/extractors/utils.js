import { fetch, ResponseType } from "@tauri-apps/api/http";

/**
 *
 * @param {Element | null} element
 * @param {string} attr
 */
export function getAttribute(element, attr) {
  return element?.getAttribute(attr)?.trim();
}

/**
 *
 * @param {Element | null} element
 */
export function getTextContent(element) {
  return element?.textContent?.trim();
}

/**
 *
 * @param {string} text
 */
export function parseDOMFromString(text) {
  return new DOMParser().parseFromString(text, "text/html");
}

/**
 *
 * @param {string} url
 * @param {string} [baseUrl]
 * @param {Record<string, string>} [params]
 */
export async function requestPageAsText(url, baseUrl, params) {
  /** @type {URL} */
  let pageUrl;

  if (/^(http:|https:)/i.test(url)) {
    pageUrl = new URL(url);
  } else {
    if (!baseUrl) {
      throw new Error("Required base URL");
    }

    const searchParams = new URLSearchParams(params);
    pageUrl = new URL(url, baseUrl);
    pageUrl.search = searchParams.toString();
  }

  let html = "";

  try {
    const response = await fetch(pageUrl.toString(), {
      method: "GET",
      responseType: ResponseType.Text
    });

    html = response.data;
  } catch (err) {
    console.error(err);
  }

  return html;
}
