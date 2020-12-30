<template>
  <div></div>
</template>

<script>
import { Component, Vue, Watch } from 'vue-property-decorator'
import { routingStoreModule } from '@/store/modules/routingStore'

@Component
export default class Routing extends Vue {
  get toPath() {
    return routingStoreModule.getToPath
  }

  @Watch('toPath')
  onChangeToPath(to) {
    this.move(to)
  }

  move(to) {
    if (to) {
      routingStoreModule.reset()
      this.$router.push(to)
    }
  }
}
</script>
