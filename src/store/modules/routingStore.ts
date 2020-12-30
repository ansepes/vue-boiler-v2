import { VuexModule, getModule, Module, Mutation, Action } from 'vuex-module-decorators'
import store from '@/store'

// import types
import { IRoutingState } from '@/store/types'

@Module({ dynamic: true, store, name: 'routingStr', namespaced: true })
class RoutingStore extends VuexModule implements IRoutingState {
  toPath: string | undefined = undefined

  get getToPath() {
    return this.toPath
  }

  // mutation
  @Mutation
  SET_INFO(toPath: string | undefined) {
    this.toPath = toPath
  }

  // action
  @Action
  moveToRoot() {
    this.SET_INFO('/')
  }

  @Action
  reset() {
    this.SET_INFO(undefined)
  }
}

export const routingStoreModule = getModule(RoutingStore)
