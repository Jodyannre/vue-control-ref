<template>
    <h1>Parent Component</h1>
    <ChildComponent ref="percentageComponent"/>
    <button @click="banco"> Añadir a cuenta bancaria </button>
</template>
  
<script lang="ts">
    // Option API
    import ChildComponent from './ChildComponent.vue';
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'ParentComponent',
        components: {
            ChildComponent
        },
        methods: {
            banco() {
                this.$refs.percentageComponent/*.recalulaPorcentaje()*/
            }
        }
    })


    // COmposition sin setup
    /*
    import ChildComponent from './ChildComponent.vue';
    import { ref, defineComponent } from 'vue';

    export default defineComponent({
        name: 'ParentComponent',
        components: {
            ChildComponent
        },
        setup() {
            const percentageComponent = ref(null);

            const banco = () => {
                percentageComponent.value.recalculaPorcentaje()
            }

            return {
                percentageComponent,
                banco
            }
        }
    })
    */
    
    // COmposition con setup
    /*
    import ChildComponent from './ChildComponent.vue';
    import { ref } from 'vue';

    const percentageComponent = ref(null);

    const banco = () => {
        percentageComponent.value.recalculaPorcentaje()
    }
    */


</script>
  
<style scoped>
</style>
  