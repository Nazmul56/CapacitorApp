<template>
  <div class="q-pa-md q-gutter-sm">
    <q-btn label="Alert" color="primary" @click="alert = true" />
    <q-btn label="Prompt" color="primary" @click="prompt = true" />
    <q-btn label="Dialog Capacitor" color="primary" @click="showAlertDialog" />
    <q-btn label="Set Cookie" color="primary" @click="setCookies " />
    <q-btn label="Get Cookie" color="primary" @click="getCookies" />
    <q-btn label="Biometric" color="primary" @click="performBiometricVerificatin" />
    <q-btn label="Take Picture" color="primary" @click="getCameraPicture" />

    <q-btn label="Set name in Pref" color="primary" @click="setNameInPreference" />
    <q-btn label="Get name from Pref" color="primary" @click="checkNameInPreference " />
    <q-btn label="Remove name Capacitor" color="primary" @click="removeName" />
    <q-btn label="Register FCM" color="primary" @click="registerNotifications" />
    <q-btn label="FCM Listener" color="primary" @click="addListeners" />

    <q-btn label="Login page" color="primary" @click="moveToAnotherPage" />

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
import { Camera, CameraResultType } from '@capacitor/camera'
import { Dialog } from '@capacitor/dialog'
import { Preferences } from '@capacitor/preferences'
import { PushNotifications } from '@capacitor/push-notifications'

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
    // Set cookies
    getCookies () {
      const value = Cookies.get('cookie_name')
      console.log('get cookie: ' + value)
    },

    // Get cookies
    setCookies () {
      const value = 'cbm_cookie'
      Cookies.set('cookie_name', value)
      console.log('set cookie: ' + value)
    },

    async showAlertDialog () {
      await Dialog.alert({
        title: 'Stop',
        message: 'this is an error'
      })
    },

    async setNameInPreference () {
      await Preferences.set({
        key: 'name',
        value: 'Max'
      })
    },

    async checkNameInPreference () {
      const { value } = await Preferences.get({ key: 'name' })

      console.log(`Hello ${value}!`)
    },

    async removeName () {
      await Preferences.remove({ key: 'name' })
    },

    async getCameraPicture () {
      console.log(' Taking pic function call')

      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: true,
        resultType: CameraResultType.Uri
      })

      console.log('Inside Tsking pic')
      // image.webPath will contain a path that can be set as an image src.
      // You can access the original file using image.path, which can be
      // passed to the Filesystem API to read the raw data of the image,
      // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
      const imageUrl = image.webPath
      console.log('Image Url: ' + imageUrl)
    },

    async addListeners () {
      await PushNotifications.addListener('registration', token => {
        console.info('Registration token: ', token.value)
      })

      await PushNotifications.addListener('registrationError', err => {
        console.error('Registration error: ', err.error)
      })

      await PushNotifications.addListener('pushNotificationReceived', notification => {
        console.log('Push notification received: ', notification)
      })

      await PushNotifications.addListener('pushNotificationActionPerformed', notification => {
        console.log('Push notification action performed', notification.actionId, notification.inputValue)
      })
    },
    async registerNotifications () {
      let permStatus = await PushNotifications.checkPermissions()

      if (permStatus.receive === 'prompt') {
        permStatus = await PushNotifications.requestPermissions()
      }

      if (permStatus.receive !== 'granted') {
        throw new Error('User denied permissions!')
      }

      await PushNotifications.register()
    },
    moveToAnotherPage () {
      this.$router.push('login')
    }
    /* async getDeliveredNotifications () {
      const notificationList = await PushNotifications.getDeliveredNotifications()
      console.log('delivered notifications', notificationList)
    } */
  }
}
</script>
