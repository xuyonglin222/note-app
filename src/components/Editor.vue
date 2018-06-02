<template>
  <div class="editor">
    <input type="text" v-model="activeNote.title" autofocus>
    <textarea v-model="activeNote.content"></textarea>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  export default {
    data() {
      return {}
    },
    computed:mapGetters(['activeNote'])
  }
</script>

<style>
  .editor {
    margin-left: 455px;
    height: 100%;
  }

  input, textarea {
    width: 100%;
    padding: 5px 8px;
    border: 1px;
    outline: none;
    font-size: 18px;
  }

</style>
