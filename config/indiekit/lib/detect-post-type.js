export function detectPostType(properties) {
  if (properties.rsvp) {
    return "rsvp"
  }

  if (properties["bookmark-of"] || properties.bookmark_of || properties.bookmarkOf) {
    return "bookmark"
  }

  if (properties["like-of"] || properties.like_of || properties.likeOf) {
    return "like"
  }

  if (properties["in-reply-to"] || properties.in_reply_to || properties.inReplyTo) {
    return "reply"
  }

  if (properties.name) {
    return "article"
  }

  return "note"
}
