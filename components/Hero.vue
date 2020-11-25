<template>
  <div class="hero" :style="{ 'background-image': backgroundUrl && `url(${backgroundUrl})` }">
    <div class="container">
      <h2 class="display-2">{{ title }}</h2>
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss">
.hero {
  display: flex;
  background-color: $dark-shade;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  max-height: 600px;
  padding: 2rem 0;

  color: $white;

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  a {
    color: orange;
  }
}
</style>

<script>
export default {
  props: {
    title: String,
    backgroundUrl: String,
  }
}
</script>