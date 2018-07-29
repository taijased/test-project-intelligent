<template>
    <div>
        <b-tabs>
                <b-tab title="Все">
                    <app-all></app-all>
                </b-tab>
                <b-tab title="Выполнено" >
                    <app-compileted></app-compileted>
                </b-tab>
                <b-tab title="Невыполнено">
                    <app-uncompileted></app-uncompileted>
                </b-tab>
        </b-tabs>       	
    </div>
    
</template>
<script>

import All from './All.vue'
import Compileted from './Compileted.vue'
import Uncompileted from './Uncompileted.vue'


export default {
    
    components: {
        appAll: All,
        appCompileted: Compileted,
        appUncompileted: Uncompileted
    }
}
</script>
<style>

</style>


