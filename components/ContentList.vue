<template>
  <div class="content-list">
    <div 
      class="content-item"
      v-for="item in items" 
      :key="item.slug"
    >
      <h3>
        <n-link :to="item.path">{{ item.title }}</n-link>
      </h3>
    
      <content-item
        :item="item"
      />
    </div>
  </div>
</template>

<style lang="scss">
  .content-list {
    // border-top: 1px solid $light-shade;

    .content-item {
      padding-top: 1rem;
      // border-bottom: 1px solid $light-shade;
    }
  }
</style>

<script>
  export default {
    props: {
      items: Array,
    }
  }
</script>
