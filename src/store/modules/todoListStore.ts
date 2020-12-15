import { VuexModule, getModule, Module, Mutation, Action } from 'vuex-module-decorators'
import store from '@/store'

import { TodoListRepo } from '@/api/modules/todoListRepo'
import { ITodoItemState, ITodoListState } from '@/store/types'

@Module({ dynamic: true, store, name: 'todoListStr', namespaced: true })
class TodoListStore extends VuexModule implements ITodoListState {
  // state
  todos: ITodoItemState[] = []

  newTodo: string = ''

  public get getTodos() {
    return this.todos
  }

  public get getNewTodo() {
    return this.newTodo
  }

  // mutation
  @Mutation
  private SET_TODO_LIST(list: ITodoItemState[]) {
    this.todos = list
  }

  @Mutation
  private INVERT_IS_DONE(index: number) {
    this.todos[index].isDone = !this.todos[index].isDone
  }

  @Mutation
  private ADD_TODO(newItem: ITodoItemState) {
    this.todos.push(newItem)
  }

  @Mutation
  private DEL_TODO(index: number) {
    this.todos.splice(index, 1)
  }

  @Mutation
  private CLEAR_DONE_TODO() {
    this.todos = this.todos.filter(todo => {
      return !todo.isDone
    })
  }

  @Mutation
  private SET_NEW_TODO(value: string) {
    this.newTodo = value
  }

  // action
  @Action
  public async fetchTodoList() {
    const { hasError, data } = await TodoListRepo.getAll()
    if (hasError) return
    this.SET_TODO_LIST(data)
  }

  @Action
  public invertIsDone(index: number) {
    this.INVERT_IS_DONE(index)
  }

  @Action
  public async addTodo(newTodo: string) {
    const newItem: ITodoItemState = {
      //   id: this.createNewId(),
      id: '12',
      todo: newTodo,
      isDone: false,
    }

    const { hasError } = await TodoListRepo.post(newItem)
    if (hasError) return

    this.ADD_TODO(newItem)
  }

  @Action
  public delTodo(index: number) {
    this.DEL_TODO(index)
  }

  @Action
  public clearDoneTodo() {
    this.CLEAR_DONE_TODO()
  }

  @Action
  public setNewTodo(newTodo: string) {
    this.SET_NEW_TODO(newTodo)
  }
}

export const TodoListModule = getModule(TodoListStore)
