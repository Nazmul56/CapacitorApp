<template>
  <div class="container bg-brand-800 font-color-white">
    <div class="row d-flex form-wrapper">
      <FormLoginLayout>
        <template #imageLogin>
          <FormSideImage image="/img/login.png" header="NICE TO SEE YOU AGAIN"
            content="We’re glad to have you with us as we expand the beautiful horizons of the fashion world." />
        </template>
        <template #formLogin>
          <LoginForm />
        </template>
      </FormLoginLayout>
    </div>
  </div>
</template>

<script>
import FormLoginLayout from '../components/layouts/FormLoginLayout.vue'
import LoginForm from '../components/login/LoginForm.vue'
import FormSideImage from '../components/layouts/FormSideImage.vue'

export default {
  name: 'Landing-Main',
  components: {
    LoginForm,
    FormLoginLayout,
    FormSideImage
  },
  methods: {
    // This will be handled by the api not the state.
    // registrationSuccess(){
    // this.showComponent = 'twoFactAuthSection';
    // }
  }
}
</script>
