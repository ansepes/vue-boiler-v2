import { VuexModule, getModule, Module, Mutation, Action } from 'vuex-module-decorators'
import PromiseUtil from '@/basic/utils/promiseUtil'
import store from '@/store'

// import types
import { IModalState, IModalViewState, ModalCloseButtonTypes } from '@/store/types'

const createInitState = () => {
  return {
    isShow: false,
    title: '',
    message: '',
  }
}

@Module({ dynamic: true, store, name: 'modalStr', namespaced: true })
class ModalStore extends VuexModule implements IModalState {
  info: IModalViewState = createInitState()
  warn: IModalViewState = createInitState()
  confirm: IModalViewState = createInitState()

  get getInfoState() {
    return this.info
  }

  get getWarnState() {
    return this.warn
  }

  get getConfirmState() {
    return this.confirm
  }

  @Mutation
  SET_INFO({ isShow, title, message, onClose }: IModalViewState) {
    this.info.isShow = isShow
    this.info.title = title
    this.info.message = message
    this.info.onClose = onClose
  }

  @Mutation
  SET_WARN({ isShow, title, message, onClose }: IModalViewState) {
    this.warn.isShow = isShow
    this.warn.title = title
    this.warn.message = message
    this.warn.onClose = onClose
  }

  @Mutation
  SET_CONFIRM({ isShow, title, message, onClose }: IModalViewState) {
    this.confirm.isShow = isShow
    this.confirm.title = title
    this.confirm.message = message
    this.confirm.onClose = onClose
  }

  @Action({})
  openInfoModal({ title = 'Infomation', message }: { title?: string; message: string }) {
    const { promise, resolve, reject } = PromiseUtil.createDifferd<ModalCloseButtonTypes>()

    this.SET_INFO({
      isShow: true,
      title,
      message,
      onClose: { resolve, reject },
    })

    return promise
  }

  @Action
  closeInfoModal() {
    const { resolve } = this.info.onClose || {}

    this.SET_INFO({
      isShow: false,
      title: '',
      message: '',
    })

    if (resolve) resolve(ModalCloseButtonTypes.OK)
  }

  @Action({})
  openWarnModal({ title = 'Error', message }: { title?: string; message: string }) {
    // const title = ttl || 'Error'
    const { promise, resolve, reject } = PromiseUtil.createDifferd<ModalCloseButtonTypes>()

    this.SET_WARN({
      isShow: true,
      title,
      message,
      onClose: { resolve, reject },
    })

    return promise
  }

  @Action
  closeWarnModal() {
    const { resolve } = this.warn.onClose || {}

    this.SET_WARN({
      isShow: false,
      title: '',
      message: '',
    })

    if (resolve) resolve(ModalCloseButtonTypes.Close)
  }

  @Action({})
  openConfirmModal({ title = 'Confirm', message }: { title?: string; message: string }) {
    const { promise, resolve, reject } = PromiseUtil.createDifferd<ModalCloseButtonTypes>()

    this.SET_CONFIRM({
      isShow: true,
      title,
      message,
      onClose: { resolve, reject },
    })

    return promise
  }

  @Action
  closeConfirmOK() {
    const { resolve } = this.confirm.onClose || {}

    this.SET_CONFIRM({
      isShow: false,
      title: '',
      message: '',
    })

    if (resolve) resolve(ModalCloseButtonTypes.OK)
  }

  @Action
  closeConfirmCancel() {
    const { resolve } = this.confirm.onClose || {}

    this.SET_CONFIRM({
      isShow: false,
      title: '',
      message: '',
    })

    if (resolve) resolve(ModalCloseButtonTypes.Cancel)
  }
}

export const ModalModule = getModule(ModalStore)
