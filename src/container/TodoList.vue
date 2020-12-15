<template>
  <div>
    <VTodoList
      :todos="getTodos"
      :new-todo="getNewTodo"
      @clickTodo="invertIsDone"
      @inputNewTodo="inputNewTodo"
      @addTodo="addTodo"
      @delTodo="delTodo"
      @clearDoneTodo="clearDoneTodo"
    ></VTodoList>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { TodoListModule } from '@/store/modules/todoListStore'
import { ModalModule } from '@/store/modules/modalStore'
import { ModalCloseButtonTypes } from '@/store/types'

const VTodoList = () => import(/* webpackChunkName: "vTodoList" */ '@/components/VTodoList.vue')

@Component({
  components: {
    VTodoList,
  },
})
export default class TodoList extends Vue {
  get getTodos() {
    return TodoListModule.getTodos
  }

  get getNewTodo() {
    return TodoListModule.getNewTodo
  }

  created() {
    TodoListModule.fetchTodoList()
  }

  invertIsDone(index: number) {
    TodoListModule.invertIsDone(index)
  }

  inputNewTodo(value: string) {
    TodoListModule.setNewTodo(value)
  }

  async addTodo(value: string) {
    if (!value) return

    const modalCloseButton: ModalCloseButtonTypes = await ModalModule.openConfirmModal({
      message: '登録を実行しますか',
    })

    if (modalCloseButton === ModalCloseButtonTypes.OK) {
      await TodoListModule.addTodo(value)
      TodoListModule.setNewTodo('')
      const result = await ModalModule.openInfoModal({
        title: '登録完了',
        message: '登録が完了しました。',
      })
      console.log(`added: ${result}`)
    }
  }

  delTodo(index: number) {
    TodoListModule.delTodo(index)
  }

  clearDoneTodo() {
    TodoListModule.clearDoneTodo()
  }
}
</script>
