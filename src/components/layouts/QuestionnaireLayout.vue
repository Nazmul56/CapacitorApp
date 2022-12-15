<template>
    <div class="bs-5">
        <div class="d-flex align-items-center form-section-right">
            <div class="right-wrapper">
                <div class="row pt-2 selection-process-back-icon-box">
                    <form @submit.prevent="$emit('form-submit')" novalidate>
                        <slot name="form"></slot>
                        <div class="d-flex mt-3 button-wrapper">
                            <a type="button" class="btn btn-dark text-white px-4 border border-white"
                                style="border: 1px solid white !important" @click="this.$router.go(-1)">
                                Back
                            </a>
                            <button class="btn btn-light font-color-black px-4" type="submit">
                                Continue
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
}
</script>

<style lang="scss">

</style>
