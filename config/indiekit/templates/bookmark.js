import { getDraftLine, getPublishedDate, getTags, getTextContent, getFirstValue } from "../lib/properties.js"
import { buildFrontMatter, formatTomlArray, formatTomlString } from "../lib/toml.js"

export function renderBookmark(properties) {
  const published = getPublishedDate(properties)
  const content = getTextContent(properties.content)
  const tags = getTags(properties)
  const bookmarkOf = getFirstValue(properties["bookmark-of"], properties.bookmark_of, properties.bookmarkOf)
  const title = getFirstValue(properties.name, properties.references?.[bookmarkOf]?.name, "")

  const frontMatter = buildFrontMatter([
    formatTomlString("date", published),
    getDraftLine(properties),
    formatTomlString("title", title),
    formatTomlString("bookmark_of", bookmarkOf),
    formatTomlArray("tags", tags),
  ])

  return `${frontMatter}\n${content}\n`
}
