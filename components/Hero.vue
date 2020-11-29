<template>
  <div class="hero" :style="{ 'background-image': backgroundUrl && `url(${backgroundUrl})` }">
    <div class="container">
      <h2 class="display-3">{{ title }}</h2>
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss">
.hero {
  display: flex;
  background-color: $grey;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  max-height: 600px;
  padding: 2rem 0;

  color: $black;

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  a {
    color: darkslategrey;
    text-decoration: underline;
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