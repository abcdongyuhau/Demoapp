<template>
    <div>
      <myhead left='返回' title="school"></myhead>
      <ul class="tes_ul">
        <li @click="show">
          <p>选择大学</p>
          <p style="color: gainsboro;text-align: right;">{{school}}</p>
        </li>
      </ul>
      <university @emit='emit' v-show="isshow"></university>

      <myfooter/>

    </div>

</template>

<script>
import myhead from '../components/head'
import myfooter from '../components/footer'
import University from '../components/model1'
export default {
  name: 'test',
  components: {
    myhead,
    myfooter,
    University
  },
  data () {
    return {
      school: '请选择大学',
      isshow: false,
    }
  },
  methods: {
    emit (childValue) {
    	this.school = childValue
    },
    show () {
    	this.isshow = ! this.isshow
    }
  }
}
</script>

<style scoped>
div{
  font-size: .3rem;
}
.tes_ul{
width: 100%;
display: flex;
font-size: .35rem;
}
.tes_ul li{
width: 100%;
display: flex;
justify-content: space-between;
}
.tes_ul li p{
width: 50%;
}
</style>
