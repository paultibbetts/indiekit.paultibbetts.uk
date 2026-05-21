import { postTemplate } from "./config/indiekit/post-template.js"
import { postTypes } from "./config/indiekit/post-types.js"

export default {
  application: {
    url: "https://indiekit.paultibbetts.uk"
  },

  plugins: [
    "@indiekit/post-type-rsvp",
    "@indiekit/preset-hugo",
    "@indiekit/store-github",
  ],

  publication: {
    me: "https://paultibbetts.uk",
    store: "@indiekit/store-github",
    enrichPostData: true,
    postTypes,
    postTemplate,
  },

  "@indiekit/preset-hugo": {
    frontMatterFormat: "toml",
  },

  "@indiekit/store-github": {
    user: "paultibbetts",
    repo: "paultibbetts.uk",
    branch: "main",
  },
}
