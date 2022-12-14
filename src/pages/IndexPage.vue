<template>
  <div class="q-pa-md q-gutter-sm">
    <q-btn label="Alert" color="primary" @click="alert = true" />
    <q-btn label="Set Cookie" color="primary" @click="setCookies " />
    <q-btn label="Get Cookie" color="primary" @click="getCookies" />
    <q-btn label="Prompt" color="primary" @click="prompt = true" />
    <q-btn label="Biometric" color="primary" @click="performBiometricVerificatin" />

    <q-dialog v-model="alert">
      <q-card>
        <q-card-section>
          <div class="text-h6">Alert</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis perferendis totam, ea at omnis vel numquam exercitationem aut, natus minima, porro labore.
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="OK" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <q-dialog v-model="confirm" persistent>
      <q-card>
        <q-card-section class="row items-center">
          <q-avatar icon="signal_wifi_off" color="primary" text-color="white" />
          <span class="q-ml-sm">You are currently not connected to any network.</span>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Cancel" color="primary" v-close-popup />
          <q-btn flat label="Turn on Wifi" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <q-dialog v-model="prompt" persistent>
      <q-card style="min-width: 350px">
        <q-card-section>
          <div class="text-h6">Your address</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input dense v-model="address" autofocus @keyup.enter="prompt = false" />
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="Cancel" v-close-popup />
          <q-btn flat label="Add address" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { NativeBiometric, BiometryType } from 'capacitor-native-biometric'
import { Cookies } from 'quasar'

defineComponent({
  name: 'IndexPage'
})

export default {
  setup () {
    return {
      alert: ref(false),
      prompt: ref(false),
      address: ref('')
    }
  },
  methods: {
    async performBiometricVerificatin () {
      const result = await NativeBiometric.isAvailable()

      // Biometric type
      console.log('Biometric type id:' + result.biometryType)
      switch (result.biometryType) {
        case BiometryType.FACE_ID:
          console.log('Biometric type face id')
          break
        case BiometryType.FINGERPRINT:
          console.log('Biometric type finger print')
          break
        case BiometryType.TOUCH_ID:
          console.log('Biometric type touch id')
          break
        case BiometryType.FACE_AUTHENTICATION:
          console.log('Biometric type face authentication')
          break
        default:
          console.log('Biometric type invaild')
      }

      // Check is Biometric is available
      if (!result.isAvailable) {
        console.log('Biometric not available: ')
        return
      } else {
        console.log('Biometric Available')
      }

      // Wait for finger brint verification
      const verified = await NativeBiometric.verifyIdentity({
        reason: 'For easy log in',
        title: 'Log in',
        subtitle: 'Maybe add subtitle here?',
        description: 'Maybe a description too?'
      })
        .then(() => true)
        .catch(() => false)

      if (verified) {
        console.log('Verified')
      } else {
        console.log('UN Verified')
        return
      }

      const credentials = await NativeBiometric.getCredentials({
        server: 'www.example.com'
      })
      console.log(' Credential: ' + credentials.password)
    },
    getCookies () {
      const value = Cookies.get('cookie_name')
      console.log('cookie: ' + value)
    },
    setCookies () {
      const value = 'cbm_cookie'
      Cookies.set('cookie_name', value)
      console.log('set cookie: ' + value)
    }
  }
}
</script>
