<template>
  <Layout>
    <div>
        <h1>{{ $page.post.title }}</h1>
        <p class="intro">{{ $page.post.excerpt }}</p>
        <p>
        <hr/>
        </p>
        
        <VueRemarkContent />
    </div>
  </Layout>
</template>

<!-- Front-matter fields can be queried from GraphQL layer -->
<page-query>
query getPost($id: ID!) {
  post(id: $id) {
    title
    excerpt
  }
}

</page-query>