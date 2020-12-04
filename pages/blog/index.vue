<template>
  <section>
    <hero title="Blog" size="mini">
      <p class="lead">This is my blog...</p>
    </hero>
    <page-contents>
      <content-list :items="blogs" />
    </page-contents>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        blogs: []
      }
    },
    async asyncData({ $content, params, error }) {

      const blogs = await $content('blog')
        .sortBy('createdAt', 'desc')
        .fetch()
        .catch(err => {
          error({ statusCode: 404, message: 'Page not found' });
        });

      return {
        blogs
      };
    }
  }
</script>