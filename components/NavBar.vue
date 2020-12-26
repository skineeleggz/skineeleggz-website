<template>
  <b-navbar fixed="top" toggleable="md">
    <div class="container">
      <b-navbar-brand to="/">
        <img src="~/assets/img/logo.png" alt="SkineeLeggz Logo"> SkineeLeggz
      </b-navbar-brand>
      <b-navbar-toggle target="navbar-collapse">
        <fa-icon target="navbar-collapse" :icon="['fas', 'bars']"></fa-icon>
      </b-navbar-toggle>
      <b-collapse id="navbar-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item-dropdown text="Videos" right>
            <b-dropdown-item to="/videos/humor">Humor</b-dropdown-item>
            <b-dropdown-item to="/videos/fitness-challenges">Fitness Challenges</b-dropdown-item>
            <b-dropdown-item to="/videos/spokes-jokes-and-anecdotes">Spokes, Jokes & Anecdotes</b-dropdown-item>
            <b-dropdown-item to="/videos/sights-and-sounds">Sights & Sounds</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item to="/dev">Dev</b-nav-item>      
          <b-nav-item to="/blog">Blog</b-nav-item>
          <b-nav-text class="social-links">
            <a href="https://www.youtube.com/skineeleggz" target="_blank">
              <fa-icon :icon="['fab', 'youtube']" />
            </a>
            <a href="https://twitter.com/skineeleggz" target="_blank">
              <fa-icon :icon="['fab', 'twitter']" />
            </a>
            <a href="https://www.facebook.com/skineeleggz" target="_blank">
              <fa-icon :icon="['fab', 'facebook-f']" />
            </a>
            <a href="https://github.com/skineeleggz" target="_blank">
              <fa-icon :icon="['fab', 'github']" />
            </a>
          </b-nav-text>
        </b-navbar-nav>
      </b-collapse>  
    </div>
  </b-navbar>
</template>

<style lang="scss">

$navbar-item-spacing: 1rem;

@mixin color-nav-elements($color) {
  .navbar-brand {
    color: $color;
  }

  .navbar-nav {
    .nav-link {
      color: $color;
      a {
        color: inherit;
      }
    }
  }
}

.navbar {
  transition: padding 0.25s ease;
  padding: 1.4rem 1rem;

  @include color-nav-elements($navbar-text-color);

  .navbar-brand {
    font-family: 'Roboto', sans-serif;
    font-weight: 900;
    img {
      max-height: 40px;
      margin-right: 0.5rem;
    }

    @include md-up {
      margin-right: $navbar-item-spacing * 2;
    }
  }

  .navbar-nav {
    width: 100%;

    .nav-link {
      font-family: 'Roboto', sans-serif;
      padding-left: $navbar-item-spacing;
      padding-right: $navbar-item-spacing;
    }

    .social-links {
      a {
        padding-left: $navbar-item-spacing;
        padding-right: $navbar-item-spacing;
      }

      @include md-up {
        margin-left: auto;
      }
    }
  }

  .navbar-toggler {
    border: 0;
    font-size: 24px;
    color: $navbar-toggler-color;
  }

  .navbar-collapse.collapse {
    &.show, &.collapsing {
      background: $navbar-responsive-bg-color;
      margin: 0.5rem 0;
      padding: 0.5rem 0;
    }
  }

  body.scrolled & {
    background: $navbar-scrolled-bg-color;
    padding-top: 0.6rem;
    padding-bottom: 0.6rem;
  }
}
</style>