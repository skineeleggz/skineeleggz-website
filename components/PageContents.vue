<template>
  <div class="page-contents" :class="[ minSpacing ? 'minimal-spacing':'' ]">
    <div class="container">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss">
  .page-contents {
    background: $main-bg-color;
    padding: 8rem 0 2rem;
    &.minimal-spacing {
      padding: 2rem 0;
    }
  }
</style>

<script>
  export default {
    props: {
      minSpacing: Boolean,
    }
  }
</script>