<template>
  <b-embed
    :src="`https://www.youtube.com/embed/${youtubeId}?rel=0`"
    type="iframe"
    aspect="16by9"
    allowfullscreen
  ></b-embed>
</template>

<script>
  export default {
    props: {
      youtubeId: String,
    }
  }
</script>