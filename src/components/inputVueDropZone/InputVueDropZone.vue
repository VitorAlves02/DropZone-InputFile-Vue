<template>
  <vue-dropzone id="drop1" :options="dropOptions"></vue-dropzone>
</template>

<script>
import vueDropzone from "vue2-dropzone";
import "vue2-dropzone/dist/vue2Dropzone.min.css";

export default {
  data: () => ({
    dropOptions: {
      url: "https://httpbin.org/post",
      addRemoveLinks: true
    }
  }),
  components: {
    vueDropzone
  }
};
</script>

<style scoped></style>
