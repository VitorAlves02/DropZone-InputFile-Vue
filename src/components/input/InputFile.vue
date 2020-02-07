<template>
  <div>
    <div id="file-drag-drop">
      <form ref="fileform">
        <span class="drop-files"
          ><v-icon x-large color="darken-200"
            >mdi-arrow-up-bold-box-outline</v-icon
          >
        </span>
      </form>
    </div>
    <div v-for="(file, key) in files" class="file-listing" :key="key">
      <img class="preview" v-bind:ref="'preview' + parseInt(key)" />
      {{ file.name }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dragAndDropCapable: false,
      files: []
    };
  },

  methods: {
    determineDragAndDropCapable() {
      var div = document.createElement("div");

      return (
        ("draggable" in div || ("ondragstart" in div && "ondrop" in div)) &&
        "FormData" in window &&
        "FileReader" in window
      );
    }
  },

  mounted() {
    this.dragAndDropCapable = this.determineDragAndDropCapable();

    if (this.dragAndDropCapable) {
      [
        "drag",
        "dragstart",
        "dragend",
        "dragover",
        "dragenter",
        "dragleave",
        "drop"
      ].forEach(
        function(evt) {
          this.$refs.fileform.addEventListener(
            evt,
            function(e) {
              e.preventDefault();
              e.stopPropagation();
            }.bind(this),
            false
          );
        }.bind(this)
      );

      this.$refs.fileform.addEventListener(
        "drop",
        function(e) {
          for (let i = 0; i < e.dataTransfer.files.length; i++) {
            this.files.push(e.dataTransfer.files[i]);
          }
        }.bind(this)
      );
    }
  }
};
</script>

<style>
form {
  display: block;
  height: 400px;
  width: 400px;
  background: #ccc;
  margin: auto;
  margin-top: 40px;
  text-align: center;
  line-height: 400px;
  border-radius: 4px;
}

div.file-listing {
  width: 400px;
  margin: auto;
  padding: 10px;
  border-bottom: 1px solid #ddd;
}

div.file-listing img {
  height: 100px;
}
</style>
