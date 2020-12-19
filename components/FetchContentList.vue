<template>
  <content-list :items="items" />
</template>

<script>
  export default {
    props: {
      from: String,
      type: String,
    },
    data() {
      return {
        items: []
      }
    },
    async fetch() {
      this.items = await this.$content(this.from, this.type)
        .sortBy('createdAt')
        .fetch()
    },
  }
</script>
