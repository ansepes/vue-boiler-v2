<template>
  <div v-show="loading">
    <div class="fullview">
      <div class="loading-spacer"></div>
      <vue-loading
        type="spiningDubbles"
        color="#f5f5f5"
        :size="{ width: '100px', height: '100px' }"
      >
      </vue-loading>
    </div>
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator'
import { VueLoading } from 'vue-loading-template'

import { LoadingModule } from '@/store/modules/loadingStore'

@Component({
  components: {
    VueLoading,
  },
})
export default class Loading extends Vue {
  get loading() {
    return LoadingModule.getLoading
  }
}
</script>

<style scoped>
.fullview {
  width: 100%;
  height: 100%;
  background: #00000040;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
}
.loading-spacer {
  height: 40%;
}
</style>
