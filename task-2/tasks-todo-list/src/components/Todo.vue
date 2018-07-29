<template>
    <div class="container">
        <div>
            <h1>Количество задач: {{countTaskId}}</h1>
        </div>
        <div class="input-group mb-3">
            <input
                class="form-control"
                v-model="newTitle"
                placeholder="Добавить задачу"
                @keyup.enter="addNewTask(newTitle)"
            >
            <button
                class="btn btn-info"
                @click="addNewTask(newTitle)"
            >Добавить</button>
        </div>
        <app-task></app-task>
    </div>
    
</template>
<script>

import Task from './task/Task.vue'


export default {
    data () {
        return {
            newTitle: ''
        }
    },
    components: {
        appTask: Task
    },
    computed: {
        countTaskId () {
            return this.$store.state.countTaskId;
        } 
    },
    methods: {
        addNewTask: function () {
            this.$store.commit('addNewTask', this.newTitle);
            this.newTitle = '';
        }
    }
}
</script>
<style>
 
</style>


