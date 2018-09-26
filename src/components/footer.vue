<template>
  <div>
    <ul class="footer">
      <li><router-link to="/Stickyfooter"><i> <img src="../assets/头戴式耳机.png"/> </i> <br/>one</router-link></li>
      <li><router-link to="/test"><i> <img src="../assets/头戴式耳机.png"/> </i> <br/>tow</router-link></li>
      <li><router-link to="/parent"><i> <img src="../assets/头戴式耳机.png"/> </i> <br/>there</router-link></li>
      <li><router-link to="/fu"><i> <img src="../assets/头戴式耳机.png"/> </i> <br/> four</router-link></li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'myfooter',
//props: [
//  'haha'
//],
  data () {
    return {
      name: 'foote'
    }
  },
  methods: {
  }
}
</script>

<style scoped>
.footer{
	border-top: .01rem solid gainsboro;
  width: 100%;
  display: flex;
  text-align:center;
  position: fixed;
  bottom: 0rem;
  background: white;
  padding: .2rem 0rem;
}
  .footer li{
    text-align:center;
    width: 25%
  }
.footer li img{
  width: 0.5rem
}
a{
color: black;
text-decoration: none;
}
</style>
