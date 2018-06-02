<template>
  <div class="tool-bar">
    <div class="logo">
      <img src="./../assets/logo.png" alt="">
    </div>
    <div class="icon-container">
      <i class="el-icon-plus" @click="add">添加</i>
    </div>
    <div class="icon-container">
      <i class="el-icon-close" @click="deleteNote">删除</i>
    </div>

    <div class="icon-container">
      <i :class="classObj" @click="setFav">收藏</i>
    </div>
  </div>
</template>

<script>
    export default {
        data() {
            return {}
        },
      computed:{
        fav(){
          return this.$store.getters.activeNote.favorite;
        },
        classObj(){
          return {
            'el-icon-star-off':!this.fav,
            'el-icon-star-on':this.fav
          }
        }
      },
      methods:{
          add(){
            this.$store.dispatch('addNote')
          },
          setFav(){
            this.$store.dispatch('setFav')
        },
        deleteNote(){
            this.$store.dispatch('deleteNote')
        }
      }
    }
</script>

<style>

  .tool-bar{
    width:80px;
    background-color: #30414D;
    color: #767676;
    height:100%;
    float: left;
  }
  .logo{
    width:100%;
  }
  img{
    width:100%;
  }
  .icon-container{
    padding:8px 0;
  }
  i{
    color: rgba(124, 124, 124, 0.97);
    width: 100%;
    height:100%;
    line-height: 40px;
  }
  i:hover{
    color:#fff;
    transition: .5s;
    cursor: pointer;
  }
</style>
