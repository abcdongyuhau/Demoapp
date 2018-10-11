<template>
    	<vue-drawer-layout ref="drawer" :content-drawable="false" id="app">
		          <div class="drawer-content" slot="drawer" style="background: white;height: 100%;" >
      				 <div class="text">
      				 	<img src="./assets/info_publish1.png" style="width: 100%;">
      				 	<ul class="clicklist" v-for="(item,$index) in list" @click="selectStyle (item, $index) " :class="{'active':item.active,'unactive':!item.active}">
      				 		<li>{{item.title}}</li>
      				 	</ul>
      				 	{{$t("message.title")}}
               {{$t('title')}}
      				 </div>
		          </div>
		          <div slot="content" style="height: 100%;">
		          	<router-view/>
				    </div>
		          </div>
		</vue-drawer-layout>
</template>

<script>
	import Vue from 'vue'
export default {
  name: 'App',
  data () {
  	return {
  		active: false,
  		list: [
	  		{ title: 'mescroll'},
	  		{ title: 'QQ钱包'},
	  		{ title: '个性装扮'},
	  		{ title: '我的收藏'},
	  		{ title: '我的相册'},
	  		{ title: '我的文件'}
  		]
  	}
  },
  methods: {
        selectStyle (item, index) {
        	if (index == 0) {
        		this.$router.push({name:'mescroll'})
        		//通过toggle设置vue-drawer-layout的true 和 false
        		this.$refs.drawer.toggle();
        	}
            this.$nextTick(function () {
                  this.list.forEach(function (item) {
                    Vue.set(item,'active',false);
                });
                Vue.set(item,'active',true);
            });
        },
    }
}
</script>

<style>
html,body {
	width: 100%;
	height: 100%;
}
*{
	font-size: .3rem;
	margin:0;
  padding:0;
}
  li{
    list-style: none;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
}
.clicklist li{
	padding: .2rem .6rem;
	font-size: .3rem;
}
.active{
    color:red;
}
.unactive{
    color:#000;
}
.icon{
    float: right;
    font-size:12px;
}

</style>
