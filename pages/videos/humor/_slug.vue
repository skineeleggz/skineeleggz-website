<template>
  <section>
    <page-contents>
      <p><n-link to="/videos/humor">View All Episodes</n-link></p>
      <fetch-content-item 
        from="videos" 
        type="humor"
        :slug="$route.params.slug" 
      />
    </page-contents>
  </section>
</template>