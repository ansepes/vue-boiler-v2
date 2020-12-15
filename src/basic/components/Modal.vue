<template>
  <div>
    <!-- Infomation Modal -->
    <v-dialog v-model="infoState.isShow" max-width="500px">
      <v-card>
        <v-system-bar dark color="green darken-1" height="40px">
          <h1>{{ infoState.title }}</h1>
        </v-system-bar>
        <v-card-text class="mt-5">{{ infoState.message }}</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="closeInfoModal">OK</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- Warning Modal -->
    <v-dialog v-model="warnState.isShow" persistent max-width="500px">
      <v-card>
        <v-system-bar dark color="red darken-1" height="40px">
          <h1>{{ warnState.title }}</h1>
        </v-system-bar>
        <v-card-text class="mt-5">{{ warnState.message }}</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red darken-1" text @click="closeWarnModal">CLOSE</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- Confirm Modal -->
    <v-dialog v-model="confirmState.isShow" persistent max-width="500px">
      <v-card>
        <v-system-bar dark color="blue darken-1" height="40px">
          <h1>{{ confirmState.title }}</h1>
        </v-system-bar>
        <v-card-text class="mt-5">{{ confirmState.message }}</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" outlined @click="closeConfirmModalOK">OK</v-btn>
          <v-btn color="gray darken-1" text @click="closeConfirmModalCancel">Cancel</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { Component, Vue, Watch } from 'vue-property-decorator'
import { ModalModule } from '@/store/modules/modalStore'

@Component
export default class Modal extends Vue {
  get infoState() {
    return ModalModule.getInfoState
  }

  get warnState() {
    return ModalModule.getWarnState
  }

  get confirmState() {
    return ModalModule.getConfirmState
  }

  closeInfoModal() {
    ModalModule.closeInfoModal()
  }

  closeWarnModal() {
    ModalModule.closeWarnModal()
  }

  closeConfirmModalOK() {
    ModalModule.closeConfirmOK()
  }

  closeConfirmModalCancel() {
    ModalModule.closeConfirmCancel()
  }

  @Watch('infoState')
  onChangeInfoState(to) {
    console.log(to)
  }
}
</script>
