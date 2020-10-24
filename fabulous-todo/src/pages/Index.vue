<template>
  <q-page>
    <ul>
      <task 
          v-for = "(task,index) in tasks"
          :key = "task.id"
          :task = "task"
          :index = "index"> {{task.name}}</task>
    </ul>
  </q-page>
</template>

<script>
//import Task from 'components/Task.vue'

export default {
 data(){
   return{
     tasks:[
        {
          id:1,
          name:'Open an editor',
          dueDate: '2020/12/12',
          dueTime: '20:20'
        },
        {
          id:2,
          name:'Write some code',
          dueDate: '2020/12/24',
          dueTime: '20:20'
        },
        {
          id:3,
          name:'Run',
          dueDate: '2020/12/24',
          dueTime: '20:21'
        },
        {
          id:4,
          name:'Stam',
          dueDate: '2021/12/12',
          dueTime: '20:20'
        }
     ]
   }
 },
 methods:{
   deleteTask(index){
     this.tasks.splice(index,1)
   }
 },
 components:{
   //'task' : Task
   'task' : require('components/Task.vue').default
 }
    
}
</script>

<style>

</style>
