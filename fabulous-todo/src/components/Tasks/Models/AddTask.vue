<template>
  <q-card>
    <q-card-section class="row">
      <div class="text-h6">Add Task</div>
      <q-space />
      <q-btn v-close-popup flat dense round icon="close" />
    </q-card-section>

    <q-form
      @submit.prevent="submitForm"
    >
      <q-card-section class="q-pt-none">
        <div class="q-mb-sm">
          <q-input
            outlined
            ref="name"
            v-model="taskToSubmit.name"
            label="Task Name"
            :rules="[(val) => !!val || 'Field is required']"
          />
        </div>

        <div class="q-mb-sm">
          <q-input 
            outlined 
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
                  <q-date v-model="taskToSubmit.dueDate"> </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>
        <div class="q-mb-sm">
          <q-input outlined v-model="taskToSubmit.dueTime" label="Due Time">
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
    </q-form>
  </q-card>
</template>

<script>
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
    submitForm() {
      this.$refs.name.validate()
      if(!this.$refs.name.hasError){
              console.log("Submitd");
      }
    }
  }
};
</script>

<style></style>
