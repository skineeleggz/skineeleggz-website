<template>
  <section>
    <hero title="Blog" size="mini">
      <p class="lead">This is my blog...</p>
    </hero>
    <page-contents min-spacing>
      <div class="content-list">
        <div 
          class="content-item"
          v-for="post in posts" 
          :key="post.slug"
        >
          <h3>
            <n-link :to="post.path">{{ post.title }}</n-link> <span class="date">{{ $dateFns.format(post.createdAt, 'yyyy-MM-dd') }}</span>
          </h3>

        </div>
      </div>
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

      const posts = await $content('blog', { deep: true })
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