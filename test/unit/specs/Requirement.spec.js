import Vue from 'vue'
import Requirement from '../../../src/components/page/Requirement'

describe('Requirement',() => {
  describe('RequirementName',() => {
    it('RequirementName',() => {
      const Constructor = Vue.extend(Requirement)
      const vm = new Constructor().$mount()
      Vue.nextTick(() => {
        expect(v.$el.querySelector('.requirement_name').innerText).to.equal('test')
        return Promise().then();
      })
    })
  })
  describe('RequirementId',() => {
    it('RequirementId',() => {
      const Constructor = Vue.extend(Requirement)
      const vm = new Constructor().$mount()
      Vue.nextTick(() => {
        expect(v.$el.querySelector('.requirement_id').innerText).to.equal('1')
        return Promise().then();
      })
    })
  })
  describe('RequirementType',() => {
    it('RequirementType',() => {
      const Constructor = Vue.extend(Requirement)
      const vm = new Constructor().$mount()
      Vue.nextTick(() => {
        expect(v.$el.querySelector('.requirement_type').innerText).to.equal('ios')
        return Promise().then();
      })
    })
  })
  describe('tag',() => {
    it('tag',() => {
      const Constructor = Vue.extend(Requirement)
      const vm = new Constructor().$mount()
      Vue.nextTick(() => {
        expect(v.$el.querySelector('.tag').innerText).to.equal('开发中')
        return Promise().then();
      })
    })
  })
})
