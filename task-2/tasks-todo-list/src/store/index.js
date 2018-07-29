import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex .Store({
    state: {
        title: '',
        tasks: [
            {
                id: 0,
                title: 'Помыть кота',
                status: false,
                edit: true
            },
            {
                id: 1,
                title: 'Приготовить завтрак',
                status: true,
                edit: true
            }
        ],
        countTaskId: 2
    },
    getters: {
        compiletedTask (state) {
            return state.tasks.filter(task => task.status === true)
        },
        uncompiletedTask (state) {
            return state.tasks.filter(task => task.status === false)
        }
    },
    mutations: {
        addNewTask (state, title) {
            state.tasks.push({
                id: state.countTaskId++,
                title: title,
                status: false,
                edit: true
            })
            state.title = ''
        },
        removeTask (state, payload) {
            state.tasks.splice(payload, 1);
            state.countTaskId--;
        },
        editTask (state, payload) {
            state.tasks[payload.index].title = payload.title;
            state.tasks[payload.index].edit = !state.tasks[payload.index].edit;
        },
        setEdit (state, payload) {
            state.tasks[payload].edit = !state.tasks[payload].edit;
        }

    },
    actions: {
            

    }

})