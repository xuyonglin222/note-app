<template>
  <div class="note-list">
    <div class="app-name">
      <h3>记事本</h3>
    </div>
    <div class="btn-container">
      <el-button :type="show==='all'?'primary':'default'" @click="show='all'">All Notes</el-button>
      <el-button  :type="show==='favorite'?'primary':'default'" @click="show='favorite'" >Favorite</el-button>
    </div>
    <div class="list">
      <div class="item" v-for="item in notes" @click="setCurrent(item)" :class="{current:activeNote==item}">
        <p>{{item.title}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapActions} from 'vuex'
  export default {
    data() {
      return {
          show:'all'
      }
    },
    computed:{
      notes(){
        if(this.show==='favorite'){
          return this.$store.getters.notes.filter(item=> item.favorite)
        }else{
          return this.$store.getters.notes;
        }
      },
      activeNote(){
        return this.$store.getters.activeNote
      }
    },
    methods:mapActions(['setCurrent']),
  }
</script>

<style>
  .note-list {
    width: 375px;
    height: 100%;
    background-color: #F5F5F5;
    float: left;
  }

  .app-name {
    height: 130px;
  }

  h3 {
    line-height: 130px;
  }

  .btn-container {
    margin-bottom: 25px;
  }

  .list {
    background-color: #fff;
  }

  .item {
    width: 100%;
    height: 30px;
  }
  .item p{
    line-height: 30px;
    text-indent: 19px;
    text-align: left;
  }
  .item:hover{
    background-color: #F5F5F5;
    cursor: default;
  }
  .current{
    background-color: #409EFF;
    color:#fff;
  }
  .current:hover{
    background-color: #409EFF;
    color:#fff;
  }
</style>
