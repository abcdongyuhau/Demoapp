<template>
    <div>
       <ul>
           <li v-for="(value, index) in girls">{{ index }} - {{ value.name }} - {{ value.age }}</li>
           <p>崔{{masage}}</p>
       </ul>
    </div>
</template>
<script>

export default {
    name: 'girl-group',
//  props:['masage']
    props: {
    	masage:"",
    	girls:{
    		type: Array,
            required: true
    	}
    }
}

</script>	