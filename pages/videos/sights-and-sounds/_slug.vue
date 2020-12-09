<template>
  <section>
    <page-contents>
      <h1>{{ post.title }}</h1>
      <content-item
        :item="post"
      />
      <youtube-video :youtube-id="post.videoId"></youtube-video>
    </page-contents>
  </section>
</template>

<style lang="scss">
  .content-item {
    margin-top: 2rem;
  }
</style>

<script>
  export default {
    data() {
      return {
        post: {}
      }
    },
    async asyncData({ $content, params, error }) {
      const post = await $content('videos', 'sights-and-sounds', params.slug)
        .fetch()
        .catch(err => {
          error({ statusCode: 404, message: 'Page not found' })
        });

      return {
        post
      }
    }
  }
</script>