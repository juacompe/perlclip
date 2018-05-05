<template>
  <div class="counterstring mdl-components__page mdl-grid">
    <div class="mdl-cell mdl-cell--2-col mdl-cell mdl-cell--1-col-tablet mdl-cell--hide-phone"></div>
    <div class="mdl-cell mdl-cell--8-col">
      <h2>Counterstring</h2>
      <form>
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label is-upgraded is-dirty">
          <input id="length" type="number" v-model="length" v-on:click="clearLength()" class="mdl-textfield__input"/>
        </div>        
        <div>
          <a @click.prevent="get"  class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
            COPY TO CLIPBOARD
          </a>
        </div>
        <div class="mdl-card__actions">{{ msg }}</div>
      </form>
    </div>
  </div>
</template>

<script>
import Counterstring from '@/models/Counterstring'

export default {
  data () {
    return {
      length: 0,
      msg: ''
    }
  },
  methods: {
    get () {
      var output = Counterstring.get(this.length)
      this.msg = `${output}`
      this.$copyText(output).catch(function (e) {
        alert('Can not copy')
        console.log(e)
      })
    },
    clearLength () {
      this.length = ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}
a {
  color: #35495E;
}
</style>
