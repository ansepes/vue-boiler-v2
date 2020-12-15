import { IApiResponse } from '@/basic/types'

class RepoUtililty {
  public isSuccess(responseCode: number): boolean {
    return `${responseCode}`.startsWith('2')
  }

  public toResult(response: any): IApiResponse {
    return {
      hasError: !this.isSuccess(response.status),
      data: response.data || {},
      status: response.status || -1,
      response,
    }
  }
}

export const RepoUtil = new RepoUtililty()

export const ApiResult = (target: any, propKey: string, desc: PropertyDescriptor) => {
  const method = desc.value
  desc.value = async function() {
    const res = await Reflect.apply(method, this, arguments)
    return RepoUtil.toResult(res)
  }
}
