<template>
  <section>
    <hero :title="blog.title" size="mini">
      <p>Description goes here</p>
    </hero>
    <page-contents>
      <h2><n-link to="/blog">Blog</n-link> &raquo; {{ blog.title }}</h2>
      <content-item
        :item="blog"
      />
    </page-contents>
  </section>
</template>

<script>
export default {
  data() {
    return {
      blog: []
    }
  },
  async asyncData({ $content, params, error }) {
    const blog = await $content('blog', 'interesting', params.slug)
      .fetch()
      .catch(err => {
        error({ statusCode: 404, message: "Page not found" });
      });

    return {
      blog
    };
  }
};
</script>