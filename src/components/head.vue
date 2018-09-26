<template>
    <div>
      <ul class="header">
        <li @click="returns">{{left}}</li>
        <li>{{title}}</li>
        <li>{{right}}</li>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'myhead',
  props: [
    'title',
    'left',
    'right'
  ],
  data () {
    return {
      name: 'myhead'
    }
  },
  methods: {
    returns () {
      history.go(-1)
    }
  }
}
</script>
<style scoped>
.header {
width: 100%;
justify-content: space-between;
background: antiquewhite;
display: flex;
padding: .2rem 0rem;
}
.header li{
width: 20%;
text-align: center;
}
</style>
