<template>
  <q-page class="q-pa-md">
    <q-list 
      bordered
      separator
    >
      <task
            v-for="(task, key) in tasks"
            :key="key"
            :task="task"
            :id="key"
      >
      </task>
      <div class="absolute-bottom text-center q-mb-lg">
        <q-btn
          @click="showAddTask = true"
          round
          color="primary"
          size="24px"
          icon="add"
        />
      </div>

      <q-dialog v-model="showAddTask">
          <add-task @close="showAddTask=false" />
    </q-dialog>


      
    </q-list>
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data(){
    return {
        showAddTask: false
    }
  },
  computed: {
    ...mapGetters('tasks', ['tasks']) //which module and which getter
  },
  components: {
    'task' : require('components/Tasks/Task.vue').
    default,
    'add-task' : require('components/Tasks/Models/AddTask.vue').
    default
  }
};
</script>

<style></style>
