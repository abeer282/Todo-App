<template>
   <q-card>

 <model-header>Add Task</model-header>

    <q-form
      @submit.prevent="submitForm"
    >
          <q-card-section class="q-pt-none">
              <model-task-name :name.sync="taskToSubmit.name"/>


        <div class="q-mb-sm">
          <q-input 
            outlined 
            clearable
            v-model="taskToSubmit.dueDate" 
            label="Due Date"
          >
            <template v-slot:append>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy
                  ref="qDateProxy"
                  transition-show="scale"
                  transition-hide="scale"
                >
                  <q-date v-model="taskToSubmit.dueDate"> 
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>
        <div class="q-mb-sm">
          <q-input 
            outlined 
            clearable
            v-model="taskToSubmit.dueTime" 
            label="Due Time"
            v-if="taskToSubmit.dueDate"
          >
            <template v-slot:append>
              <q-icon name="access_time" class="cursor-pointer">
                <q-popup-proxy transition-show="scale" transition-hide="scale">
                  <q-time v-model="taskToSubmit.dueTime">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-time>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn 
          flat 
          label="Save" 
          color="primary" 
          type="submit"
        />
      </q-card-actions>
      <pre>{{ taskToSubmit }}</pre>
    </q-form>
  </q-card>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      taskToSubmit: {
        name: "",
        dueDate: "",
        dueTime: "",
        completed: false,
      }
    }
  },
  methods: {
    ...mapActions('tasks', ['addTask']), //tasks from store will be mapped to add task
    submitForm() {
      this.$refs.name.validate()
      if(!this.$refs.name.hasError){
        this.submitTask()
      }
    },
    submitTask() {
      this.addTask(this.taskToSubmit)
      this.$emit('close')
    }
  },
  components: {
    'model-header' : require('components/Tasks/Models/shared/ModelHeader.vue').default,
    'model-task-name' : require('components/Tasks/Models/shared/ModelTaskName.vue').default
  }
};
</script>

<style></style>
