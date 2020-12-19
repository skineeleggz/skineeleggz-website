<template>
  <section>
    <hero title="Welcome!" size="mini">
      <p class="lead">Still getting my website up to speed. Check back again soon :)</p>
    </hero>
    <page-contents min-spacing>
      <b-row>
        <b-col md="7">
          <h2 class="content-list-heading">Latest Video</h2>
          <youtube-video :youtube-id="posts[0].videoId"></youtube-video>
          <p class="mt-2"><n-link :to="posts[0].path">Click here</n-link> for more details</p>
        </b-col>
        <b-col md="4" offset-md="1">
          <a class="twitter-timeline" data-theme="light" href="https://twitter.com/SkineeLeggz?ref_src=twsrc%5Etfw">Tweets by SkineeLeggz</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        </b-col>
      </b-row>
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
      const posts = await $content('videos', { deep: true })
        .sortBy('createdAt', 'desc')
        .limit(1)
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