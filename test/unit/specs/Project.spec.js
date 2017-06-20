import Vue from 'vue'
import Project from '../../../src/components/page/Project'

describe('Project',() => {
  describe('ProjectName',() => {
    it('projectName',() => {
      const Constructor = Vue.extend(Project)
      const vm = new Constructor().$mount()
      Vue.nextTick(() => {
        expect(v.$el.querySelector('.Project_name').innerText).to.equal('test')
        return Promise().then();
      })
    })
  })
  describe('username',() => {
    it('username',() => {
      const Constructor = Vue.extend(Project)
      const vm = new Constructor().$mount()
      Vue.nextTick(() => {
        expect(v.$el.querySelector('.username').innerText).to.equal('同济大学软件工程实验室')
        return Promise().then();
      })
    })
  })
  describe('ProjectType',() => {
    it('ProjectType',() => {
      const Constructor = Vue.extend(Project)
      const vm = new Constructor().$mount()
      Vue.nextTick(() => {
        expect(v.$el.querySelector('.Project_type').innerText).to.equal('ios')
        return Promise().then();
      })
    })
  })
  describe('tag',() => {
    it('tag',() => {
      const Constructor = Vue.extend(Project)
      const vm = new Constructor().$mount()
      Vue.nextTick(() => {
        expect(v.$el.querySelector('.tag').innerText).to.equal('开发中')
        return Promise().then();
      })
    })
  })
})
