<template>
  <v-container>
    <v-row class="text-center">
      <v-text-field
        label="input todo"
        :value="newTodo"
        @input="value => handleInputNewTodo(value)"
      ></v-text-field>
      <div style="padding-left:10px; padding-top: 10px">
        <v-btn small color="primary" @click="handleAddTodo">add</v-btn>
        <v-btn small style="margin-left: 10px" @click="handleClearDoneTodo">clear done</v-btn>
      </div>
    </v-row>
    <v-row>
      <ul>
        <li
          v-for="(item, index) in todos"
          :key="index + item.todo"
          class="todoItem"
          style="padding-top: 10px"
        >
          <v-btn small @click="handleDelTodo(index)">del</v-btn>
          <span
            style="padding-left: 15px;"
            :class="item.isDone ? 'isDone' : ''"
            @click="handleClickTodo(index)"
            >{{ item.todo }}</span
          >
        </li>
      </ul>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from 'vue-property-decorator'
import { ITodoItemState } from '@/store/types'
// @input="newTodo = $event.target.value"
@Component
export default class VTodoList extends Vue {
  test(e: any) {
    console.log(e)
  }

  // props
  @Prop({ default: [] })
  todos!: ITodoItemState[]

  @Prop({ default: '' })
  newTodo!: string

  // emits
  @Emit('clickTodo')
  handleClickTodo(index: number) {
    return index
  }

  @Emit('inputNewTodo')
  handleInputNewTodo(value: string) {
    return value
  }

  @Emit('addTodo')
  handleAddTodo() {
    // const txt = this.newTodo
    return this.newTodo
  }

  @Emit('delTodo')
  handleDelTodo(index: number) {
    return index
  }

  @Emit('clearDoneTodo')
  handleClearDoneTodo() {}
}
</script>

<style scoped>
.todoItem {
  cursor: pointer;
  text-align: left;
}
.isDone {
  text-decoration: line-through;
}
</style>
