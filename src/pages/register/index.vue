<template>
    <div class="container bg-brand-800 font-color-white">
        <div class="d-flex form-wrapper align-items-center justify-content-center">
            <FormRegistrationLayout>
                <template #image>
                    <FormSideImage image="/img/reg_1.webp" header="WE'RE GLAD YOU'VE DECIDED TO JOIN US"
                        content="Get ready to explore beautiful new horizons in the fashion world." />
                </template>
                <template #form>
                    <RegistrationForm />
                </template>
            </FormRegistrationLayout>
        </div>
    </div>
</template>

<script>
import FormRegistrationLayout from '@/components/layouts/FormRegistrationLayout.vue'
import FormSideImage from '~~/components/layouts/FormSideImage.vue'
import RegistrationForm from '@/components/registration/RegistrationForm.vue'

export default {
  name: 'Landing-Main',
  components: {
    RegistrationForm,
    FormRegistrationLayout,
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
