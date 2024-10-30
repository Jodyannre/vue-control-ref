<template>
    <h1>Child Component</h1>
    <h3> Porcentaje completado {{ percentage }}</h3>
</template>
  
<script lang="ts">
    // Option API
    // no necesita el expose, ya lo puede manejar
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'ChildComponent',
        data() {
            return {
                percentage: 0,
            }
        },
        methods: {
            recalculaPorcentaje() {
                this.percentage = 60
            }
        },
        mounted() {
            // simulando peticion a un servicio
            this.percentage = 34
        }
    })


    //Composition sin setup
    /*
    import { ref, defineExpose, defineComponent, onMounted } from 'vue'

    export default defineComponent({
        name: 'ChildComponent',
        setup() {
            const percentage = ref(0)

            const recalculaPorcentaje = () => {
                percentage.value = 60
            }

            defineExpose({
                recalculaPorcentaje
            })

            onMounted(() => {
                // simulando peticion a un servicio
                percentage.value = 34
            })

            return {
                percentage,
                recalculaPorcentaje
            }
        }
    })
    */    

    // composition con setup
    /*
    import { onMounted, ref, defineExpose} from 'vue'

    const percentage = ref(0)

    onMounted(()=>{
        // simulando peticion a un servicio
        percentage.value = 34
    })

    const recalculaPorcentaje = () => {
        percentage.value = 60
    }   

    defineExpose({
        recalculaPorcentaje
    })
    */

</script>
  
<style scoped>
</style>
  