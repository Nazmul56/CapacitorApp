<template>
  <form @submit.prevent="submitLogin" class="bs-5">
    <div class="d-flex align-items-center form-section-right mt-auto mb-auto">
      <div class="right-wrapper">
        <div class="form-group mb-3">
          <label class="mb-2 font-sm font-color-brand-500" for="loginEmail">Email</label>
          <input required v-model="login_form.email" type="email" id="loginEmail" class="form-control"
            autocomplete="off" />
        </div>
        <div class="form-group mb-3">
          <label class="mb-2 font-sm font-color-brand-500" for="loginPassword">
            <span>Password</span>
          </label>
          <input required v-model="login_form.password" id="loginPassword" type="password" class="form-control"
            autocomplete="off" />
        </div>
        <div class="form-group d-flex mt-auto mb-0">
          <span class="font-sm font-color-brand-500">
            <a href="#" class="text-decoration-none font-color-brand-500">Forgot password?</a>
          </span>
        </div>
      </div>
    </div>

    <div class="d-flex mt-3 button-wrapper">
      <a href="/" class="btn w-100 btn-dark font-color-white px-4"> Cancel </a>
      <button type="submit" class="btn w-100 btn-light font-color-black px-4">
        Continue
      </button>
    </div>
  </form>
</template>

<script>
// import { useToast } from 'vue-toastification';
import { loginHanadler } from '../../service/authentication'
// import { errorHanadler } from '../../service/error'
import { useQuasar, Cookies } from 'quasar'
// import { usingToast } from '../../utils/toastUtils'
import { Toast } from '@capacitor/toast'

export default {
  name: 'Registration-form-section',
  props: [
    'direction',
    'imagePath',
    'type',
    'heading',
    'description',
    'btnText',
    'role'
  ],
  components: {},
  setup () {
    const q = useQuasar()
    return { q }
  },
  data () {
    return {
      login_form: {
        email: '',
        password: ''
      },
      validation_errors: {}
    }
  },
  methods: {
    async submitLogin () {
      this.validation_errors = ''
      try {
        const { questionnaire, token } = await loginHanadler(
          this.login_form
        ) // Service for login handling.

        console.log('Login Api resp', questionnaire.token)
        this.setCookies(token)

        // Get token for test
        this.getCookies()

        // usingToast('success', 'Login Successful!')

        this.showToast('success' + 'Login Successful!')
        /* if (questionnaire === 1) {
          this.$router.push({
            path: '/wall'
          })
          // this.$router.push('login')
        } else {
          this.$router.push({
            path: '/questionnaire-start'
          })
        } */
      } catch (error) {
        console.log('Login Api err', error)
        // this.q.notify({
        //   message: errorHanadler(error),
        //   color: "red",
        //   position: "top",
        // });
        // usingToast('error', errorHanadler(error))
      }
    },
    // Set cookies
    getCookies () {
      const value = Cookies.get('token')
      console.log('get tooken: ' + value)
    },

    // Get cookies
    setCookies (value) {
      // const value = 'cbm_cookie'
      Cookies.set('token', value)
      console.log('set token: ' + value)
    },
    async showToast (textStr) {
      await Toast.show({
        text: textStr
      })
    }
  }
}
</script>
