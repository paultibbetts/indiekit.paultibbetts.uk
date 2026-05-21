import { getDraftLine, getPublishedDate, getTags, getTextContent, getFirstValue } from "../lib/properties.js"
import { buildFrontMatter, formatTomlArray, formatTomlString } from "../lib/toml.js"

export function renderLike(properties) {
  const published = getPublishedDate(properties)
  const content = getTextContent(properties.content)
  const tags = getTags(properties)
  const likeOf = getFirstValue(properties["like-of"], properties.like_of, properties.likeOf)
  const title = getFirstValue(properties.name, properties.references?.[likeOf]?.name, "")

  const frontMatter = buildFrontMatter([
    formatTomlString("date", published),
    getDraftLine(properties),
    formatTomlString("title", title),
    formatTomlString("like_of", likeOf),
    formatTomlArray("tags", tags),
  ])

  return `${frontMatter}\n${content}\n`
}
