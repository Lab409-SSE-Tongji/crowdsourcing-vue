import Vue from 'vue'
import Login from '../../../src/components/page/Login'

describe('Login.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Login)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.container h1').textContent)
      .to.equal('Welcome to CrowdingSourcing Platform')
  })
})
