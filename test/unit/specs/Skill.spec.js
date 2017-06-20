import Vue from 'vue'
import Skill from '../../../src/components/page/Skill'

describe('Skill',() => {
  describe('projectName',() => {
    it('projectName',() => {
      const Constructor = Vue.extend(Skill)
      const vm = new Constructor().$mount()
      Vue.nextTick(() => {
        expect(v.$el.querySelector('.projectName').innerText).to.equal('test')
        return Promise().then();
      })
    })
  })
})
