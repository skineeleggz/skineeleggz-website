<template>
  <div class="content-list">
    <div 
      class="content-item"
      v-for="item in items" 
      :key="item.slug"
    >
      <h3>
        <n-link :to="item.path">{{ item.title }}</n-link> <span class="date">{{ $dateFns.format(item.createdAt, 'yyyy-MM-dd') }}</span>
      </h3>

      <n-link :to="item.path">
        <b-img :src="`http://i3.ytimg.com/vi/${item.videoId}/hqdefault.jpg`" :alt="item.title" fluid></b-img>
      </n-link>
    </div>
  </div>
</template>

<style lang="scss">
  .content-list {
    .content-item {
      margin-bottom: 2rem;
      
      a {
        color: $link-color;
      }

      .date {
        white-space: nowrap;
        font-size: 14px;
        color: $dark-shade;
      }
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
