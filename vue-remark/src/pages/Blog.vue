<template>
  <Layout>
<div v-for="edge in $page.posts.edges" :key="edge.node.id">
  <li>
    <g-link :to="edge.node.path">{{ edge.node.title }}</g-link>
  </li>
</div>

  </Layout>
</template>

<page-query>

query posts {
  posts: allPost {
    edges {
      node {
        title
        excerpt
        path
        id
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Published Articles'
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
