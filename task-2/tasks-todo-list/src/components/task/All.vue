<template>
    <div>
       <div 
            class="input-group mb-3"
            v-for="(task, index) in tasks"
            :key="task.id"
        >
            <div class="input-group-prepend">
                <div class="input-group-text">
                    <input 
                        type="checkbox"
                        v-model="task.status"
            >
                </div>
            </div>                
            <div 
                class="form-control taskClass"
                :class="getStatus(task.status)"
                @dblclick="setEdit(task.id)"
                v-show="task.edit"
            >
                <p>{{ task.title }} </p>             
            </div>
            <button 
                class="btn btn-danger"
                @click="removeTask(index)"  
                v-show="task.edit"
            >Удалить</button>
            <input 
                type="text" 
                class="form-control"
                v-model="newTitle"
                key="task.id"
                v-show="!task.edit"
            >
            <button 
                class="btn btn-info"        
                @click="editTask(task.id, newTitle)"  
                v-show="!task.edit"
            >Сохранить</button>
            <button 
                class="btn btn-secondary"
                @click="setEdit(task.id)"           
                v-show="!task.edit"
            >Отмена</button>

        </div> 
    </div>
</template>
<script>
export default {
    data () {
        return {
            edit: false,
            newTitle: ''
        }
    },
    computed: {
        tasks () {
            return this.$store.state.tasks;
        }
        
    },
    methods: {

        removeTask (index) {
            this.$store.commit('removeTask', index);
        },
        setEdit (index) {
            this.$store.commit('setEdit', index);
        },
        getStatus: status => status? 'bg-success' : 'bg-warning ',
        editTask (index, title){
            this.$store.commit('editTask', {index: index, title: title});
        }
    }
}
</script>
<style>
   .taskClass{
        color: white;
        padding-left: 20px;
        padding-top: 5px;
    }
    .taskClass:hover {
        cursor: pointer;
        box-shadow: 0 0 15px rgba(0,0,0,0.5);
    }
</style>

