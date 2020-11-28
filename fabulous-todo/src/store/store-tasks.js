import Vue from 'vue'
import { uid } from 'quasar'

const state = {
    //all data will go here
    tasks: {
        // 'ID1' : {
        //     name: "Go to shop",
        //     completed: false,
        //     dueDate: '2020/12/02',
        //     dueTime: '12:00'
        // },
        // 'ID2' : {
        //     name: "Wash dishes",
        //     completed: false,
        //     dueDate: '2020/12/05',
        //     dueTime: '12:00'
        // },
        // 'ID3' : {
        //     name: "Watch TV",
        //     completed: false,
        //     dueDate: '2020/12/07',
        //     dueTime: '12:00'
        // }
    }


    /*tasks: [
        {
          id: 1,
          name: "Go to shop",
          completed: false,
          dueDate: '2020/12/02',
          dueTime: '12:00'
        },
        {
          id: 2,
          name: "Wash dishes",
          completed: false,
          dueDate: '2020/12/05',
          dueTime: '12:00'
        },
        {
          id: 3,
          name: "Watch TV",
          completed: false,
          dueDate: '2020/12/07',
          dueTime: '12:00'
        }
      ]*/
}

const mutations = {
    //methods that manipulate data in state , not async
    updateTask( state, payload) {
        Object.assign(state.tasks[payload.id], payload.updates)
    },
    deleteTask( state, id) {
        Vue.delete(state.tasks, id)
        //Object.assign(state.tasks[payload.id], payload.updates)
    },
    addTask(state, payload) {
        Vue.set(state.tasks, payload.id, payload.task)
    }
}

const actions = {
    //methods that could be async, can call a server then pass to mutation 
    updateTask({ commit }, payload) {
        console.log('task updated! - action')
        console.log('payload: ', payload);
        commit('updateTask', payload)
    },
    deleteTask({ commit }, id) {
        commit('deleteTask', id)
    },
    addTask({ commit }, task) {
        let taskId = uid()
        let payload = {
            id: taskId,
            task: task
        }
        commit('addTask', payload)
    }
}

const getters = {
    //methods that get data from state
    tasks: (state) => {
        return state.tasks
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}