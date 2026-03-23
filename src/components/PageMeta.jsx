import { useEffect } from "react";
import { SITE_NAME, SOCIAL_IMAGE_PATH } from "../data/portfolioContent.js";

const DEFAULT_TITLE = `${SITE_NAME} | Portfólio`;
const DEFAULT_DESCRIPTION =
  "Portfólio de Hugo Henrique com apresentação pessoal, projetos, formações, certificados e contato.";

function ensureMetaTag(selector, attributeName, attributeValue) {
  let tag = document.head.querySelector(selector);

  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attributeName, attributeValue);
    document.head.append(tag);
  }

  return tag;
}

function ensureLinkTag(selector, rel) {
  let tag = document.head.querySelector(selector);

  if (!tag) {
    tag = document.createElement("link");
    tag.setAttribute("rel", rel);
    document.head.append(tag);
  }

  return tag;
}

function ensureScriptTag(id) {
  let tag = document.head.querySelector(`#${id}`);

  if (!tag) {
    tag = document.createElement("script");
    tag.id = id;
    tag.type = "application/ld+json";
    document.head.append(tag);
  }

  return tag;
}

export default function PageMeta({
  title,
  description = DEFAULT_DESCRIPTION,
  image = SOCIAL_IMAGE_PATH,
  pathname,
  noIndex = false,
  structuredData,
}) {
  useEffect(() => {
    const pageTitle = title ? `${title} | ${SITE_NAME}` : DEFAULT_TITLE;
    const origin = window.location.origin;
    const resolvedPathname = pathname ?? window.location.pathname;
    const canonicalUrl = new URL(resolvedPathname, origin).toString();
    const imageUrl = image ? new URL(image, origin).toString() : "";

    document.title = pageTitle;

    ensureMetaTag('meta[name="description"]', "name", "description").setAttribute(
      "content",
      description,
    );
    ensureMetaTag('meta[property="og:title"]', "property", "og:title").setAttribute(
      "content",
      pageTitle,
    );
    ensureMetaTag(
      'meta[property="og:description"]',
      "property",
      "og:description",
    ).setAttribute("content", description);
    ensureMetaTag('meta[property="og:url"]', "property", "og:url").setAttribute(
      "content",
      canonicalUrl,
    );
    ensureMetaTag('meta[property="og:image"]', "property", "og:image").setAttribute(
      "content",
      imageUrl,
    );
    ensureMetaTag('meta[name="twitter:title"]', "name", "twitter:title").setAttribute(
      "content",
      pageTitle,
    );
    ensureMetaTag(
      'meta[name="twitter:description"]',
      "name",
      "twitter:description",
    ).setAttribute("content", description);
    ensureMetaTag('meta[name="twitter:image"]', "name", "twitter:image").setAttribute(
      "content",
      imageUrl,
    );
    ensureMetaTag('meta[name="robots"]', "name", "robots").setAttribute(
      "content",
      noIndex ? "noindex, nofollow" : "index, follow",
    );

    ensureLinkTag('link[rel="canonical"]', "canonical").setAttribute(
      "href",
      canonicalUrl,
    );

    if (structuredData) {
      ensureScriptTag("page-structured-data").textContent = JSON.stringify(
        structuredData,
      );
    } else {
      const tag = document.head.querySelector("#page-structured-data");

      if (tag) {
        tag.remove();
      }
    }
  }, [description, image, noIndex, pathname, structuredData, title]);

  return null;
}
