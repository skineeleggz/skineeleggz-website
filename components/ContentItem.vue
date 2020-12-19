<template>
  <div class="content-item">
    <!-- <p v-if="item.createdAt !== item.updatedAt">Updated: {{ $dateFns.format(item.updatedAt, 'yyyy-MM-dd') }}</p> -->
    <h2>{{ item.title }}</h2>
    <p class="content-item-date" v-if="item.createdAt">
      {{ $dateFns.format(item.createdAt, 'yyyy-MM-dd') }}
    </p>
    <youtube-video :youtube-id="item.videoId" v-if="item.videoId"></youtube-video>
    <nuxt-content :document="item" />
  </div>
</template>

<style lang="scss">
  .content-item {
    padding-bottom: 1rem;
    margin-bottom: 1rem;
    border-bottom: 1px solid $light-shade;

    &:last-of-type {
      padding-bottom: 0;
      margin-bottom: 0;
      border-bottom: 0;
    }

    // &-title h3 {
    //   font-size: 22px;
    //   @include md-up {
    //     font-size: 24px;
    //   }
    // }

    &-description {
      margin: 0.6rem 0;
      font-size: 14px;
    }

    &-details {
      display: flex;
      flex-direction: column;
      @include md-up {
        flex-direction: row;
      }
    }

    &-info {
      @include md-up {
        flex-grow: 1;
        margin-left: 1rem;
      }
    }

    &-date {
      margin: 0;
      white-space: nowrap;
      font-size: 14px;
      color: $dark-shade;
    }

    &-image {
      @include md-up {
        min-width: 320px;
        max-width: 320px;
      }
    }

    .youtube-video {
      margin: 1rem 0;
    }

  }
</style>

<script>
  export default {
    props: {
      item: Object,
    }
  }
</script>