<template>
  <div>
    <header>
      <b-navbar type="dark" variant="dark" fixed="top" toggleable="md">
        <div class="container">
          <b-navbar-brand to="/">SkineeLeggz</b-navbar-brand>
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class="mr-auto">
              <b-nav-item to="/fitness-challenges">Fitness Challenges</b-nav-item>
              <b-nav-item to="/spokes-jokes-and-anecdotes">Spokes, Jokes & Anecdotes</b-nav-item>
              <b-nav-item to="/sights-and-sounds">Sights & Sounds</b-nav-item>
              <b-nav-item to="/web-dev">Web-Dev</b-nav-item>
            </b-navbar-nav>
          </b-collapse>
        </div>
      </b-navbar>
    </header>
    <main>
      <Nuxt />
    </main>
    <footer>
      <div class="container">
        <p>© skineeleggz.com</p>
      </div>
    </footer>
  </div>
</template>