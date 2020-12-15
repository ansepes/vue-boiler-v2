import axios from 'axios'
import { LoadingModule } from '@/store/modules/loadingStore'
import { ModalModule } from '@/store/modules/modalStore'

const isDebug = process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test'

const repo = axios.create({
  baseURL: process.env.VUE_APP_API_ORIGIN,
})

const createMsg = (title: string, message: string) => {
  return {
    title,
    message,
  }
}

const ERR_MESGS = {
  UNEXPRECTED: createMsg('予期しないエラー', '予期しないエラーが発生しました。'),
  PARAMS: createMsg('アクセスエラー', 'パラメータエラーが発生しました。'),
  AUTHORIZATION: createMsg('アクセスエラー', '認証エラーが発生しました。'),
  SERVER_INTERNAL: createMsg('アクセスエラー', 'サーバーにてエラーが発生しました。'),
}

const showErrorMsg = async (msg: { title: string; message: string }, error: any) => {
  await ModalModule.openWarnModal(msg)
  if (isDebug) console.log(error)
}

repo.interceptors.request.use(request => {
  //   if (isDebug) performance.mark('start')
  LoadingModule.loadingOn()
  return request
})

repo.interceptors.response.use(
  // 2XX範囲内のステータスコード
  response => {
    if (isDebug) {
      console.log(JSON.stringify(response))
      // performance.mark('finish')
      // performance.measure('request-to-response', 'start', 'finish')
      //   const message = `${performance.getEntriesByName('request-to-response')[0].duration}`
      // Sentryでログを残すもよし
      // Sentry.captureMessage(message, Sentry.Severity.Debug);
    }
    LoadingModule.loadingOff()
    return response
  },
  // 2XX範囲外のステータスコード
  async error => {
    LoadingModule.loadingOff()

    if (!error.response) {
      await showErrorMsg(ERR_MESGS.UNEXPRECTED, error)
      return error
    }

    if (error.response.status === 400) {
      await showErrorMsg(ERR_MESGS.PARAMS, error)
    } else if (error.response.status === 401) {
      await showErrorMsg(ERR_MESGS.AUTHORIZATION, error)
    } else if (error.response.status === 500) {
      await showErrorMsg(ERR_MESGS.SERVER_INTERNAL, error)
    }
    return error.response
  }
)

export const repository = repo
