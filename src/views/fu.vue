<template>
    <div>
      <myheader left='返回' title="闪烁"></myheader>
        <v-girl-group
            :girls="aGirls" :masage="name">
        </v-girl-group>
    </div>
</template>
<script>
import myheader from '../components/head'
import vGirlGroup from './GirlGroup'

export default {
    name: 'girl',
    components: {
      myheader,
      vGirlGroup
    },
    data () {
        return {
        	name: "文职",
            aGirls:[{
                name:'小丽',
                age:22
            },{
                name:'小美',
                age:21
            },{
                name:'小荷',
                age:24
            }]
        }
    }
}

</script>
