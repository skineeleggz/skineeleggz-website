<template>
  <section>
    <hero title="Hello there." class="home-hero">
      <b-row align-v="center">
        <b-col md="8">
          <p>I'm a programmer – you know, 1's and 0's. The 2020/2021 Covid-19 pandemic has jump-started my frontal cortex after years of remaining dormant. Creative juices are flowing once again. Join me on my <a href="https://youtube.com/skineeleggz" target="_blank">YouTube</a> journey as I focus on mental & physical health, while keeping things as light as possible with humor tucked in between. Please keep in mind that I'm a jack of all trades, master of none... so you might find my mind wandering in some of my video uploads.</p>
        </b-col>
        <b-col md="4">
          <img src="~/assets/img/logo_with_text.png" alt="SkineeLeggz logo with text">
        </b-col>
      </b-row>
    </hero>
    <page-contents min-spacing>
      <b-row>
        <b-col md="7">
          <h2 class="content-list-heading">Latest Video</h2>
          <youtube-video :youtube-id="posts[0].videoId"></youtube-video>
          <p class="mt-2"><n-link to="/videos/sights-and-sounds">Click here</n-link> for the Sights & Sounds series.</p>
        </b-col>
        <b-col md="4" offset-md="1">
          <h2 class="content-list-heading">Latest Tiktok</h2>
          <blockquote class="tiktok-embed" cite="https://www.tiktok.com/@skineeleggz/video/6919264822504787205" data-video-id="6919264822504787205" style="max-width: 605px;min-width: 325px;" > <section> <a target="_blank" title="@skineeleggz" href="https://www.tiktok.com/@skineeleggz">@skineeleggz</a> <p>I win worst dad jokes award! <a title="dadjokes" target="_blank" href="https://www.tiktok.com/tag/dadjokes">##dadjokes</a></p> <a target="_blank" title="♬ original sound - SkineeLeggz" href="https://www.tiktok.com/music/original-sound-6919264828699757317">♬ original sound - SkineeLeggz</a> </section> </blockquote> <script async src="https://www.tiktok.com/embed.js"></script>
        </b-col>
      </b-row>
    </page-contents>
  </section>
</template>

<style lang="scss">
  .home-hero {
    img {
      max-width: 320px;
      margin-top: 2rem;

      @include md-up {
        margin: 0;
        max-width: 100%;
      }
    }
  }
</style>

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