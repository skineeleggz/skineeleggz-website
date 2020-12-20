<template>
  <section>
    <hero title="Sights & Sounds" :background-url="require('~/assets/img/hero/sights-and-sounds-bg.jpg')">
      <p class="lead">Combines bike footage from the Spokes, Jokes & Anecdotes series with relaxing music from some of my favorite artists. My hope is that you will sit back & relax, enjoy a few minutes of visually stimulating sights & relaxing sounds.</p>
    </hero>
    <page-contents min-spacing>
      <h2 class="content-list-heading">Episodes</h2>
      <fetch-content-list 
        from="videos" 
        type="sights-and-sounds" 
      />
    </page-contents>
  </section>
</template>

<script>
  export default {
    head() {
      return {
        title: 'Sights & Sounds',
      }
    }
  }
</script>