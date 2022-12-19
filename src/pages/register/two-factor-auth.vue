<template>
    <div class="container bg-brand-800 font-color-white">
        <div class="row d-flex form-wrapper">
            <FormLayout>
                <template #image>
                    <FormSideImage
                        image="/img/reg_1.webp"
                        header="WE'RE GLAD YOU'VE DECIDED TO JOIN US"
                        content="Get ready to explore beautiful new horizons in the fashion world."
                    />
                </template>
                <template #form>
                    <TwoFactorAuthForm />
                </template>
            </FormLayout>
        </div>
    </div>
</template>

<script>
import FormLayout from '@/components/layouts/FormLayout.vue'
import FormSideImage from '~~/components/layouts/FormSideImage.vue'
import TwoFactorAuthForm from '~~/components/registration/TwoFactorAuthForm.vue'

export default {
  name: 'Landing-Main',
  components: {
    TwoFactorAuthForm,
    FormLayout,
    FormSideImage
  }
}
</script>
