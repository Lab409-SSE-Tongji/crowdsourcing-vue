import Vue from 'vue'
import Login from '../../../src/components/page/Login'

describe('Login.vue', () => {
  describe('Welcome',() =>{
    it('should render correctly', () => {
      const Constructor = Vue.extend(Login)
      const vm = new Constructor().$mount()

      expect(vm.$el.querySelector('.container h1').textContent)
        .to.equal('Welcome to CrowdSourcing Platform')
    })
  })
  describe('Login',() =>{
    it('Login', () => {
      const Constructor = Vue.extend(Login)
      const vm = new Constructor().$mount()

      Vue.nextTick(() => {
        vm.login()
        console.log(sessionStorage.getItem('token'))
        expect(sessionStorage.getItem('token')).toBe('t')
        return Promise().then();
      })

    })
  })

})
