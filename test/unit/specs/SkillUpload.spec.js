import Vue from 'vue'
import Skill from '../../../src/components/page/Skill'

describe('Skill',() => {
  describe('projectName',() => {
    it('projectName',() => {
      const Constructor = Vue.extend(Skill)
      const vm = new Constructor().$mount()
      Vue.nextTick(() => {
        expert(v.$el.querySelector('.projectName').innerText).toBe('CrowdSourcing')
        return Promise().then();
      })
    })
  })
})
