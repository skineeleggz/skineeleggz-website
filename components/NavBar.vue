<template>
  <b-navbar fixed="top" toggleable="md">
    <div class="container">
      <b-navbar-brand to="/">
        <img src="~/assets/img/logo.png" alt="SkineeLeggz Logo"> SkineeLeggz
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item-dropdown text="Videos" right>
            <b-dropdown-item to="/fitness-challenges">Fitness Challenges</b-dropdown-item>
            <b-dropdown-item to="/spokes-jokes-and-anecdotes">Spokes, Jokes & Anecdotes</b-dropdown-item>
            <b-dropdown-item to="/sights-and-sounds">Sights & Sounds</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item to="/dev">Dev</b-nav-item>      
          <b-nav-item to="/blog">Blog</b-nav-item>
          <b-nav-item href="https://www.youtube.com/skineeleggz">
            <fa-icon :icon="['fab', 'youtube']" />
          </b-nav-item>
          <b-nav-item href="https://twitter.com/skineeleggz">
            <fa-icon :icon="['fab', 'twitter']" />
          </b-nav-item>
          <b-nav-item href="https://www.facebook.com/skineeleggz">
            <fa-icon :icon="['fab', 'facebook-f']" />
          </b-nav-item>
          <b-nav-item href="https://github.com/skineeleggz">
            <fa-icon :icon="['fab', 'github']" />
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>  
    </div>
  </b-navbar>
</template>

<style lang="scss">

$navbar-border-spacing-adjustment: 15px;

@mixin color-nav-elements($color) {
  .navbar-brand {
    color: $color;
  }

  .navbar-nav {
    .nav-link {
      color: $color;
    }
  }
}

.navbar {
  transition: padding 0.25s ease;
  padding: 1.4rem 1rem;

  .navbar-nav {
    .nav-link {
      font-family: 'Roboto', sans-serif;
    }
  }

  .navbar-brand {
    margin-right: 2rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 900;
    img {
      max-height: 40px;
      margin-right: 0.5rem;
    }
  }
  
  @include color-nav-elements($navbar-text-color);

  .navbar-toggler {
    border-color: transparent;
    &-icon {
      background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='#{$navbar-toggler-color}' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
    }
  }

  body.scrolled & {
    background: $navbar-scrolled-bg-color;
    padding-top: 0.6rem;
    padding-bottom: 0.6rem;
  }
}
</style>