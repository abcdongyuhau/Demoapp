<template>
  <div>
    <myheader left="返回" title="stickyfooter"></myheader>
    <div class="swiper-container" id="swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <a v-on:click="showPreview($index,detail.imgs,swiperObj)">
            <figure class="wp-avatar banner">
              <img src="../assets/info_publish1.png"/>
            </figure>
          </a>
        </div>
        <div class="swiper-slide">
            <figure class="wp-avatar banner">
              <img src="../assets/info_publish2.png"/>
            </figure>
          <!--</a>-->
        </div>
        <div class="swiper-slide">
            <figure class="wp-avatar banner">
              <img src="../assets/info_publish3.png"/>
            </figure>
          <!--</a>-->
        </div>
        <div class="swiper-slide">
            <figure class="wp-avatar banner">
              <img src="../assets/info_publish4.png"/>
            </figure>
          <!--</a>-->
        </div>
        <div class="swiper-slide">
            <figure class="wp-avatar banner">
              <img src="../assets/info_publish5.png"/>
            </figure>
          <!--</a>-->
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
    <myfooter></myfooter>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.min.css';
import myfooter from './footer'
import myheader from './head'
export default {
  name: 'Stickyfooter',
  components: {
    myfooter,
    myheader
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted () {
  	 setTimeout(function () {
      var swiperObj=new Swiper('#swiper', {
        loop: true,
        pagination: '.swiper-pagination',
        autoplay: 1000,
        paginationClickable: true,
        autoplayDisableOnInteraction : false,    //默认为true 改为false 处理手动滑过以后不会自动轮播的问题
      });
    }, 100)
  }
}
</script>

<style scoped>

div{
  font-size:.3rem;
}
</style>
