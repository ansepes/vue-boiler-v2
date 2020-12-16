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
import { todoListStoreModule } from '@/store/modules/todoListStore'
import { modalStoreModule } from '@/store/modules/modalStore'
import { ModalCloseButtonTypes } from '@/store/types'

const VTodoList = () => import(/* webpackChunkName: "vTodoList" */ '@/components/VTodoList.vue')

@Component({
  components: {
    VTodoList,
  },
})
export default class TodoList extends Vue {
  get getTodos() {
    return todoListStoreModule.getTodos
  }

  get getNewTodo() {
    return todoListStoreModule.getNewTodo
  }

  created() {
    todoListStoreModule.fetchTodoList()
  }

  invertIsDone(index: number) {
    todoListStoreModule.invertIsDone(index)
  }

  inputNewTodo(value: string) {
    todoListStoreModule.setNewTodo(value)
  }

  async addTodo(value: string) {
    if (!value) return

    const modalCloseButton: ModalCloseButtonTypes = await modalStoreModule.openConfirmModal({
      message: '登録を実行しますか',
    })

    if (modalCloseButton === ModalCloseButtonTypes.OK) {
      await todoListStoreModule.addTodo(value)
      todoListStoreModule.setNewTodo('')
      const result = await modalStoreModule.openInfoModal({
        title: '登録完了',
        message: '登録が完了しました。',
      })
      console.log(`added: ${result}`)
    }
  }

  delTodo(index: number) {
    todoListStoreModule.delTodo(index)
  }

  clearDoneTodo() {
    todoListStoreModule.clearDoneTodo()
  }
}
</script>
