import { getDraftLine, getPublishedDate, getTags, getTextContent, getFirstValue } from "../lib/properties.js"
import { buildFrontMatter, formatTomlArray, formatTomlString } from "../lib/toml.js"

export function renderArticle(properties) {
  const published = getPublishedDate(properties)
  const content = getTextContent(properties.content)
  const tags = getTags(properties)
  const title = getFirstValue(properties.name, "")

  const frontMatter = buildFrontMatter([
    formatTomlString("date", published),
    getDraftLine(properties),
    formatTomlString("title", title),
    formatTomlArray("tags", tags),
  ])

  return `${frontMatter}\n${content}\n`
}
