<template>
    <img v-lazy="{
        src: lazyOptions.src,
        lifecycle: lazyOptions.lifecycle,
        /*error: 'https://via.placeholder.com/350x150?text=Error',*/
        /*loading: 'sample.jpg',*/
        delay: lazyOptions.delay,
    }"/> 
    <h1>Texto</h1>
</template>
  
<script lang="ts" setup>
    import { ref, VNode } from 'vue'

    const lazyOptions = ref({
        src: 'https://picsum.photos/200/300',
        delay: 500,
        lifecycle: {
            loading: (el:VNode) => console.log('loading: ',el),
            error: (el:VNode) => console.log('error: ',el),
            loaded: (el:VNode) => console.log('loaded: ',el),
        }
    })
</script>
  
<style scoped>
    img[lazy=loading] {
        background: blue;
        width: 300px;
    }
    img[lazy=loaded] {
        background: green;
        width: 300px;
        
    }

    
</style>
  