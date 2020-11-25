<template>
  <b-navbar type="dark" fixed="top" toggleable="md">
    <div class="container">
      <b-navbar-brand to="/">SkineeLeggz</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item-dropdown text="Videos" right>
            <b-dropdown-item to="/fitness-challenges">Fitness Challenges</b-dropdown-item>
            <b-dropdown-item to="/spokes-jokes-and-anecdotes">Spokes, Jokes & Anecdotes</b-dropdown-item>
            <b-dropdown-item to="/sights-and-sounds">Sights & Sounds</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item to="/web-dev">Web-Dev</b-nav-item>      
          <b-nav-item to="/blog">Blog</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </div>
  </b-navbar>
</template>

<style lang="scss">
.navbar {
  transition: all 0.4s ease;
  padding: 1rem;

  body.scrolled & {
    background: $navbar-scrolled-bg-color;
    padding: 2rem 1rem;
  }
}
</style>