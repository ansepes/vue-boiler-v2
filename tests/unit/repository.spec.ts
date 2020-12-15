// import { shallowMount } from '@vue/test-utils'
import { repository } from '@/api'

describe('Repository.ts', () => {
  it('base url', () => {
    console.log(repository)

    expect(repository.defaults.baseURL || '').toMatch(
      'http://my-json-server.typicode.com/kazkaz613/my-json'
    )
  })
})
