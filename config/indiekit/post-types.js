export const postTypes = {
  article: {
    post: {
      path: "content/articles/{yyyy}-{MM}-{dd}-{slug}.md",
      url: "{yyyy}/{MM}/{dd}/{slug}/",
    },
  },

  bookmark: {
    post: {
      path: "content/bookmarks/{yyyy}-{MM}-{dd}-{slug}.md",
      url: "{yyyy}/{MM}/{dd}/{slug}/",
    },
  },

  note: {
    post: {
      path: "content/notes/{yyyy}-{MM}-{dd}-{HH}{mm}{ss}.md",
      url: "{yyyy}/{MM}/{dd}/{HH}{mm}{ss}/",
    },
  },

  like: {
    post: {
      path: "content/likes/{yyyy}-{MM}-{dd}-{slug}.md",
      url: "{yyyy}/{MM}/{dd}/{slug}/",
    },
  },

  reply: {
    post: {
      path: "content/replies/{yyyy}-{MM}-{dd}-{slug}.md",
      url: "{yyyy}/{MM}/{dd}/{slug}/",
    },
  },

  rsvp: {
    post: {
      path: "content/rsvps/{yyyy}-{MM}-{dd}-{slug}.md",
      url: "{yyyy}/{MM}/{dd}/{slug}/",
    },
  },

  photo: {
    media: {
      path: "photos/{filename}",
      url: "https://media.paultibbetts.uk/photos/{filename}",
    },
  },
}
