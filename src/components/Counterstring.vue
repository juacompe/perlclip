<template>
  <div class="counterstring mdl-components__page mdl-grid">
    <div class="mdl-cell mdl-cell--2-col mdl-cell mdl-cell--1-col-tablet mdl-cell--hide-phone"></div>
    <div class="mdl-cell mdl-cell--8-col">
      <form v-on:submit.prevent="get">
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label is-upgraded is-dirty">
          <input id="length" type="number" v-model="length" v-on:click="clearLength" class="mdl-textfield__input"/>
          <label for="length" class="mdl-textfield__label">Counterstring</label>
        </div>        
        <div>
          <a @click.prevent="get"  class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
            COPY TO CLIPBOARD
          </a>
        </div>
        <p class="mdl-card__actions output">{{ msg }}</p>
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
<style scoped>
h1, h2 {
  font-weight: normal;
}
a {
  color: #35495E;
}
.output {
  word-break: break-all;
  text-align: left;
}
</style>
