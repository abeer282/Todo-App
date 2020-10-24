<template>
  <q-page>
    <ul>
      <li v-for="task in tasks"> {{task}}</li>
    </ul>
  </q-page>
</template>

<script>
export default {
 data(){
   return{
     tasks:[
        {
          name:'Open an editor',
          dueDate: '2020/12/12',
          dueTime: '20:20'
        },
        {
          name:'Write some code',
          dueDate: '2020/12/24',
          dueTime: '20:20'
        },
        {
          name:'Run',
          dueDate: '2020/12/24',
          dueTime: '20:21'
        },
        {
          name:'Stam',
          dueDate: '2021/12/12',
          dueTime: '20:20'
        }
     ]
   }
 }
    
}
</script>

<style>

</style>
