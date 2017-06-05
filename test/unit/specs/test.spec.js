import Vue from 'vue'
import Requirement from '../../src/components/page/Requirement.vue'

describe('Requirement',() =>{
  it('has a created hook',() =>{
    expect(typeof Requirement.created).toBe('function')
  })
})
