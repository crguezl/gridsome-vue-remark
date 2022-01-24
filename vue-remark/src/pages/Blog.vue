<template>
  <Layout>
    <div v-for="edge in $page.posts.edges" :key="edge.node.id">
      <li>
        <g-link :to="edge.node.path">{{ edge.node.title }}</g-link> {{ edge.node }}
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
    title: "Published Articles",
  },
  computed: {
    allClases() {
      let clases = this.$page.posts.edges;
      return clases.filter(x => x.type == "clase")
    }
  }
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
