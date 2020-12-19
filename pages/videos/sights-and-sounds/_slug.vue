<template>
  <section>
    <page-contents>
      <p><n-link to="/videos/sights-and-sounds">View All Episodes</n-link></p>
      <fetch-content-item 
        from="videos" 
        type="sights-and-sounds"
        :slug="$route.params.slug" 
      />
    </page-contents>
  </section>
</template>