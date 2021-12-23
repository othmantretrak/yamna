export default {
  name: "author",
  title: "Author",
  type: "document",
  fields: [
    {
      name: "email",
      title: "Email",
      type: "string",
    },
    {
      name: "password",
      title: "Password",
      type: "string",
    },
    {
      name: "isAdmin",
      title: "Is Admin",
      type: "string",
    },
  ],
  preview: {
    select: {
      title: "email",
      media: "image",
    },
  },
};
