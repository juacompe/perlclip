<template>
  <div class="counterstring">
    <h1>Counterstring</h1>
    <div>
      <form>
        <div>
          <input id="length" type="number" v-model="length"/>
        </div>        
        <div>
          <a @click.prevent="get">
            COPY TO CLIPBOARD
          </a>
        </div>
        <div>{{ msg }}</div>
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
      this.msg = `${Counterstring.get(this.length)}`
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
