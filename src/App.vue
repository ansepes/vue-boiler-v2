<template>
  <v-app>
    <Modal></Modal>
    <Loading></Loading>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>
      <v-spacer />
      <v-toolbar-items>
        <v-btn text to="/">Home</v-btn>
        <v-btn text to="/about">About</v-btn>
        <v-btn text to="/todo">Todo</v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-content>
      <router-view />
    </v-content>
    <v-content>
      <v-footer color="primary" dark absolute>
        <v-col class="text-center caption"
          ><span>Copyright (C) xxxxx Corporation Inc. All Right Reserved.</span></v-col
        >
      </v-footer>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
// import HelloWorld from './components/HelloWorld.vue'
import Modal from '@/basic/components/Modal.vue'
import Loading from '@/basic/components/Loading.vue'
import { LoadingModule } from '@/store/modules/loadingStore'

@Component({
  components: {
    Loading,
    Modal,
  },
})
export default class App extends Vue {
  // getter
  get loading() {
    return LoadingModule.getLoading
  }

  // methods
  toHome() {
    if (this.$router.currentRoute.path !== '/') {
      this.$router.push('/')
    }
  }
}
</script>
