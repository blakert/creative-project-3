<template>
  <div id="app">
    <div>
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand href="#">Car App</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item >
              <router-link to="/">My Car</router-link>
            </b-nav-item>
            <b-nav-item >
              <router-link to="/message">Messaging</router-link>
            </b-nav-item>
             <b-nav-item >
              <router-link to="/forsale">For Sale</router-link>
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <router-view />
    <div class="footer">
        <a href="https://github.com/blakert/creative-project-3">source code </a>
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #17a2b8;
  color: white;
  text-align: center;
}

a {
  color:white !important;
}
a :hover {
  color: white !important;
  text-decoration: none !important;
}
</style>
