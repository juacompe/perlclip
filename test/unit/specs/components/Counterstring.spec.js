import Vue from 'vue'
import Counterstring from '@/components/Counterstring'

describe('Counterstring.vue', () => {
  it('should have default msg', () => {
    const Constructor = Vue.extend(Counterstring)
    const vm = new Constructor().$mount()
    expect(vm.msg).to.equal('')
  })

  it('should have default length', () => {
    const Constructor = Vue.extend(Counterstring)
    const vm = new Constructor().$mount()
    expect(vm.length).to.equal(0)
  })

  it('should set msg when get is called', () => {
    const Constructor = Vue.extend(Counterstring)
    const vm = new Constructor().$mount()
    vm.$copyText = () => { return { catch: () => {} } }
    vm.length = 1
    vm.get()
    expect(vm.msg).to.not.equal('')
  })
})
