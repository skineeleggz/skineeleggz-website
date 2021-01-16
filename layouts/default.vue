<template>
  <div>
    <header>
      <NavBar />
    </header>
    <main>
      <Nuxt />
    </main>
    <footer>
      <div class="container">
        <p>Emanating from Toronto, Canada – all tucked away down there!</p>
        <p>© skineeleggz.com</p>
      </div>
    </footer>
  </div>
</template>

<script>
  export default {
    head() {
      return {
        bodyAttrs: {
          class: this.$route.name,
        }
      }
    }
  }
</script>