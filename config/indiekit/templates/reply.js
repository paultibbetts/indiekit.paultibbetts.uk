import { getDraftLine, getPublishedDate, getTags, getTextContent, getFirstValue } from "../lib/properties.js"
import { buildFrontMatter, formatTomlArray, formatTomlString } from "../lib/toml.js"

export function renderReply(properties) {
  const published = getPublishedDate(properties)
  const content = getTextContent(properties.content)
  const tags = getTags(properties)
  const replyTo = getFirstValue(properties["in-reply-to"], properties.in_reply_to, properties.inReplyTo)

  const frontMatter = buildFrontMatter([
    formatTomlString("date", published),
    getDraftLine(properties),
    formatTomlString("title", ""),
    formatTomlString("in_reply_to", replyTo),
    formatTomlArray("tags", tags),
  ])

  return `${frontMatter}\n${content}\n`
}
