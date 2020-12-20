<template>
  <section>
    <hero title="Spokes, Jokes & Anecdotes" :background-url="require('~/assets/img/hero/spokes-jokes-and-anecdotes-bg.jpg')">
      <p class="lead">I ride my bike around different trails in Scarborough, Ontario. While riding, I discuss different topics that are important to me. Along the way, I'll <em>try</em> to crack a few jokes as well. I hope to inspire discussion, so please leave your comments on YouTube.</p>
    </hero>
    <page-contents>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLAKdGeJ-ug6LrP04SfuDcA46YnFY6B8WX" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </page-contents>
  </section>
</template>

<script>
  export default {
    head() {
      return {
        title: 'Spokes, Jokes & Anecdotes',
      }
    }
  }
</script>