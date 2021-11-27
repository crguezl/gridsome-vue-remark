<template>
  <Layout>

<h2>Clases</h2>

<h2>tareas</h2>


<h2>Publicaciones</h2>

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
    title: 'Hello, world!'
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
