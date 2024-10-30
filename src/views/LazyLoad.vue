<template>
    <img v-lazy="{
        src: 'https://picsum.photos/200/300',
        error: 'https://via.placeholder.com/350x150?text=Error',
        loading: 'sample.jpg',
        delay: 500
    }"/> 
</template>
  
<script lang="ts" setup>
</script>
  
<style scoped>
</style>
  