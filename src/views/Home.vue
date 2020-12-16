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
import { counterStoreModule } from '@/store/modules/counterStore'
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
    return counterStoreModule.incrementCounter
  }

  get decrementCounter() {
    return counterStoreModule.decrementCounter
  }

  increment() {
    counterStoreModule.SET_INCREMENT_COUNTER(counterStoreModule.incrementCounter + 1)
  }

  decrement() {
    counterStoreModule.SET_DECREMENT_COUNTER(counterStoreModule.decrementCounter - 1)
  }

  increment100() {
    counterStoreModule.increment100()
  }

  decrement100() {
    counterStoreModule.decrement100()
  }

  resetCounter() {
    counterStoreModule.resetCounter()
  }
}
</script>
