<template>
  <section>
    <hero title="Hello there.">
      <p>I'm a programmer – you know, 1's and 0's. The 2020/2021 Covid-19 pandemic has jump-started my frontal cortex after years of remaining dormant. Creative juices are flowing once again. Join me on my <a href="https://youtube.com/skineeleggz" target="_blank">YouTube</a> journey as I focus on mental & physical health, while keeping things as light as possible with humor tucked in between. Please keep in mind that I'm a jack of all trades, master of none... so you might find my mind wandering in some of my video uploads.</p>
    </hero>
    <page-contents min-spacing>
      <b-row>
        <b-col md="7">
          <h2 class="content-list-heading">Latest Video</h2>
          <youtube-video :youtube-id="posts[0].videoId"></youtube-video>
          <p class="mt-2"><n-link to="/videos/sights-and-sounds">Click here</n-link> for the Sights & Sounds series.</p>
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
    head() {
      return {
        title: 'Home',
      }
    },
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