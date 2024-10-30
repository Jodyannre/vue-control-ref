<template>
    <h1>Home View</h1>
    <LazyComponent/>
    <ParentComponent/>
</template>
  
<script lang="ts" setup>
  import ParentComponent from '@/components/ParentComponent.vue';
  import LazyComponent from '@/components/LazyComponent.vue';
</script>
  
<style scoped>
</style>
  