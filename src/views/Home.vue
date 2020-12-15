<template>
  <v-container>
    <v-row class="text-center">
      <div class="home">
        <p>ApiOrigin: {{ apiOrigin }}</p>
        <div>
          <button @click="increment100">increment 100!</button>
          <button @click="increment">increment 1</button>
        </div>
        increment counter: {{ incrementCounter }}
        <div>
          <button @click="decrement100">decrement 100!</button>
          <button @click="decrement">decrement 1</button>
        </div>
        decrement counter: {{ decrementCounter }}
        <div>
          <button @click="resetCounter">reset counter</button>
        </div>
        <HelloWorld />
      </div>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { CounterModule } from '@/store/modules/counterStore'
// @ is an alias to /src
const HelloWorld = () => import(/* webpackChunkName: "helloWorld" */ '@/components/HelloWorld.vue')

@Component({
  components: {
    HelloWorld,
  },
  computed: {
    apiOrigin() {
      return process.env.VUE_APP_API_ORIGIN
    },
  },
})
export default class Home extends Vue {
  get incrementCounter() {
    return CounterModule.incrementCounter
  }

  get decrementCounter() {
    return CounterModule.decrementCounter
  }

  increment() {
    CounterModule.SET_INCREMENT_COUNTER(CounterModule.incrementCounter + 1)
  }

  decrement() {
    CounterModule.SET_DECREMENT_COUNTER(CounterModule.decrementCounter - 1)
  }

  increment100() {
    CounterModule.increment100()
  }

  decrement100() {
    CounterModule.decrement100()
  }

  resetCounter() {
    CounterModule.resetCounter()
  }
}
</script>
