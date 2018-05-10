<template>
  <div id="app" class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
    <header class="mdl-layout__header">
      <div class="mdl-layout__header-row">
        <span class="mdl-layout-title">{{title}}</span>
      </div>
    </header>
    <div class="mdl-layout__drawer">
      <span class="mdl-layout-title">{{title}}</span>
      <nav class="mdl-navigation">
        <router-link v-for="link in this.links" v-bind:key="link" v-bind:to="link.to" router-link class="mdl-navigation__link" @click.native="hideMenu">{{link.name}}</router-link>
      </nav>
    </div>
    <main class="mdl-layout__content">
      <div class="page-content">
      <router-view></router-view>
      </div>
    </main>
  </div>
</template>

<script>
require('material-design-lite')
export default {
  name: 'app',
  data () {
    return {
      title: 'Perlclip PWA',
      links: [
        { name: 'Counterstring', to: '/' },
        { name: 'About', to: '/about' }
      ]
    }
  }
}
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  text-align: center;
  margin-top: 40px;
}

header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #35495E;
  color: #ffffff;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}

@import url('https://fonts.googleapis.com/icon?family=Material+Icons');
@import url('https://code.getmdl.io/1.2.1/material.blue-red.min.css');
</style>
