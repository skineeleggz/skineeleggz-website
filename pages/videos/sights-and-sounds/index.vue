<template>
  <section>
    <hero title="Sights & Sounds" :background-url="require('~/assets/img/hero/sights-and-sounds-bg.jpg')">
      <p class="lead">Combines bike footage from the Spokes, Jokes & Anecdotes series with relaxing music from some of my favorite artists. My hope is that you will sit back & relax, enjoy a few minutes of visually stimulating sights & relaxing sounds.</p>
    </hero>
    <page-contents min-spacing>
      <content-list
        :items="posts"
      />
    </page-contents>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        posts: []
      }
    },
    async asyncData({ $content, params, error }) {
      const posts = await $content('videos', 'sights-and-sounds')
        .sortBy('createdAt', 'desc')
        .fetch()
        .catch(err => {
          error({ statusCode: 404, message: 'Page not found' })
        });

      return {
        posts
      }
    }
  }
</script>