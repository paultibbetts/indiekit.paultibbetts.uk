import process from "node:process"

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
    "@indiekit/store-s3",
  ],

  publication: {
    me: "https://paultibbetts.uk",
    store: "@indiekit/store-github",
    mediaStore: "@indiekit/store-s3",
    enrichPostData: true,
    postTypes,
    postTemplate,
  },

  "@indiekit/preset-hugo": {
    frontMatterFormat: "toml",
  },

  "@indiekit/endpoint-image": {
    domains: ["media.paultibbetts.uk"],
  },

  "@indiekit/store-github": {
    user: "paultibbetts",
    repo: "paultibbetts.uk",
    branch: "main",
  },

  "@indiekit/store-s3": {
    accessKey: process.env.S3_ACCESS_KEY,
    secretKey: process.env.S3_SECRET_KEY,
    region: "de",
    endpoint: "https://de-s3.storage.bunnycdn.com",
    bucket: "paultibbetts-uk-media-storage",
    publicUrl: "https://media.paultibbetts.uk",
    acl: false,
    forcePathStyle: true,
  },
}
