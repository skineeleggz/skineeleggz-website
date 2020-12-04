<template>
  <article>
    <p v-if="item.createdAt !== item.updatedAt">Updated: {{ $dateFns.format(item.updatedAt, 'yyyy-MM-dd') }}</p>
    <nuxt-content :document="item" />
  </article>
</template>

<script>
  export default {
    props: {
      item: Object,
    }
  }
</script>