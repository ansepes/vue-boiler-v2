<template>
  <v-container>
    <v-row class="text-center">
      <TodoList></TodoList>
    </v-row>
  </v-container>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
const TodoList = () => import(/* webpackChunkName: "TodoList" */ '@/container/TodoList.vue')

@Component({
  components: {
    TodoList,
  },
})
export default class TodoPage extends Vue {}
</script>
