<template>
    <div>
      <ul class="University">
        <li v-for="(item,index) in school" @click="University(item)">{{item.name}}</li>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'model1',
  data () {
    return {
      name: 'University',
      isshow: false,
      school: [
        {'name': '清华大学'},
        {'name': '北京大学'},
        {'name': '斯坦福大学'},
        {'name': '加利福尼亚大学'}
      ]
    }
  },
  methods: {
    University (item) {
    	this.name = item.name
    	// childByValue是在父组件on监听的方法
        // 第二个参数this.childValue是需要传的值
        this.$emit('emit', this.name,this.isshow)
    }
  }
}
</script>

<style scoped>
.University{
width: 100%;
padding: .25rem 0rem;
background: aliceblue;
font-size: .4rem;
}
.University li {
	padding: .05rem;
}
</style>
