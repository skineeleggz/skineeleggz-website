<template>
  <div class="content-list">
    <div 
      class="content-item"
      v-for="item in items" 
      :key="item.slug"
    >
      <div class="content-item-title">
        <h3><n-link :to="item.path">{{ item.title }}</n-link></h3>
      </div>

      <div class="content-item-details">

        <div class="content-item-image" v-if="item.videoId">  
          <n-link :to="item.path">
            <b-img :src="`http://i3.ytimg.com/vi/${item.videoId}/mqdefault.jpg`" :alt="item.title" fluid></b-img>
          </n-link>
        </div>

        <div class="content-item-info">
          <p v-if="item.description"
            class="content-item-description"
          >{{ item.description }}</p>
        </div>

      </div>

      <p class="content-item-date" v-if="item.createdAt">
        {{ $dateFns.format(item.createdAt, 'yyyy-MM-dd') }}
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      items: Array,
    },
  }
</script>
