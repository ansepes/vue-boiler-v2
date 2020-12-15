import { VuexModule, getModule, Module, Mutation, Action } from 'vuex-module-decorators'
import store from '@/store'

// import types
import { ILoadingState } from '@/store/types'

@Module({ dynamic: true, store, name: 'loadingStr', namespaced: true })
class LoadingStore extends VuexModule implements ILoadingState {
  loading = false

  get getLoading() {
    return this.loading
  }

  @Mutation
  SET_LOADING(value: boolean) {
    this.loading = value
  }

  @Action
  loadingOn() {
    this.SET_LOADING(true)
  }

  @Action
  loadingOff() {
    this.SET_LOADING(false)
  }
}

export const LoadingModule = getModule(LoadingStore)
