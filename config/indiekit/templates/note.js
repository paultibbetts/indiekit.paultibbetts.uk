import { hhmmss } from "../lib/dates.js"
import { getDraftLine, getPublishedDate, getTags, getTextContent } from "../lib/properties.js"
import { buildFrontMatter, formatTomlArray, formatTomlString } from "../lib/toml.js"

export function renderNote(properties) {
  const published = getPublishedDate(properties)
  const content = getTextContent(properties.content)
  const tags = getTags(properties)

  // Indiekit normalises slug before postTemplate runs. There is no clean
  // built-in way here to distinguish an explicit mp-slug from the fallback
  // random 5-character slug, so notes currently fall back to HHMMSS.
  const frontMatter = buildFrontMatter([
    formatTomlString("date", published),
    getDraftLine(properties),
    formatTomlString("title", ""),
    formatTomlString("slug", hhmmss(published)),
    formatTomlArray("tags", tags),
  ])

  return `${frontMatter}\n${content}\n`
}
