import { getPostTemplate } from "@indiekit/preset-hugo/lib/post-template.js"

export function renderPhoto(properties) {
  return getPostTemplate(properties, "toml")
}
