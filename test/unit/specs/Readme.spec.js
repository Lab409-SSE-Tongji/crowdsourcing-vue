import Vue from 'vue'
import Readme from '../../../src/components/page/Readme'

describe('Readme.vue', () => {

  describe('email',() => {
    it('check email', () => {
      const Constructor = Vue.extend(Readme)
      const vm = new Constructor().$mount()

      expect(vm.$el.querySelector('.email').innerText)
        .to.equal('recall52@163.com')
    })
  })
  describe('realname',() => {
    it('realname', () => {
      const Constructor = Vue.extend(Readme)
      const vm = new Constructor().$mount()
      Vue.nextTick(() => {
        expect(vm.$el.querySelector('.realname').innerText).toBe('test')
        return Promise().then();
      })
    })
  })
  describe('gender',() => {
    it('gender',() => {
      const Constructor = Vue.extend(Readme)
      const vm = new Constructor().$mount()
      Vue.nextTick(() => {
        expert(v.$el.querySelector('.gender').innerText).toBe('男')
        return Promise().then();
      })
    })
  })
  describe('profession',() => {
    it('gender',() => {
      const Constructor = Vue.extend(Readme)
      const vm = new Constructor().$mount()
      Vue.nextTick(() => {
        expert(v.$el.querySelector('.profession').innerText).toBe('test')
        return Promise().then();
      })
    })
  })

})
