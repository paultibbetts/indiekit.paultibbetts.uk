import { getDraftLine, getPublishedDate, getTags, getTextContent, getFirstValue } from "../lib/properties.js"
import { buildFrontMatter, formatTomlArray, formatTomlString } from "../lib/toml.js"

export function renderRsvp(properties) {
  const published = getPublishedDate(properties)
  const content = getTextContent(properties.content)
  const tags = getTags(properties)
  const rsvp = properties.rsvp ?? {}
  const url = getFirstValue(rsvp.url, properties.url)
  const name = getFirstValue(rsvp.name, properties.name, "")
  const value = getFirstValue(rsvp.value, "yes")
  const label = getFirstValue(rsvp.label, "")
  const date = getFirstValue(rsvp.date, "")
  const dateLabel = getFirstValue(rsvp.date_label, rsvp.dateLabel, "")

  const frontMatter = buildFrontMatter([
    formatTomlString("date", published),
    getDraftLine(properties),
    formatTomlString("title", ""),
    formatTomlArray("tags", tags),
    "",
    "[rsvp]",
    formatTomlString("url", url),
    formatTomlString("name", name),
    formatTomlString("value", value),
    formatTomlString("label", label),
    formatTomlString("date", date),
    formatTomlString("date_label", dateLabel),
  ])

  return `${frontMatter}\n${content}\n`
}
