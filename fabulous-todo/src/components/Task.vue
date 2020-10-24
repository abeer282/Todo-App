<template>
  <q-page>
    <ul>
      <li> 
          <div> {{task.name}}  {{index}}</div>
          <small>{{task.dueDate}} @ {{task.dueTime}} </small>
          <button @click="deleteTask(index)">x</button>
      </li>
    </ul>
  </q-page>
</template>
