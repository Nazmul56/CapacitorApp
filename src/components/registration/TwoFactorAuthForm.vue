<template>
    <div class="bs-5">
        <div class="d-flex align-items-center justify-content-center flex-column form-section-right h-100">
            <div class="auth-wrapper p-4 d-flex justify-content-center align-items-center flex-column mt-auto w-100"
                style="margin-bottom: 70px;">
                <customIcon icon="cloud" label="Cloud Icon" class="auth-wrapper-icon" />
                <h1 class="mb-3 text-center font-xl">Two Factor Authentication</h1>
                <p class="mb-3 text-center font-sm">A message with a verification code has been sent to your device.</p>
                <p class="mb-3 text-center font-weight-bold font-xxs">Enter the code to continue.</p>
                <div class="d-flex align-items-center justify-content-center code-input-single my-4 px-1">
                    <input id="search-code-one" required v-model="code" type="text" class="form-control"
                        autocomplete="off" maxlength="6" role="note" data-lpignore="true" />
                </div>
            </div>

            <div class="d-flex button-wrapper w-100 mt-auto mb-0">
                <a @click="resendOTP" class="btn btn-dark font-color-white w-100 me-1 px-4">Resend code</a>
                <a @click="submitOTP" class="btn btn-light font-color-black w-100 ms-1 px-4">Continue</a>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import customIcon from '../general/customIcon.vue'
import { OTPHandler, OTPResendCode } from '../../service/authentication'
// // import { useToast } from "vue-toastification";;
import { apiBaseUrl } from '~~/const/config'
import { useQuasar } from 'quasar'
import { usingToast } from '~~/utils/toastUtils'

export default {
  props: [
    'direction',
    'imagePath',
    'type',
    'heading',
    'description',
    'btnText',
    'role'
  ],
  components: {
    customIcon
  },
  data () {
    return {
      code: '',
      terms: true
    }
  },
  setup () {
    // const toast = useToast();
    const q = useQuasar()
    return { q }
  },
  methods: {
    formVerification (errorResponse) {
      this.validation_errors = {}
      if (errorResponse.response.data.message) {
        // this.toast.error(errorResponse.response.data.message)
        //         this.q.notify({
        //     message: errorResponse.response.data.message,
        //     color: "red",
        //     position: "top",
        // });
        usingToast('error', errorResponse.response.data.message)
      } else if (errorResponse.response.data.errors) {
        for (const err in errorResponse.response.data.errors) {
          this.validation_errors[err] = true
          // this.toast.error(errorResponse.response.data.errors[err][0]);
          //             this.q.notify({
          //     message: errorResponse.response.data.errors[err][0],
          //     color: "red",
          //     position: "top",
          // });
          usingToast('error', errorResponse.response.data.errors[err][0])
        }
      }
    },
    async submitOTP () {
      const code = this.code
      if (code == '') {
        // this.toast.error('Code is empty.');
        //         this.q.notify({
        //     message: "Code is empty.",
        //     color: "red",
        //     position: "top",
        // });
        usingToast('error', 'Code is empty.')
        return
      }
      try {
        await OTPHandler(code)
      } catch (error) {
        this.formVerification(error)
      }
    },
    async resendOTP () {
      try {
        await OTPResendCode()
      } catch (error) {
        this.formVerification(error)
      }
    }
  }
}
</script>

<style lang="scss">
@import "../../assets/style/global.scss";

.auth-wrapper {
    border: 1px solid color("gray-600");
    padding: 15px;

    &-icon {
        max-width: 100px;
    }

    i {
        font-size: 60px;
    }

    h1 {
        // @extend .font-lg;
    }

    p {
        // @extend .font-base;
    }

    .code-input-single {
        gap: 16px;

        input {
            background-color: color('white-10');
            border: unset;
            height: 36px;
            color: color("brand-100");
            text-align: center;
            max-width: 140px;
            // @extend .font-xs;

            &.is-invalid {
                border: 1px solid;
                border-color: color("red-600");
            }
        }
    }

}
</style>
