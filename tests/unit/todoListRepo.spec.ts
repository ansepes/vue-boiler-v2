// import { shallowMount } from '@vue/test-utils'
import { TodoListRepo } from '@/api/modules/todoListRepo'

describe('todoListRepo.ts', () => {
  it('get', async () => {
    const result = await TodoListRepo.getAll()
    // console.log(response)

    expect(result.status).toEqual(200)
  })

  it('getBy', async () => {
    const result = await TodoListRepo.getBy('1')
    // console.log(response)

    expect(result.status).toEqual(200)
  })

  it('post', async () => {
    const payload = {
      id: '10',
      todo: 'test',
      isDone: false,
    }
    const result = await TodoListRepo.post(payload)
    // console.log(response)

    expect(result.status).toEqual(201)
  })

  it('put', async () => {
    const payload = {
      id: '1',
      todo: 'test',
      isDone: false,
    }
    const result = await TodoListRepo.put(payload)
    // console.log(response)

    expect(result.status).toEqual(200)
  })

  it('err', async () => {
    const result = await TodoListRepo.err()
    // console.log(response)

    expect(result.status).toEqual(404)
  })
})
