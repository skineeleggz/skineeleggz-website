<template>
  <content-item :item="item" />
</template>

<script>
  export default {
    props: {
      from: String,
      type: String,
      slug: String,
    },
    data() {
      return {
        item: {}
      }
    },
    async fetch() {
      let item = await this.$content(this.from, this.type, this.slug)
        .fetch()
      this.item = item
    },
  }
</script>