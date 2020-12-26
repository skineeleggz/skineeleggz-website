<template>
  <section>
    <hero title="Humor" size="mini">
      <p class="lead">Videos with some humor and creativity.</p>
    </hero>
    <page-contents min-spacing>
      <h2 class="content-list-heading">Episodes</h2>
      <fetch-content-list 
        from="videos" 
        type="humor" 
      />
    </page-contents>
  </section>
</template>

<script>
  export default {
    head() {
      return {
        title: 'Humor',
      }
    }
  }
</script>