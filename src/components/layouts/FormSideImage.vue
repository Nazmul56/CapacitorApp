<template>
    <div class="bs-5">
        <div class="position-relative px-0 d-none d-lg-block">
            <img class="img-fluid w-100 form-img" :src="`${image}`" />
            <div class="left-description bg-black-60 p-4">
                <h1 class="py-2 text-uppercase font-base-header font-color-white font-size-30px">{{header}}</h1>
                <p class="font-sm font-color-white ">{{content}}</p>
                <slot name="buttons"></slot>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  props: {
    image: String,
    header: String,
    content: String
  }
}
</script>
<style lang="scss">
    .left-description {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
    }
    .form-img {
        height: 700px !important;
        width: 100%;
        object-fit: cover;
    }
</style>
