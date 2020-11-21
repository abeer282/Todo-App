const state = {
    //all data will go here
    tasks: [
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
      ]
}

const mutations = {
    //methods that manipulate data in state , not async
}

const actions = {
    //methods that could be async, can call a server then pass to mutation 
}

const getters = {
    //methods that get data from state
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}