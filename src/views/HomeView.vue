<template>
    <h1>Home View</h1>
    <LazyLoad/>
    <ParentComponent/>
</template>
  
<script lang="ts" setup>
  import ParentComponent from '@/components/ParentComponent.vue';
  import LazyLoad from './LazyLoad.vue';
</script>
  
<style scoped>
</style>
  