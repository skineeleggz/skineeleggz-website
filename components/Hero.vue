<template>
  <div class="hero" :class="[ size ? `size-${size}`:'', backgroundUrl ? 'has-background-image':'' ]" :style="{ 'background-image': backgroundUrl && `url(${backgroundUrl})` }">
    <div class="container">
      <div class="hero-contents">
        <h2 class="display-4">{{ title }}</h2>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.hero {
  display: flex;
  align-items: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  
  padding: $navbar-default-height 0 2rem;

  &.size-mini {
    max-height: 300px;
  }

  color: $black;

  text-align: center;

  @include md-up() {
    text-align: left;
    max-height: 600px;
  }

  .container {
    .hero-contents {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }

  h2, p {
    font-family: Roboto, sans-serif;
    color: $hero-title-color;
  }

  h2 {
    letter-spacing: 1px;
    font-weight: 900;
  }

  p {
    font-size: 18px;
    &:last-of-type {
      margin-bottom: 0;
    }

    @include lg-up() {
      font-size: 20px;
    }

    @include xl-up() {
      font-size: 24px;
    }
  }

  a {
    color: $hero-link-color;
    text-decoration: underline;
  }

  &.has-background-image {

    .hero-contents {
      padding: 1rem 2rem;
      border-radius: 1rem;
      background: rgba(0, 0, 0, 0.15);
    }

    h2, p {
      color: $white;
    }
  }
}
</style>

<script>
export default {
  props: {
    title: String,
    backgroundUrl: String,
    adjustNav: Boolean,
    size: String,
  }
}
</script>