import { detectPostType } from "./lib/detect-post-type.js"
import { renderArticle } from "./templates/article.js"
import { renderBookmark } from "./templates/bookmark.js"
import { renderLike } from "./templates/like.js"
import { renderNote } from "./templates/note.js"
import { renderPhoto } from "./templates/photo.js"
import { renderReply } from "./templates/reply.js"
import { renderRsvp } from "./templates/rsvp.js"

export function postTemplate(properties) {
  const postType = detectPostType(properties)

  switch (postType) {
    case "bookmark":
      return renderBookmark(properties)
    case "like":
      return renderLike(properties)
    case "reply":
      return renderReply(properties)
    case "rsvp":
      return renderRsvp(properties)
    case "article":
      return renderArticle(properties)
    case "photo":
      return renderPhoto(properties)
    default:
      return renderNote(properties)
  }
}
