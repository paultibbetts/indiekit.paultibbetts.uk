export function normaliseList(value) {
  if (Array.isArray(value)) {
    return value
  }

  if (value === undefined || value === null || value === "") {
    return []
  }

  return [value]
}

export function getFirstValue(...values) {
  for (const value of values) {
    if (value !== undefined && value !== null && value !== "") {
      return value
    }
  }

  return ""
}

export function getTextContent(content) {
  if (!content) {
    return ""
  }

  if (typeof content === "string") {
    return content
  }

  return getFirstValue(content.text, content.html, "")
}

export function getTags(properties) {
  return normaliseList(getFirstValue(properties.category, properties.tags))
}

export function getPublishedDate(properties) {
  return getFirstValue(properties.published, properties.date, new Date().toISOString())
}

export function getDraftLine(properties) {
  const postStatus = getFirstValue(properties.postStatus, properties["post-status"])

  return postStatus === "draft" ? "draft = true" : ""
}
