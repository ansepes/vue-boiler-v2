import { repository } from '@/api'
import { ApiResult } from '@/basic/utils/repoUtil'
import { IApiResponse } from '@/basic/types'
import { ITodoItemState } from '@/store/types'

const resouce = '/todoList'

class TodoListRepository {
  @ApiResult
  async getAll(): Promise<IApiResponse> {
    return await repository.get(`${resouce}?householdId=C000001`)
  }

  @ApiResult
  async getBy(id: string): Promise<IApiResponse> {
    return await repository.get(`${resouce}/${id}`)
  }

  @ApiResult
  async post(payload: ITodoItemState): Promise<IApiResponse> {
    return await repository.post(`${resouce}`, payload)
  }

  @ApiResult
  async put(payload: ITodoItemState): Promise<IApiResponse> {
    return await repository.put(`${resouce}/${payload.id}`, payload)
  }

  @ApiResult
  async err(): Promise<IApiResponse> {
    return await repository.get(`/dummy`)
  }
}

export const TodoListRepo = new TodoListRepository()
