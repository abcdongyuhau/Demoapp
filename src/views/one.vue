<template>
    <div>
      	<myhead left="返回" title="消息" right="更多" ></myhead>
      	<div class="content">
	        <input v-model="opt" @blur="add()"/>
	        <ul>
	          <li v-for="item in arr">
	            {{ item }}
	          </li>
	        </ul>
	    </div>
      <ul v-for="item in collectlist">
        <li>
          {{item.name}}
        </li>
      </ul>
        <myfooter ></myfooter>
    </div>
</template>

<script>
import axios from 'axios'
import util from '@/libs/util.js';
import myfooter from '../components/footer'
import myhead from '../components/head'
export default {
  name: 'one',
  components: {
    myfooter,
    myhead
  },
  data () {
    return {
      name: 'one',
      arr: [ '北京', '上海', '广东', '深圳' ],
      opt:'',
      searchPage:{
        name:'北京',
        age:"20",
        sex:'女'
      }
    }
  },
  methods:{
    add () {
      this.$set(this.arr, this.arr.length, this.opt)
    },
    CollectTableList () {
      //this.searchPage 是吧this.searchPage 的参数传递到app.js中
      this.$store.commit('CollectTableList',this.searchPage);
    }
  },
  mounted() {
    this.CollectTableList();
  },
  computed: {
    collectlist () {
      return this.$store.state.app.collectlist;
    }
  }
}
</script>

<style scoped>
.content {
	background: #F0F8FF;
	height: 100%;
	overflow: auto;
}

</style>
