exports.createPages = async ({ actions }) => {
  const { createPage } = actions

  // Using the deferred static generation rendering option.
  // The pages are not created until requested by a user.
  // @see https://www.gatsbyjs.com/docs/reference/rendering-options/deferred-static-generation/
  createPage({
    path: "/imprint",
    component: require.resolve("./src/templates/imprint.js"),
    context: {},
    defer: true,
  })

  createPage({
    path: "/privacy",
    component: require.resolve("./src/templates/privacy.js"),
    context: {},
    defer: true,
  })
}
