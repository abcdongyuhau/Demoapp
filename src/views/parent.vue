<template>
  <div>
  	<myhead left="返回" title="parent" right="abc" ></myhead>
    父组件:
    <span>{{name}}</span>
    <br>
    <br>
    <!-- 引入子组件 定义一个on的方法监听子组件的状态-->
    <child v-on:childByValue="childByValue"></child>
  </div>
</template>
<script>
  import child from '../components/emit'
  import myhead from '../components/head'
  export default {
    components: {
      child,
      myhead
    },
    data () {
      return {
        name: ''
      }
    }, 
    methods: {
      childByValue: function (childValue) {
        // childValue就是子组件传过来的值
        this.name = childValue
      }
    }
  }
</script>